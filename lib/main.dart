import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(const PersonaViewApp());
}

enum AppScreen { login, welcome, test, loading, result, explore, insights, profile }

enum AnswerValue { stronglyDisagree(1), disagree(2), neutral(3), agree(4), stronglyAgree(5); 
  const AnswerValue(this.value);
  final int value;
}

class Question {
  const Question({
    required this.id,
    required this.prompt,
    required this.dimension,
    required this.scoreType,
  });

  final int id;
  final String prompt;
  final String dimension; // EI, SN, TF, JP
  final String scoreType; // E/I, S/N, T/F, J/P
}

class PersonalityType {
  const PersonalityType({
    required this.id,
    required this.name,
    required this.subtitle,
    required this.keyTraits,
    required this.strengths,
    required this.growthAreas,
    required this.atWork,
    required this.inRelationships,
    required this.underStress,
    this.localAsset,
    this.accentColor = const Color(0xFF6C63FF),
  });

  final String id;
  final String name;
  final String subtitle;
  final List<String> keyTraits;
  final List<String> strengths;
  final List<String> growthAreas;
  final String atWork;
  final String inRelationships;
  final String underStress;
  final String? localAsset;
  final Color accentColor;
}

// A compact personality catalog. Add more entries or replace the placeholder
// images inside assets/images to match your Figma exports.
final List<PersonalityType> personalityTypes = [
  PersonalityType(
    id: 'INTP',
    name: 'INTP',
    subtitle: 'The Strategic Thinker',
    keyTraits: const ['Analytical', 'Independent', 'Innovative'],
    strengths: const ['Logical reasoning', 'Conceptual thinking', 'Open-minded'],
    growthAreas: const ['May overthink', 'Struggle with routine'],
    atWork: 'You thrive on complex puzzles and autonomy. Give yourself deep work blocks.',
    inRelationships: 'You seek cerebral bonds and honest conversations.',
    underStress: 'You may withdraw to process ideas and detach from noise.',
    localAsset: 'assets/images/intp.png',
    accentColor: const Color(0xFF2E3A93),
  ),
  PersonalityType(
    id: 'ENFJ',
    name: 'ENFJ',
    subtitle: 'The Protagonist',
    keyTraits: const ['Charismatic', 'Organized', 'Empathetic'],
    strengths: const ['Motivates others', 'Communicates clearly', 'Values harmony'],
    growthAreas: const ['Can overextend', 'Takes on too much'],
    atWork: 'You excel when coordinating teams and communicating a vision.',
    inRelationships: 'You nurture others and look for authentic connection.',
    underStress: 'You might people-please or forget your own needs.',
    localAsset: 'assets/images/enfj.png',
    accentColor: const Color(0xFF1B5E20),
  ),
  PersonalityType(
    id: 'ISTJ',
    name: 'ISTJ',
    subtitle: 'The Logistician',
    keyTraits: const ['Grounded', 'Detail-oriented', 'Reliable'],
    strengths: const ['Systems mindset', 'Consistent', 'Responsible'],
    growthAreas: const ['May resist change', 'Can appear strict'],
    atWork: 'You shine with clear processes, ownership, and defined milestones.',
    inRelationships: 'You show care through reliability and follow-through.',
    underStress: 'You may double down on rules and become inflexible.',
    localAsset: 'assets/images/istj.png',
    accentColor: const Color(0xFF37474F),
  ),
  PersonalityType(
    id: 'ENFP',
    name: 'ENFP',
    subtitle: 'The Campaigner',
    keyTraits: const ['Enthusiastic', 'Creative', 'Curious'],
    strengths: const ['Energetic', 'Idea-rich', 'Empathetic'],
    growthAreas: const ['Can get scattered', 'May avoid routine'],
    atWork: 'You deliver best with variety and room to explore possibilities.',
    inRelationships: 'You bring warmth and imaginative adventures.',
    underStress: 'You might feel trapped or chase new distractions.',
    localAsset: 'assets/images/enfp.png',
    accentColor: const Color(0xFFF57C00),
  ),
];

final List<Question> questions = [
  Question(
    id: 1,
    prompt: 'I feel energized after spending time with a large group of people.',
    dimension: 'EI',
    scoreType: 'E',
  ),
  Question(
    id: 2,
    prompt: 'I prefer deep one-on-one conversations to group activities.',
    dimension: 'EI',
    scoreType: 'I',
  ),
  Question(
    id: 3,
    prompt: 'I pay attention to details rather than big ideas.',
    dimension: 'SN',
    scoreType: 'S',
  ),
  Question(
    id: 4,
    prompt: 'I get excited by abstract ideas and connections.',
    dimension: 'SN',
    scoreType: 'N',
  ),
  Question(
    id: 5,
    prompt: 'I value logic over emotions when making decisions.',
    dimension: 'TF',
    scoreType: 'T',
  ),
  Question(
    id: 6,
    prompt: 'Harmony in a group is more important than being right.',
    dimension: 'TF',
    scoreType: 'F',
  ),
  Question(
    id: 7,
    prompt: 'I like to plan things well in advance.',
    dimension: 'JP',
    scoreType: 'J',
  ),
  Question(
    id: 8,
    prompt: 'I feel most comfortable keeping my options open.',
    dimension: 'JP',
    scoreType: 'P',
  ),
];

