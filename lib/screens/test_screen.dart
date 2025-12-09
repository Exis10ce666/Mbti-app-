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
      padding: const EdgeInsets.all(20),
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [Color(0xFF6D28D9), Color(0xFFEC4899)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Column(
        children: [
          Row(
            children: [
              IconButton(
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
              Text('Question ${current + 1} of ${questions.length}', style: const TextStyle(color: Colors.white)),
              const Spacer(),
              const SizedBox(width: 48),
            ],
          ),
          const SizedBox(height: 12),
          LinearProgressIndicator(value: progress, color: Colors.white, backgroundColor: Colors.white24),
          const Spacer(),
          Card(
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(question.prompt, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w600)),
                  const SizedBox(height: 24),
                  Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 12,
                    runSpacing: 12,
                    children: AnswerValue.values
                        .map((value) => _AnswerPill(value: value, onTap: () => _submitAnswer(value)))
                        .toList(),
                  ),
                  const SizedBox(height: 12),
                  const Text('Tap a pill to record your response', style: TextStyle(color: Colors.black54)),
                ],
              ),
            ),
          ),
          const Spacer(),
        ],
      ),
    );
  }
}

class _AnswerPill extends StatelessWidget {
  const _AnswerPill({required this.value, required this.onTap});
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
        AnswerValue.stronglyDisagree => Colors.red.shade400,
        AnswerValue.disagree => Colors.red.shade200,
        AnswerValue.neutral => Colors.grey.shade300,
        AnswerValue.agree => Colors.green.shade200,
        AnswerValue.stronglyAgree => Colors.green.shade400,
      };

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(14)),
        child: Text(label, style: const TextStyle(fontWeight: FontWeight.w600)),
      ),
    );
  }
}
