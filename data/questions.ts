export interface Question {
  id: number;
  question: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP'; // Extraversion-Introversion, Sensing-Intuition, Thinking-Feeling, Judging-Perceiving
  scoreType: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'; // Which trait "Agree" supports
}

export const questions: Question[] = [
  // Extraversion (E) vs Introversion (I) – Energy Source
  {
    id: 1,
    question: 'I feel energized after spending time with a large group of people.',
    dimension: 'EI',
    scoreType: 'E'
  },
  {
    id: 2,
    question: 'I prefer deep one-on-one conversations to group activities.',
    dimension: 'EI',
    scoreType: 'I'
  },
  {
    id: 3,
    question: 'I often speak up first in discussions or meetings.',
    dimension: 'EI',
    scoreType: 'E'
  },
  {
    id: 4,
    question: 'I need quiet time alone to recharge.',
    dimension: 'EI',
    scoreType: 'I'
  },
  {
    id: 5,
    question: 'I enjoy being the center of attention.',
    dimension: 'EI',
    scoreType: 'E'
  },
  {
    id: 6,
    question: 'Too much social interaction drains my energy.',
    dimension: 'EI',
    scoreType: 'I'
  },
  {
    id: 7,
    question: 'I make friends easily and talk to strangers comfortably.',
    dimension: 'EI',
    scoreType: 'E'
  },
  {
    id: 8,
    question: 'I tend to think before I speak.',
    dimension: 'EI',
    scoreType: 'I'
  },
  {
    id: 9,
    question: 'I like to keep my social circle small but meaningful.',
    dimension: 'EI',
    scoreType: 'I'
  },
  {
    id: 10,
    question: 'I thrive in busy, lively environments.',
    dimension: 'EI',
    scoreType: 'E'
  },

  // Sensing (S) vs Intuition (N) – Information & Perception
  {
    id: 11,
    question: 'I pay attention to details rather than big ideas.',
    dimension: 'SN',
    scoreType: 'S'
  },
  {
    id: 12,
    question: 'I enjoy thinking about future possibilities more than present facts.',
    dimension: 'SN',
    scoreType: 'N'
  },
  {
    id: 13,
    question: 'I trust experience over theory.',
    dimension: 'SN',
    scoreType: 'S'
  },
  {
    id: 14,
    question: 'I get excited by abstract ideas and connections.',
    dimension: 'SN',
    scoreType: 'N'
  },
  {
    id: 15,
    question: 'I prefer step-by-step instructions over open-ended tasks.',
    dimension: 'SN',
    scoreType: 'S'
  },
  {
    id: 16,
    question: 'I often think about how things could be improved or re-imagined.',
    dimension: 'SN',
    scoreType: 'N'
  },
  {
    id: 17,
    question: 'I notice physical details others often miss.',
    dimension: 'SN',
    scoreType: 'S'
  },
  {
    id: 18,
    question: 'I focus more on what could happen than what is happening.',
    dimension: 'SN',
    scoreType: 'N'
  },
  {
    id: 19,
    question: 'I enjoy practical tasks with clear outcomes.',
    dimension: 'SN',
    scoreType: 'S'
  },
  {
    id: 20,
    question: 'I like exploring patterns, meanings, and metaphors.',
    dimension: 'SN',
    scoreType: 'N'
  },

  // Thinking (T) vs Feeling (F) – Decision-Making
  {
    id: 21,
    question: 'I value logic over emotions when making decisions.',
    dimension: 'TF',
    scoreType: 'T'
  },
  {
    id: 22,
    question: 'I consider how my choices affect others\' feelings.',
    dimension: 'TF',
    scoreType: 'F'
  },
  {
    id: 23,
    question: 'I find it easy to stay objective even in emotional situations.',
    dimension: 'TF',
    scoreType: 'T'
  },
  {
    id: 24,
    question: 'I often follow my heart even when logic disagrees.',
    dimension: 'TF',
    scoreType: 'F'
  },
  {
    id: 25,
    question: 'I like to debate ideas to find the truth.',
    dimension: 'TF',
    scoreType: 'T'
  },
  {
    id: 26,
    question: 'Harmony in a group is more important than being right.',
    dimension: 'TF',
    scoreType: 'F'
  },
  {
    id: 27,
    question: 'I criticize ideas, not people.',
    dimension: 'TF',
    scoreType: 'T'
  },
  {
    id: 28,
    question: 'I empathize quickly with others\' problems.',
    dimension: 'TF',
    scoreType: 'F'
  },
  {
    id: 29,
    question: 'I prefer honesty over tact.',
    dimension: 'TF',
    scoreType: 'T'
  },
  {
    id: 30,
    question: 'I try to avoid hurting others\' feelings even if I disagree.',
    dimension: 'TF',
    scoreType: 'F'
  },

  // Judging (J) vs Perceiving (P) – Lifestyle & Organization
  {
    id: 31,
    question: 'I like to plan things well in advance.',
    dimension: 'JP',
    scoreType: 'J'
  },
  {
    id: 32,
    question: 'I enjoy being spontaneous and flexible.',
    dimension: 'JP',
    scoreType: 'P'
  },
  {
    id: 33,
    question: 'I keep my workspace organized.',
    dimension: 'JP',
    scoreType: 'J'
  },
  {
    id: 34,
    question: 'I feel restricted by too much structure.',
    dimension: 'JP',
    scoreType: 'P'
  },
  {
    id: 35,
    question: 'I finish projects before starting new ones.',
    dimension: 'JP',
    scoreType: 'J'
  },
  {
    id: 36,
    question: 'I often wait until the last moment to start a task.',
    dimension: 'JP',
    scoreType: 'P'
  },
  {
    id: 37,
    question: 'I like having a clear schedule for each day.',
    dimension: 'JP',
    scoreType: 'J'
  },
  {
    id: 38,
    question: 'I get inspired by sudden ideas and go with the flow.',
    dimension: 'JP',
    scoreType: 'P'
  },
  {
    id: 39,
    question: 'I feel anxious if plans change suddenly.',
    dimension: 'JP',
    scoreType: 'J'
  },
  {
    id: 40,
    question: 'I prefer to keep options open rather than decide early.',
    dimension: 'JP',
    scoreType: 'P'
  }
];

