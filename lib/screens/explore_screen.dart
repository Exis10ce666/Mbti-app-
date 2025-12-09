import 'package:flutter/material.dart';

import '../models.dart';

class ExploreScreen extends StatelessWidget {
  const ExploreScreen({super.key, required this.types, required this.onSelect, required this.onBack, this.currentType});
  final List<PersonalityType> types;
  final void Function(PersonalityType type) onSelect;
  final VoidCallback onBack;
  final String? currentType;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Column(
        children: [
          AppBar(
            leading: IconButton(icon: const Icon(Icons.arrow_back), onPressed: onBack),
            title: const Text('Explore types'),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: types.length,
              itemBuilder: (context, index) {
                final type = types[index];
                return ListTile(
                  leading: CircleAvatar(backgroundColor: type.accentColor.withOpacity(0.2), child: Text(type.id)),
                  title: Text(type.name),
                  subtitle: Text(type.subtitle),
                  trailing: currentType == type.id ? const Icon(Icons.check, color: Colors.green) : null,
                  onTap: () => onSelect(type),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
