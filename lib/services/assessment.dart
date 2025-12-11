import '../data/questions.dart';
import '../models.dart';

String calculatePersonalityType(List<AnswerValue> answers) {
  final scores = calculateDimensionScores(answers);

  final type = StringBuffer()
    ..write((scores['E']! >= scores['I']!) ? 'E' : 'I')
    ..write((scores['S']! >= scores['N']!) ? 'S' : 'N')
    ..write((scores['T']! >= scores['F']!) ? 'T' : 'F')
    ..write((scores['J']! >= scores['P']!) ? 'J' : 'P');

  return type.toString();
}

Map<String, int> calculateDimensionScores(List<AnswerValue> answers) {
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

  return scores;
}
