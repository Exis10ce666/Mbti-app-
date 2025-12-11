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
            aspectRatio: 4 / 3,
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
          const SizedBox(height: 12),
          _FactsSection(type: type),
          const SizedBox(height: 12),
          _FamousPeopleColumn(type: type),
        ],
      ),
    );
  }
}

class _FactsSection extends StatelessWidget {
  const _FactsSection({required this.type});
  final PersonalityType type;

  @override
  Widget build(BuildContext context) {
    final facts = type.quickFacts.isNotEmpty
        ? type.quickFacts
        : [
            'Add a quick snapshot that captures ${type.name} at a glance.',
            'Share a notable trait that embodies ${type.subtitle.toLowerCase()}.',
            'Highlight a memorable achievement or story.',
          ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: const [
            Icon(Icons.tips_and_updates, color: Colors.amber, size: 18),
            SizedBox(width: 6),
            Text('Quick facts', style: TextStyle(fontWeight: FontWeight.bold)),
          ],
        ),
        const SizedBox(height: 8),
        ...facts.map((fact) => Padding(
              padding: const EdgeInsets.only(bottom: 6),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Padding(
                    padding: EdgeInsets.only(top: 2),
                    child: Icon(Icons.circle, size: 8, color: Colors.black54),
                  ),
                  const SizedBox(width: 8),
                  Expanded(child: Text(fact)),
                ],
              ),
            )),
      ],
    );
  }
}

class _FamousPeopleColumn extends StatelessWidget {
  const _FamousPeopleColumn({required this.type});
  final PersonalityType type;

  @override
  Widget build(BuildContext context) {
    final entries = type.famousPeople;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: const [
            Icon(Icons.groups, color: Colors.amber, size: 18),
            SizedBox(width: 6),
            Text('Famous people who share your type', style: TextStyle(fontWeight: FontWeight.bold)),
          ],
        ),
        const SizedBox(height: 10),
        ...entries.map((entry) => Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: _FamousPersonTile(entry: entry, accent: type.accentColor),
            )),
        if (entries.isEmpty)
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: type.accentColor.withOpacity(0.1),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: type.accentColor.withOpacity(0.25)),
            ),
            child: const Text('Drop in three recognizable faces for this type.'),
          ),
      ],
    );
  }
}

class _FamousPersonTile extends StatelessWidget {
  const _FamousPersonTile({required this.entry, required this.accent});
  final FamousPerson entry;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: accent.withOpacity(0.12),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: accent.withOpacity(0.2)),
      ),
      child: Row(
        children: [
          _AvatarOrPlaceholder(asset: entry.avatarAsset, accent: accent),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(entry.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                Text(entry.role, style: const TextStyle(color: Colors.black54)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _AvatarOrPlaceholder extends StatelessWidget {
  const _AvatarOrPlaceholder({required this.asset, required this.accent});
  final String? asset;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: 20,
      backgroundColor: accent.withOpacity(0.18),
      child: asset == null
          ? const Text('Upload\nhere', textAlign: TextAlign.center, style: TextStyle(fontSize: 9))
          : ClipOval(
              child: Image.asset(
                asset!,
                fit: BoxFit.cover,
                width: 40,
                height: 40,
                errorBuilder: (_, __, ___) => const Text('Upload', textAlign: TextAlign.center, style: TextStyle(fontSize: 9)),
              ),
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