String calculatePersonalityType(List<AnswerValue> answers) {
  final scores = <String, int>{'E': 0, 'I': 0, 'S': 0, 'N': 0, 'T': 0, 'F': 0, 'J': 0, 'P': 0};

  for (var i = 0; i < answers.length; i++) {
    final question = questions[i];
    final scoreType = question.scoreType;
    final opposite = switch (scoreType) {
      'E' => 'I',
      'I' => 'E',
      'S' => 'N',
      'N' => 'S',
      'T' => 'F',
      'F' => 'T',
      'J' => 'P',
      _ => 'J',
    };

    final value = answers[i].value;
    if (value == 5) {
      scores[scoreType] = (scores[scoreType] ?? 0) + 2;
    } else if (value == 4) {
      scores[scoreType] = (scores[scoreType] ?? 0) + 1;
    } else if (value == 2) {
      scores[opposite] = (scores[opposite] ?? 0) + 1;
    } else if (value == 1) {
      scores[opposite] = (scores[opposite] ?? 0) + 2;
    }
  }

  final type = StringBuffer()
    ..write((scores['E']! >= scores['I']!) ? 'E' : 'I')
    ..write((scores['S']! >= scores['N']!) ? 'S' : 'N')
    ..write((scores['T']! >= scores['F']!) ? 'T' : 'F')
    ..write((scores['J']! >= scores['P']!) ? 'J' : 'P');

  return type.toString();
}

PersonalityType lookupPersonality(String typeId) {
  return personalityTypes.firstWhere(
    (type) => type.id == typeId,
    orElse: () => personalityTypes.first,
  );
}

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

  void _handleLogin(String newEmail, String newUsername) {
    setState(() {
      email = newEmail;
      username = newUsername;
      currentScreen = AppScreen.welcome;
    });
  }

  void _startTest() {
    setState(() {
      answers = const [];
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
      final type = lookupPersonality(typeId);
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
    final text = 'I just discovered I\'m an ${type.name} - ${type.subtitle} on PersonaView!';
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
      userType = null;
      viewingType = null;
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

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key, required this.onSubmit});
  final void Function(String email, String username) onSubmit;

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final emailController = TextEditingController();
  final usernameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 24),
          const Text('PersonaView', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
          const SizedBox(height: 16),
          const Text('Sign in to start your personality journey.', style: TextStyle(color: Colors.black54)),
          const SizedBox(height: 32),
          TextField(
            controller: emailController,
            decoration: const InputDecoration(labelText: 'Email'),
          ),
          const SizedBox(height: 16),
          TextField(
            controller: usernameController,
            decoration: const InputDecoration(labelText: 'Username'),
          ),
          const Spacer(),
          FilledButton(
            onPressed: () => widget.onSubmit(
              emailController.text.trim(),
              usernameController.text.trim().isEmpty ? 'Guest' : usernameController.text.trim(),
            ),
            style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(52)),
            child: const Text('Continue'),
          ),
          const SizedBox(height: 12),
        ],
      ),
    );
  }
}

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key, required this.onStart, required this.onExplore});
  final VoidCallback onStart;
  final VoidCallback onExplore;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 12),
          const Text('Welcome back!', style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold)),
          const SizedBox(height: 8),
          const Text('Take the guided test or browse all types.', style: TextStyle(color: Colors.black54)),
          const SizedBox(height: 24),
          Expanded(
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(24),
                gradient: const LinearGradient(colors: [Color(0xFF8E2DE2), Color(0xFF4A00E0)]),
              ),
              child: const Center(
                child: Text('Drop your hero image into assets/images/welcome.png',
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600), textAlign: TextAlign.center),
              ),
            ),
          ),
          const SizedBox(height: 24),
          FilledButton(
            onPressed: onStart,
            style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(52)),
            child: const Text('Start the test'),
          ),
          const SizedBox(height: 12),
          OutlinedButton(
            onPressed: onExplore,
            style: OutlinedButton.styleFrom(minimumSize: const Size.fromHeight(52)),
            child: const Text('Explore all types'),
          ),
        ],
      ),
    );
  }
}

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
              Text('Question ${current + 1} of ${questions.length}',
                  style: const TextStyle(color: Colors.white)),
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

class LoadingScreen extends StatelessWidget {
  const LoadingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: const Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            CircularProgressIndicator(),
            SizedBox(height: 12),
            Text('Scoring your answers...'),
          ],
        ),
      ),
    );
  }
}

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
      color: color.withOpacity(0.25),
      child: const Center(
        child: Text('Add your art to assets/images', textAlign: TextAlign.center),
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
                CircleAvatar(radius: 34, backgroundColor: type.accentColor.withOpacity(0.2), child: Text(username.isEmpty ? 'You' : username.substring(0, 1).toUpperCase())),
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
