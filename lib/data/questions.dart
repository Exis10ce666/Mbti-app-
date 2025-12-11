import '../models.dart';

/// Expanded to 40 prompts covering each preference pair evenly.
final List<Question> questions = [
  // Extraversion vs Introversion
  Question(id: 1, prompt: 'I feel energized after spending time with a large group of people.', dimension: 'EI', scoreType: 'E'),
  Question(id: 2, prompt: 'I prefer deep one-on-one conversations to group activities.', dimension: 'EI', scoreType: 'I'),
  Question(id: 3, prompt: 'I easily start conversations with strangers.', dimension: 'EI', scoreType: 'E'),
  Question(id: 4, prompt: 'I need quiet time to recharge after social events.', dimension: 'EI', scoreType: 'I'),
  Question(id: 5, prompt: 'I enjoy being at the center of attention.', dimension: 'EI', scoreType: 'E'),
  Question(id: 6, prompt: 'I reflect internally before speaking in groups.', dimension: 'EI', scoreType: 'I'),
  Question(id: 7, prompt: 'Brainstorming in teams excites me.', dimension: 'EI', scoreType: 'E'),
  Question(id: 8, prompt: 'I prefer to observe before participating.', dimension: 'EI', scoreType: 'I'),
  Question(id: 9, prompt: 'I speak my thoughts aloud to process ideas.', dimension: 'EI', scoreType: 'E'),
  Question(id: 10, prompt: 'I think through ideas privately before sharing.', dimension: 'EI', scoreType: 'I'),

  // Sensing vs Intuition
  Question(id: 11, prompt: 'I rely on facts and past experience to solve problems.', dimension: 'SN', scoreType: 'S'),
  Question(id: 12, prompt: 'I enjoy imagining multiple future possibilities.', dimension: 'SN', scoreType: 'N'),
  Question(id: 13, prompt: 'I notice practical details that others might miss.', dimension: 'SN', scoreType: 'S'),
  Question(id: 14, prompt: 'I gravitate toward big-picture thinking.', dimension: 'SN', scoreType: 'N'),
  Question(id: 15, prompt: 'Clear, concrete instructions make me comfortable.', dimension: 'SN', scoreType: 'S'),
  Question(id: 16, prompt: 'I like exploring abstract theories.', dimension: 'SN', scoreType: 'N'),
  Question(id: 17, prompt: 'I trust information I can verify with my senses.', dimension: 'SN', scoreType: 'S'),
  Question(id: 18, prompt: 'I look for patterns and connections between ideas.', dimension: 'SN', scoreType: 'N'),
  Question(id: 19, prompt: 'I prefer realistic examples over hypotheticals.', dimension: 'SN', scoreType: 'S'),
  Question(id: 20, prompt: 'I often ask "what if" to explore new angles.', dimension: 'SN', scoreType: 'N'),

  // Thinking vs Feeling
  Question(id: 21, prompt: 'I prioritize objective logic when making decisions.', dimension: 'TF', scoreType: 'T'),
  Question(id: 22, prompt: 'I consider how choices will impact people emotionally.', dimension: 'TF', scoreType: 'F'),
  Question(id: 23, prompt: 'I enjoy debating ideas for clarity.', dimension: 'TF', scoreType: 'T'),
  Question(id: 24, prompt: 'I seek harmony even if it means compromising.', dimension: 'TF', scoreType: 'F'),
  Question(id: 25, prompt: 'I stay calm and analytical under pressure.', dimension: 'TF', scoreType: 'T'),
  Question(id: 26, prompt: 'I empathize quickly with others’ feelings.', dimension: 'TF', scoreType: 'F'),
  Question(id: 27, prompt: 'I value fairness over pleasing everyone.', dimension: 'TF', scoreType: 'T'),
  Question(id: 28, prompt: 'I check in on how others are doing before deciding.', dimension: 'TF', scoreType: 'F'),
  Question(id: 29, prompt: 'I am comfortable giving direct, critical feedback.', dimension: 'TF', scoreType: 'T'),
  Question(id: 30, prompt: 'I aim to protect relationships during conflict.', dimension: 'TF', scoreType: 'F'),

  // Judging vs Perceiving
  Question(id: 31, prompt: 'I like planning my day with a clear schedule.', dimension: 'JP', scoreType: 'J'),
  Question(id: 32, prompt: 'I keep plans loose so I can adapt.', dimension: 'JP', scoreType: 'P'),
  Question(id: 33, prompt: 'I prefer to finish one task before starting another.', dimension: 'JP', scoreType: 'J'),
  Question(id: 34, prompt: 'Spontaneous opportunities are exciting to me.', dimension: 'JP', scoreType: 'P'),
  Question(id: 35, prompt: 'I feel satisfied checking items off a list.', dimension: 'JP', scoreType: 'J'),
  Question(id: 36, prompt: 'I enjoy keeping options open until the last minute.', dimension: 'JP', scoreType: 'P'),
  Question(id: 37, prompt: 'I like making decisions early to avoid last-minute stress.', dimension: 'JP', scoreType: 'J'),
  Question(id: 38, prompt: 'I adapt plans easily when new information appears.', dimension: 'JP', scoreType: 'P'),
  Question(id: 39, prompt: 'I organize my workspace and files regularly.', dimension: 'JP', scoreType: 'J'),
  Question(id: 40, prompt: 'I am comfortable switching tasks when inspiration strikes.', dimension: 'JP', scoreType: 'P'),
];
