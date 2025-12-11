import 'package:flutter/material.dart';

import 'app_shell.dart';
import 'services/database.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await DatabaseService.instance.init();
  runApp(const PersonaViewApp());
}
