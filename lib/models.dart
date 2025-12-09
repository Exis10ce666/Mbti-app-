import 'package:flutter/material.dart';

enum AppScreen { login, welcome, test, loading, result, explore, insights, profile }

enum AnswerValue { stronglyDisagree(1), disagree(2), neutral(3), agree(4), stronglyAgree(5);  
  const AnswerValue(this.value);
  final int value;
}

class Question {
  const Question({
    required this.id,
    required this.prompt,
    required this.dimension,
    required this.scoreType,
  });

  final int id;
  final String prompt;
  final String dimension; // EI, SN, TF, JP
  final String scoreType; // E/I, S/N, T/F, J/P
}

class PersonalityType {
  const PersonalityType({
    required this.id,
    required this.name,
    required this.subtitle,
    required this.keyTraits,
    required this.strengths,
    required this.growthAreas,
    required this.atWork,
    required this.inRelationships,
    required this.underStress,
    this.localAsset,
    this.accentColor = const Color(0xFF6C63FF),
  });

  final String id;
  final String name;
  final String subtitle;
  final List<String> keyTraits;
  final List<String> strengths;
  final List<String> growthAreas;
  final String atWork;
  final String inRelationships;
  final String underStress;
  final String? localAsset;
  final Color accentColor;
}
