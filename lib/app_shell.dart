import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'data/personality_types.dart';
import 'models.dart';
import 'services/assessment.dart';
import 'services/database.dart';
import 'screens/explore_screen.dart';
import 'screens/insights_screen.dart';
import 'screens/loading_screen.dart';
import 'screens/login_screen.dart';
import 'screens/profile_screen.dart';
import 'screens/result_screen.dart';
import 'screens/test_screen.dart';
import 'screens/welcome_screen.dart';

class PersonaViewApp extends StatefulWidget {
  const PersonaViewApp({super.key});

  @override
  State<PersonaViewApp> createState() => _PersonaViewAppState();
}

class _PersonaViewAppState extends State<PersonaViewApp> {
  AppScreen currentScreen = AppScreen.login;
  List<AnswerValue> answers = const [];
  PersonalityType? userType;
  PersonalityType? viewingType;
  String? email;
  String? username;
  String? userId;
  bool databaseReady = false;
  DateTime? testStartedAt;

  @override
  void initState() {
    super.initState();
    _initDatabase();
  }

  Future<void> _initDatabase() async {
    if (DatabaseService.instance.isReady) {
      setState(() => databaseReady = true);
      return;
    }

    final initialized = await DatabaseService.instance.init();
    if (mounted) {
      setState(() {
        databaseReady = initialized;
      });
    }
  }

  void _handleLogin(String newEmail, String newUsername) async {
    final id = await DatabaseService.instance.upsertUser(email: newEmail, username: newUsername);
    setState(() {
      email = newEmail;
      username = newUsername;
      userId = id ?? userId;
      currentScreen = AppScreen.welcome;
    });
  }

  void _startTest() {
    setState(() {
      answers = const [];
      testStartedAt = DateTime.now();
      currentScreen = AppScreen.test;
    });
  }

  void _completeTest(List<AnswerValue> submission) {
    setState(() {
      answers = submission;
      currentScreen = AppScreen.loading;
    });

    Future.delayed(const Duration(milliseconds: 1200), () {
      final typeId = calculatePersonalityType(submission);
      final scores = calculateDimensionScores(submission);
      final type = _lookupPersonality(typeId);
      final durationSeconds = testStartedAt != null ? DateTime.now().difference(testStartedAt!).inSeconds : null;

      if (userId != null && databaseReady) {
        DatabaseService.instance.saveResult(
          userId: userId!,
          typeId: typeId,
          scores: scores,
          answers: submission,
          durationSeconds: durationSeconds,
        );
      }
      setState(() {
        userType = type;
        viewingType = type;
        currentScreen = AppScreen.result;
      });
    });
  }

  void _selectType(PersonalityType type) {
    setState(() {
      viewingType = type;
      currentScreen = AppScreen.result;
    });
  }

  void _share() {
    final type = viewingType ?? userType;
    if (type == null) return;
    final text = "I just discovered I'm an ${type.name} - ${type.subtitle} on PersonaView!";
    Clipboard.setData(ClipboardData(text: text));
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Copied share text to clipboard')),
    );
  }

  void _retake() {
    setState(() {
      answers = const [];
      currentScreen = AppScreen.welcome;
    });
  }

  void _logout() {
    setState(() {
      email = null;
      username = null;
      userId = null;
      userType = null;
      viewingType = null;
      testStartedAt = null;
      currentScreen = AppScreen.login;
    });
  }

  @override
  Widget build(BuildContext context) {
    final showNav = switch (currentScreen) {
      AppScreen.result || AppScreen.explore || AppScreen.insights || AppScreen.profile => true,
      _ => false,
    };

    return MaterialApp(
      title: 'PersonaView',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 430),
              child: Container(
                margin: const EdgeInsets.all(16),
                padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 10),
                decoration: BoxDecoration(
                  color: Colors.black,
                  borderRadius: BorderRadius.circular(46),
                  boxShadow: const [
                    BoxShadow(color: Colors.black54, blurRadius: 24, offset: Offset(0, 18)),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(38),
                  child: Stack(
                    children: [
                      _buildScreen(),
                      if (showNav)
                        Align(
                          alignment: Alignment.bottomCenter,
                          child: BottomNavigationBar(
                            backgroundColor: Colors.white,
                            currentIndex: _navIndexForScreen(currentScreen),
                            onTap: (index) => _handleNavigationTap(index),
                            type: BottomNavigationBarType.fixed,
                            selectedItemColor: Colors.deepPurple,
                            items: const [
                              BottomNavigationBarItem(icon: Icon(Icons.home_rounded), label: 'Home'),
                              BottomNavigationBarItem(icon: Icon(Icons.explore_rounded), label: 'Explore'),
                              BottomNavigationBarItem(icon: Icon(Icons.lightbulb_outline), label: 'Insights'),
                              BottomNavigationBarItem(icon: Icon(Icons.person_rounded), label: 'Profile'),
                            ],
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  PersonalityType _lookupPersonality(String typeId) {
    return personalityTypes.firstWhere(
      (type) => type.id == typeId,
      orElse: () => personalityTypes.first,
    );
  }

  int _navIndexForScreen(AppScreen screen) {
    return switch (screen) {
      AppScreen.result => 0,
      AppScreen.explore => 1,
      AppScreen.insights => 2,
      AppScreen.profile => 3,
      _ => 0,
    };
  }

  void _handleNavigationTap(int index) {
    if (index == 0) {
      setState(() => currentScreen = userType != null ? AppScreen.result : AppScreen.welcome);
    } else if (index == 1) {
      setState(() => currentScreen = AppScreen.explore);
    } else if (index == 2) {
      setState(() => currentScreen = userType != null ? AppScreen.insights : AppScreen.welcome);
    } else if (index == 3) {
      setState(() => currentScreen = userType != null ? AppScreen.profile : AppScreen.welcome);
    }
  }

  Widget _buildScreen() {
    switch (currentScreen) {
      case AppScreen.login:
        return LoginScreen(onSubmit: _handleLogin);
      case AppScreen.welcome:
        return WelcomeScreen(onStart: _startTest, onExplore: () => setState(() => currentScreen = AppScreen.explore));
      case AppScreen.test:
        return TestScreen(onComplete: _completeTest, onBack: () => setState(() => currentScreen = AppScreen.welcome));
      case AppScreen.loading:
        return const LoadingScreen();
      case AppScreen.result:
        return ResultScreen(
          type: viewingType ?? userType ?? personalityTypes.first,
          onExplore: () => setState(() => currentScreen = AppScreen.explore),
          onShare: _share,
        );
      case AppScreen.explore:
        return ExploreScreen(
          types: personalityTypes,
          currentType: userType?.id,
          onSelect: _selectType,
          onBack: () => setState(() => currentScreen = userType != null ? AppScreen.result : AppScreen.welcome),
        );
      case AppScreen.insights:
        return InsightsScreen(
          type: userType ?? personalityTypes.first,
          onBack: () => setState(() => currentScreen = AppScreen.result),
        );
      case AppScreen.profile:
        return ProfileScreen(
          type: userType ?? personalityTypes.first,
          username: username ?? 'Guest',
          onBack: () => setState(() => currentScreen = AppScreen.result),
          onRetake: _retake,
          onShare: _share,
          onLogout: _logout,
        );
    }
  }
}