export type AnswerValue = 1 | 2 | 3 | 4 | 5; // 1=Strongly Disagree, 2=Disagree, 3=Neutral, 4=Agree, 5=Strongly Agree

export const calculatePersonalityType = (answers: AnswerValue[]): string => {
  const scores: Record<string, number> = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  answers.forEach((answer, index) => {
    const question = questions[index];
    const scoreType = question.scoreType;
    
    // Get the opposite type
    let oppositeType: string;
    if (scoreType === 'E') oppositeType = 'I';
    else if (scoreType === 'I') oppositeType = 'E';
    else if (scoreType === 'S') oppositeType = 'N';
    else if (scoreType === 'N') oppositeType = 'S';
    else if (scoreType === 'T') oppositeType = 'F';
    else if (scoreType === 'F') oppositeType = 'T';
    else if (scoreType === 'J') oppositeType = 'P';
    else oppositeType = 'J'; // P
    
    // Calculate score based on answer:
    // 5 (Strongly Agree) = +2 to scoreType
    // 4 (Agree) = +1 to scoreType
    // 3 (Neutral) = 0 to both
    // 2 (Disagree) = +1 to oppositeType
    // 1 (Strongly Disagree) = +2 to oppositeType
    
    if (answer === 5) {
      scores[scoreType] += 2;
    } else if (answer === 4) {
      scores[scoreType] += 1;
    } else if (answer === 2) {
      scores[oppositeType] += 1;
    } else if (answer === 1) {
      scores[oppositeType] += 2;
    }
    // answer === 3 (neutral) adds nothing
  });

  const type = 
    (scores.E > scores.I ? 'E' : scores.I > scores.E ? 'I' : 'E') +
    (scores.S > scores.N ? 'S' : scores.N > scores.S ? 'N' : 'S') +
    (scores.T > scores.F ? 'T' : scores.F > scores.T ? 'F' : 'T') +
    (scores.J > scores.P ? 'J' : scores.P > scores.J ? 'P' : 'J');

  return type;
};
