import 'package:flutter/material.dart';

import '../models.dart';

class InsightsScreen extends StatelessWidget {
  const InsightsScreen({super.key, required this.type, required this.onBack});
  final PersonalityType type;
  final VoidCallback onBack;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Column(
        children: [
          AppBar(
            leading: IconButton(icon: const Icon(Icons.arrow_back), onPressed: onBack),
            title: Text('${type.name} insights'),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(16),
              children: [
                _InfoBlock(title: 'At work', body: type.atWork),
                _InfoBlock(title: 'In relationships', body: type.inRelationships),
                _InfoBlock(title: 'Under stress', body: type.underStress),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _InfoBlock extends StatelessWidget {
  const _InfoBlock({required this.title, required this.body});
  final String title;
  final String body;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.grey.shade100,
        borderRadius: BorderRadius.circular(14),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
          const SizedBox(height: 8),
          Text(body),
        ],
      ),
    );
  }
}
