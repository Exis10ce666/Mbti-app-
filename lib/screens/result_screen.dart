import 'package:flutter/material.dart';

import '../models.dart';

class ResultScreen extends StatelessWidget {
  const ResultScreen({super.key, required this.type, required this.onExplore, required this.onShare});
  final PersonalityType type;
  final VoidCallback onExplore;
  final VoidCallback onShare;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      padding: const EdgeInsets.all(20),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                CircleAvatar(radius: 24, backgroundColor: type.accentColor.withOpacity(0.15), child: Text(type.id)),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(type.name, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
                      Text(type.subtitle, style: const TextStyle(color: Colors.black54)),
                    ],
                  ),
                ),
                IconButton(onPressed: onShare, icon: const Icon(Icons.ios_share_rounded)),
              ],
            ),
            const SizedBox(height: 16),
            _TypeCard(type: type),
            const SizedBox(height: 16),
            FilledButton(
              onPressed: onExplore,
              style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(52)),
              child: const Text('Explore all types'),
            ),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}

class _TypeCard extends StatelessWidget {
  const _TypeCard({required this.type});
  final PersonalityType type;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [type.accentColor.withOpacity(0.12), Colors.white]),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: type.accentColor.withOpacity(0.3)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          AspectRatio(
            aspectRatio: 16 / 9,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(14),
              child: _TypeImage(path: type.localAsset, fallbackColor: type.accentColor),
            ),
          ),
          const SizedBox(height: 12),
          const Text('Key traits', style: TextStyle(fontWeight: FontWeight.bold)),
          const SizedBox(height: 6),
          Wrap(spacing: 8, runSpacing: 8, children: type.keyTraits.map((trait) => Chip(label: Text(trait))).toList()),
          const SizedBox(height: 12),
          _BulletList(title: 'Strengths', items: type.strengths),
          _BulletList(title: 'Growth areas', items: type.growthAreas),
        ],
      ),
    );
  }
}

class _TypeImage extends StatelessWidget {
  const _TypeImage({this.path, required this.fallbackColor});
  final String? path;
  final Color fallbackColor;

  @override
  Widget build(BuildContext context) {
    if (path != null) {
      return Image.asset(
        path!,
        fit: BoxFit.cover,
        errorBuilder: (context, error, stackTrace) => _FallbackBlock(color: fallbackColor),
      );
    }
    return _FallbackBlock(color: fallbackColor);
  }
}

class _FallbackBlock extends StatelessWidget {
  const _FallbackBlock({required this.color});
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: color.withOpacity(0.2),
      child: const Center(
        child: Text('Add an image in assets/images', textAlign: TextAlign.center),
      ),
    );
  }
}

class _BulletList extends StatelessWidget {
  const _BulletList({required this.title, required this.items});
  final String title;
  final List<String> items;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 8),
        ...items.map((item) => Padding(
              padding: const EdgeInsets.only(bottom: 6),
              child: Row(
                children: [
                  const Icon(Icons.check_circle, size: 16, color: Colors.black54),
                  const SizedBox(width: 8),
                  Expanded(child: Text(item)),
                ],
              ),
            )),
      ],
    );
  }
}
