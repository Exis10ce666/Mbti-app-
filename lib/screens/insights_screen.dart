import 'package:flutter/material.dart';

import '../data/personality_types.dart';
import '../models.dart';

class InsightsScreen extends StatelessWidget {
  const InsightsScreen({super.key, required this.type, required this.onBack});
  final PersonalityType type;
  final VoidCallback onBack;

  @override
  Widget build(BuildContext context) {
    final insights = personalityInsights[type.id] ?? _fallbackInsights(type);
    final tips = personalityQuickTips[type.id] ?? _fallbackTips(type);
    final bg = type.accentColor.withOpacity(0.08);

    return Scaffold(
      backgroundColor: const Color(0xFFF5F7FB),
      body: SafeArea(
        child: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [bg, Colors.white],
            ),
          ),
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                child: Row(
                  children: [
                    IconButton(
                      icon: const Icon(Icons.arrow_back),
                      onPressed: onBack,
                    ),
                    const SizedBox(width: 4),
                    Text(
                      'Insights & Guidance',
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                            fontWeight: FontWeight.w700,
                          ),
                    ),
                  ],
                ),
              ),
              Expanded(
                child: ListView(
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                  children: [
                    _InsightHeader(type: type),
                    const SizedBox(height: 16),
                    ...insights.map((item) => Padding(
                          padding: const EdgeInsets.only(bottom: 12),
                          child: _InsightCard(item: item, accent: type.accentColor),
                        )),
                    const SizedBox(height: 16),
                    _QuickTipsGrid(tips: tips, accent: type.accentColor, typeName: type.name),
                    const SizedBox(height: 24),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  List<InsightItem> _fallbackInsights(PersonalityType type) {
    return [
      InsightItem(title: 'At work', body: type.atWork, tag: 'Essentials', icon: Icons.work_outline),
      InsightItem(title: 'In relationships', body: type.inRelationships, tag: 'Essentials', icon: Icons.people_outline),
      InsightItem(title: 'Under stress', body: type.underStress, tag: 'Essentials', icon: Icons.heart_broken_outlined),
    ];
  }

  List<QuickTip> _fallbackTips(PersonalityType type) {
    return [
      QuickTip(title: 'Strength', body: type.strengths.join(', ')),
      QuickTip(title: 'Growth', body: type.growthAreas.join(', ')),
      QuickTip(title: 'Traits', body: type.keyTraits.join(', ')),
      QuickTip(title: 'Motto', body: 'Lead with your ${type.subtitle.toLowerCase()} superpower.'),
    ];
  }
}

class _InsightHeader extends StatelessWidget {
  const _InsightHeader({required this.type});
  final PersonalityType type;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 12,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 24,
            backgroundColor: type.accentColor.withOpacity(0.15),
            child: Text(
              type.id,
              style: TextStyle(
                color: type.accentColor,
                fontWeight: FontWeight.w800,
              ),
            ),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '${type.name} · ${type.subtitle}',
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700),
                ),
                const SizedBox(height: 6),
                Text(
                  'Personalized tips for ${type.subtitle.toLowerCase()}',
                  style: TextStyle(color: Colors.grey.shade700),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

class _InsightCard extends StatelessWidget {
  const _InsightCard({required this.item, required this.accent});
  final InsightItem item;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            offset: const Offset(0, 5),
          )
        ],
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: accent.withOpacity(0.12),
              shape: BoxShape.circle,
            ),
            child: Icon(item.icon, color: accent, size: 22),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        item.title,
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                      decoration: BoxDecoration(
                        color: Colors.grey.shade100,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        item.tag,
                        style: TextStyle(fontSize: 12, color: Colors.grey.shade700),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(
                  item.body,
                  style: const TextStyle(height: 1.4),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}

class _QuickTipsGrid extends StatelessWidget {
  const _QuickTipsGrid({required this.tips, required this.accent, required this.typeName});
  final List<QuickTip> tips;
  final Color accent;
  final String typeName;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Quick Tips for Thriving as a $typeName',
          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700),
        ),
        const SizedBox(height: 12),
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 1.1,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
          ),
          itemCount: tips.length,
          itemBuilder: (context, index) => _TipTile(tip: tips[index], accent: accent),
        ),
      ],
    );
  }
}

class _TipTile extends StatelessWidget {
  const _TipTile({required this.tip, required this.accent});
  final QuickTip tip;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: accent.withOpacity(0.08),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            tip.title,
            style: TextStyle(fontWeight: FontWeight.w700, color: accent.darken()),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: Text(
              tip.body,
              style: TextStyle(color: Colors.grey.shade800, height: 1.35),
            ),
          ),
        ],
      ),
    );
  }
}

extension on Color {
  Color darken([double amount = 0.12]) {
    final hsl = HSLColor.fromColor(this);
    final lightness = (hsl.lightness - amount).clamp(0.0, 1.0);
    return hsl.withLightness(lightness).toColor();
  }
}
