import 'dart:developer';

import 'package:supabase_flutter/supabase_flutter.dart';

import '../data/questions.dart';
import '../models.dart';

const String supabaseUrl = String.fromEnvironment(
  'SUPABASE_URL',
  defaultValue: 'https://your-project.supabase.co',
);
const String supabaseAnonKey = String.fromEnvironment(
  'SUPABASE_ANON_KEY',
  defaultValue: 'public-anon-key',
);

class DatabaseService {
  DatabaseService._();

  static final DatabaseService instance = DatabaseService._();

  SupabaseClient? _client;

  bool get isConfigured =>
      !supabaseUrl.contains('your-project') && supabaseAnonKey != 'public-anon-key';

  bool get isReady => _client != null;

  Future<bool> init() async {
    if (!isConfigured) {
      log('Supabase not configured; skipping database init.');
      return false;
    }

    try {
      await Supabase.initialize(url: supabaseUrl, anonKey: supabaseAnonKey);
      _client = Supabase.instance.client;
      return true;
    } catch (e, stack) {
      log('Failed to initialize Supabase: $e', stackTrace: stack);
      return false;
    }
  }

  Future<String?> upsertUser({required String email, required String username}) async {
    if (_client == null || (email.isEmpty && username.isEmpty)) return null;

    try {
      final result = await _client!
          .from('users')
          .upsert(
            {
              if (email.isNotEmpty) 'email': email,
              if (username.isNotEmpty) 'username': username,
              'updated_at': DateTime.now().toIso8601String(),
            },
            onConflict: 'email',
          )
          .select('user_id')
          .maybeSingle();

      return result?['user_id'] as String?;
    } catch (e, stack) {
      log('Failed to upsert user: $e', stackTrace: stack);
      return null;
    }
  }

  Future<void> saveResult({
    required String userId,
    required String typeId,
    required Map<String, int> scores,
    required List<AnswerValue> answers,
    int? durationSeconds,
  }) async {
    if (_client == null) return;

    try {
      await _client!.from('test_results').update({'is_current': false}).eq('user_id', userId).eq('is_current', true);

      final inserted = await _client!
          .from('test_results')
          .insert({
            'user_id': userId,
            'type_id': typeId,
            'e_score': scores['E'],
            'i_score': scores['I'],
            's_score': scores['S'],
            'n_score': scores['N'],
            't_score': scores['T'],
            'f_score': scores['F'],
            'j_score': scores['J'],
            'p_score': scores['P'],
            'time_taken_seconds': durationSeconds,
            'is_current': true,
            'completed_at': DateTime.now().toIso8601String(),
          })
          .select('result_id')
          .maybeSingle();

      final resultId = inserted?['result_id'] as String?;
      if (resultId == null) return;

      final answerRows = <Map<String, dynamic>>[];
      for (var i = 0; i < answers.length && i < questions.length; i++) {
        answerRows.add({
          'result_id': resultId,
          'question_id': questions[i].id,
          'answer_value': answers[i].value,
        });
      }

      if (answerRows.isNotEmpty) {
        await _client!.from('user_answers').upsert(answerRows);
      }
    } catch (e, stack) {
      log('Failed to save test result: $e', stackTrace: stack);
    }
  }
}
