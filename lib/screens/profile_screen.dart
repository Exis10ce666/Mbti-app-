import 'package:flutter/material.dart';

import '../models.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key, required this.type, required this.username, required this.onBack, required this.onRetake, required this.onShare, required this.onLogout});
  final PersonalityType type;
  final String username;
  final VoidCallback onBack;
  final VoidCallback onRetake;
  final VoidCallback onShare;
  final VoidCallback onLogout;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Column(
        children: [
          AppBar(
            leading: IconButton(icon: const Icon(Icons.arrow_back), onPressed: onBack),
            title: const Text('Profile'),
            actions: [IconButton(onPressed: onShare, icon: const Icon(Icons.ios_share_rounded))],
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              children: [
                CircleAvatar(
                  radius: 34,
                  backgroundColor: type.accentColor.withOpacity(0.2),
                  child: Text(username.isEmpty ? 'You' : username.substring(0, 1).toUpperCase()),
                ),
                const SizedBox(height: 12),
                Text(username.isEmpty ? 'You' : username, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                Text('${type.name} · ${type.subtitle}', style: const TextStyle(color: Colors.black54)),
                const SizedBox(height: 16),
                FilledButton(
                  onPressed: onRetake,
                  style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(48)),
                  child: const Text('Retake the test'),
                ),
                const SizedBox(height: 12),
                OutlinedButton(
                  onPressed: onLogout,
                  style: OutlinedButton.styleFrom(minimumSize: const Size.fromHeight(48)),
                  child: const Text('Log out'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
