import 'package:flutter/material.dart';

import '../data/questions.dart';
import '../models.dart';

class TestScreen extends StatefulWidget {
  const TestScreen({super.key, required this.onComplete, required this.onBack});
  final void Function(List<AnswerValue> answers) onComplete;
  final VoidCallback onBack;

  @override
  State<TestScreen> createState() => _TestScreenState();
}

class _TestScreenState extends State<TestScreen> {
  int current = 0;
  final List<AnswerValue> answers = [];

  void _submitAnswer(AnswerValue value) {
    setState(() => answers.add(value));
    if (current < questions.length - 1) {
      setState(() => current++);
    } else {
      widget.onComplete(List.of(answers));
    }
  }

  @override
  Widget build(BuildContext context) {
    final question = questions[current];
    final progress = (current + 1) / questions.length;

    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [Color(0xFF6D28D9), Color(0xFFEC4899)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  IconButton(
                    padding: EdgeInsets.zero,
                    constraints: const BoxConstraints(),
                    onPressed: () {
                      if (current == 0) {
                        widget.onBack();
                      } else {
                        setState(() {
                          current -= 1;
                          answers.removeLast();
                        });
                      }
                    },
                    icon: const Icon(Icons.arrow_back, color: Colors.white),
                  ),
                  const Spacer(),
                  Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Text('PERSONAVIEW',
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, letterSpacing: 0.8)),
                      const SizedBox(height: 4),
                      Text(
                        'Question ${current + 1} of ${questions.length}',
                        style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w600),
                      ),
                    ],
                  ),
                  const Spacer(),
                  const SizedBox(width: 32),
                ],
              ),
              const SizedBox(height: 12),
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: LinearProgressIndicator(
                  value: progress,
                  minHeight: 6,
                  color: Colors.white,
                  backgroundColor: Colors.white24,
                ),
              ),
              const SizedBox(height: 24),
              Expanded(
                child: Center(
                  child: Container(
                    constraints: const BoxConstraints(maxWidth: 520),
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 26),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(24),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.1),
                          blurRadius: 16,
                          offset: const Offset(0, 8),
                        ),
                      ],
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          question.prompt,
                          textAlign: TextAlign.center,
                          style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, height: 1.4),
                        ),
                        const SizedBox(height: 28),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: AnswerValue.values
                              .map((value) => _AnswerDot(value: value, onTap: () => _submitAnswer(value)))
                              .expand((widget) => [widget, const SizedBox(width: 18)])
                              .toList()
                            ..removeLast(),
                        ),
                        const SizedBox(height: 16),
                        const Text(
                          'Tap a circle to select your answer',
                          style: TextStyle(color: Colors.black54, fontWeight: FontWeight.w600),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _AnswerDot extends StatelessWidget {
  const _AnswerDot({required this.value, required this.onTap});
  final AnswerValue value;
  final VoidCallback onTap;

  String get label => switch (value) {
        AnswerValue.stronglyDisagree => 'Strongly Disagree',
        AnswerValue.disagree => 'Disagree',
        AnswerValue.neutral => 'Neutral',
        AnswerValue.agree => 'Agree',
        AnswerValue.stronglyAgree => 'Strongly Agree',
      };

  Color get color => switch (value) {
        AnswerValue.stronglyDisagree => const Color(0xFFE53935),
        AnswerValue.disagree => const Color(0xFFF28B82),
        AnswerValue.neutral => const Color(0xFFBDBDBD),
        AnswerValue.agree => const Color(0xFFA5D6A7),
        AnswerValue.stronglyAgree => const Color(0xFF43A047),
      };

  double get size => switch (value) {
        AnswerValue.stronglyDisagree => 64,
        AnswerValue.disagree => 52,
        AnswerValue.neutral => 44,
        AnswerValue.agree => 52,
        AnswerValue.stronglyAgree => 64,
      };

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        GestureDetector(
          onTap: onTap,
          child: Container(
            width: size,
            height: size,
            decoration: BoxDecoration(
              color: color,
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.18),
                  blurRadius: 12,
                  offset: const Offset(0, 6),
                ),
              ],
              border: Border.all(color: Colors.white, width: 2),
            ),
          ),
        ),
        const SizedBox(height: 8),
        Text(
          label,
          style: const TextStyle(fontWeight: FontWeight.w600),
        ),
      ],
    );
  }
}
