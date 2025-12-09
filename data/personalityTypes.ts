// Import all personality type background images
import intjBg from 'figma:asset/c041d86d2de815c359bdc964ac6f54ff8f1bf707.png';
import intpBg from 'figma:asset/df407add538bf1e4d34d0a9ff5b160dc1ed8e193.png';
import entjBg from 'figma:asset/e4af19af7804cc84c55607131a4a12ef1449bacb.png';
import entpBg from 'figma:asset/4c14cb19bfa36459059f55a3d681ea21342ab9c8.png';
import infjBg from 'figma:asset/ed34828782ba61b31f0a4bfa4660c2cce4dfbdfd.png';
import infpBg from 'figma:asset/c2e52f95c7e89665b272259b28ec2ae547f9625a.png';
import enfjBg from 'figma:asset/35ea1aca25a675b788c051a35695dc203f48d1b6.png';
import enfpBg from 'figma:asset/60e12de106b964dc80d727b4e07c8e853a73e395.png';
import istjBg from 'figma:asset/259b1bcd357430f5d82890a42fdc76db1b75aada.png';
import estjBg from 'figma:asset/4da098bf47e8cde49a73cfc2c3758092910f28e8.png';
import isfjBg from 'figma:asset/93b783b3a3eed66364b7808b1cfd21cfb94ac7c3.png';
import esfjBg from 'figma:asset/f954fe718fbe690fe830ad02093ade799cbf2a15.png';
import isfpBg from 'figma:asset/05fc75dfac017fdc47a0bd99c23fc34cd44bf8ed.png';
import istpBg from 'figma:asset/5842bbb64d9067d158ff27e2f0772d7a8fabfeae.png';
import estpBg from 'figma:asset/27784ecc3c71d7cf3dd1b4166705ba8412e7c58f.png';
import esfpBg from 'figma:asset/85da62172d3dd68bd4781d9c5fc3ca5896065341.png';

// Import custom famous figure images
import isaacNewtonImg from 'figma:asset/13c2d65d43ad4820e737ab64d14eeaa567313fad.png';
import billGatesImg from 'figma:asset/3c5f7621b06a651844fced68a2d36e485dd904c6.png';

export interface PersonalityType {
  id: string;
  name: string;
  subtitle: string;
  colorPrimary: string;
  colorSecondary: string;
  colorAccent: string;
  keyTraits: string[];
  strengths: string[];
  growthAreas: string[];
  famousFigures: { name: string; title: string; image: string }[];
  atWork: string;
  inRelationships: string;
  underStress: string;
  backgroundPattern: string;
  characterImage: string;
}

export const personalityTypes: PersonalityType[] = [
  {
    id: 'INTP',
    name: 'INTP',
    subtitle: 'The Strategic Thinker',
    colorPrimary: '#2E3A93',
    colorSecondary: '#5C6BC0',
    colorAccent: '#FFC107',
    keyTraits: ['Analytical', 'Independent', 'Innovative'],
    strengths: ['Logical reasoning', 'Conceptual thinking', 'Open-minded', 'Problem-solving'],
    growthAreas: ['May overthink', 'Struggle with routine', 'Appear detached', 'Procrastination'],
    famousFigures: [
      { name: 'Albert Einstein', title: 'Scientist', image: 'https://images.unsplash.com/photo-1630635280270-00799dd04da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbGJlcnQlMjBFaW5zdGVpbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk0MjM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Isaac Newton', title: 'Physicist', image: isaacNewtonImg },
      { name: 'Bill Gates', title: 'Entrepreneur', image: billGatesImg }
    ],
    atWork: 'You\'re the idea-generator who thrives on complexity. You value autonomy and love solving abstract problems.',
    inRelationships: 'You\'re curious and seek deep conversation. You value mental connection above all else.',
    underStress: 'You may withdraw into thought, become excessively critical, or isolate yourself from others.',
    backgroundPattern: 'network',
    characterImage: intpBg
  },
  {
    id: 'INTJ',
    name: 'INTJ',
    subtitle: 'The Mastermind',
    colorPrimary: '#1A237E',
    colorSecondary: '#3F51B5',
    colorAccent: '#00BCD4',
    keyTraits: ['Strategic', 'Determined', 'Visionary'],
    strengths: ['Long-term planning', 'Independent thinking', 'Highly competent', 'Decisive'],
    growthAreas: ['May seem arrogant', 'Overly critical', 'Dismiss emotions', 'Impatient'],
    famousFigures: [
      { name: 'Elon Musk', title: 'Entrepreneur', image: 'https://images.unsplash.com/photo-1652017667261-9d8be8f53978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFbG9uJTIwTXVzayUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Friedrich Nietzsche', title: 'Philosopher', image: 'https://images.unsplash.com/photo-1741805190358-aff8c1c1d72a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGcmllZHJpY2glMjBOaWV0enNjaGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Michelle Obama', title: 'Former First Lady', image: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNoZWxsZSUyME9iYW1hJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the strategic visionary who sees the big picture. You implement systems and drive innovation.',
    inRelationships: 'You\'re loyal and committed. You prefer meaningful connections over small talk.',
    underStress: 'You may become controlling, withdraw emotionally, or be overly critical of others.',
    backgroundPattern: 'geometric',
    characterImage: intjBg
  },
  {
    id: 'ENTJ',
    name: 'ENTJ',
    subtitle: 'The Commander',
    colorPrimary: '#B71C1C',
    colorSecondary: '#E53935',
    colorAccent: '#FFD700',
    keyTraits: ['Bold', 'Strategic', 'Efficient'],
    strengths: ['Natural leadership', 'Confident', 'Strategic thinking', 'Decisive action'],
    growthAreas: ['Can be domineering', 'Impatient', 'Insensitive', 'Stubborn'],
    famousFigures: [
      { name: 'Steve Jobs', title: 'Entrepreneur', image: 'https://images.unsplash.com/photo-1635447948316-756be6ecc7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdGV2ZSUyMEpvYnMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Margaret Thatcher', title: 'Prime Minister', image: 'https://images.unsplash.com/photo-1734092916521-053b3ffc706b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXJnYXJldCUyMFRoYXRjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Napoleon Bonaparte', title: 'Military Leader', image: 'https://images.unsplash.com/photo-1761334859603-65988f93db38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXBvbGVvbiUyMEJvbmFwYXJ0ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re a natural leader who loves challenges. You organize people and resources to achieve ambitious goals.',
    inRelationships: 'You\'re protective and devoted. You value honesty and direct communication.',
    underStress: 'You may become aggressive, overly controlling, or dismissive of others\' feelings.',
    backgroundPattern: 'arrows',
    characterImage: entjBg
  },
  {
    id: 'ENTP',
    name: 'ENTP',
    subtitle: 'The Debater',
    colorPrimary: '#E65100',
    colorSecondary: '#FF6F00',
    colorAccent: '#FFC107',
    keyTraits: ['Inventive', 'Curious', 'Adaptable'],
    strengths: ['Quick thinking', 'Charismatic', 'Innovative ideas', 'Excellent debater'],
    growthAreas: ['May argue unnecessarily', 'Lack follow-through', 'Insensitive', 'Scattered focus'],
    famousFigures: [
      { name: 'Mark Twain', title: 'Writer', image: 'https://images.unsplash.com/photo-1748200100142-e8d4f689acd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXJrJTIwVHdhaW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Thomas Edison', title: 'Inventor', image: 'https://images.unsplash.com/photo-1751576027223-5880cadd5145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaG9tYXMlMjBFZGlzb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Leonardo da Vinci', title: 'Polymath', image: 'https://images.unsplash.com/photo-1651085410802-df2e614603c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZW9uYXJkbyUyMGRhJTIwVmluY2klMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the innovative problem-solver who challenges the status quo. You excel at brainstorming and strategy.',
    inRelationships: 'You\'re playful and intellectually stimulating. You enjoy witty banter and mental sparring.',
    underStress: 'You may become argumentative, scattered, or engage in risky behavior.',
    backgroundPattern: 'sparks',
    characterImage: entpBg
  },
  {
    id: 'INFJ',
    name: 'INFJ',
    subtitle: 'The Advocate',
    colorPrimary: '#4A148C',
    colorSecondary: '#7B1FA2',
    colorAccent: '#81C784',
    keyTraits: ['Insightful', 'Idealistic', 'Compassionate'],
    strengths: ['Deep empathy', 'Visionary thinking', 'Creative', 'Principled'],
    growthAreas: ['Overly sensitive', 'Perfectionist', 'Difficult to know', 'Burn out easily'],
    famousFigures: [
      { name: 'Martin Luther King Jr.', title: 'Civil Rights Leader', image: 'https://images.unsplash.com/photo-1597702383730-b93abf770373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXJ0aW4lMjBMdXRoZXIlMjBLaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Nelson Mandela', title: 'President', image: 'https://images.unsplash.com/photo-1585758932243-e79d46905bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZWxzb24lMjBNYW5kZWxhJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Carl Jung', title: 'Psychologist', image: 'https://images.unsplash.com/photo-1689258077068-75eb291e503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJsJTIwSnVuZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the visionary with a cause. You work best when your work aligns with your values and helps others.',
    inRelationships: 'You\'re deeply caring and seek authentic connection. You\'re an excellent listener and supporter.',
    underStress: 'You may become withdrawn, overly critical of yourself, or experience emotional exhaustion.',
    backgroundPattern: 'waves',
    characterImage: infjBg
  },
  {
    id: 'INFP',
    name: 'INFP',
    subtitle: 'The Mediator',
    colorPrimary: '#00695C',
    colorSecondary: '#26A69A',
    colorAccent: '#FFB74D',
    keyTraits: ['Creative', 'Empathetic', 'Idealistic'],
    strengths: ['Strong values', 'Creative expression', 'Open-minded', 'Passionate'],
    growthAreas: ['Overly idealistic', 'Self-critical', 'Difficulty with criticism', 'Impractical'],
    famousFigures: [
      { name: 'William Shakespeare', title: 'Playwright', image: 'https://images.unsplash.com/photo-1632686427434-740e5948f9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXaWxsaWFtJTIwU2hha2VzcGVhcmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'J.R.R. Tolkien', title: 'Author', image: 'https://images.unsplash.com/photo-1613575363165-5a67fadc017c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb2xraWVuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Vincent van Gogh', title: 'Artist', image: 'https://images.unsplash.com/photo-1682944610753-7b0fd6127ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaW5jZW50JTIwdmFuJTIwR29naCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the creative idealist who seeks meaningful work. You excel when you can express your values and creativity.',
    inRelationships: 'You\'re devoted and romantic. You seek deep, authentic connections and emotional intimacy.',
    underStress: 'You may become overly emotional, withdrawn, or lose sight of reality.',
    backgroundPattern: 'clouds',
    characterImage: infpBg
  },
  {
    id: 'ENFJ',
    name: 'ENFJ',
    subtitle: 'The Protagonist',
    colorPrimary: '#1B5E20',
    colorSecondary: '#43A047',
    colorAccent: '#FFD54F',
    keyTraits: ['Charismatic', 'Inspiring', 'Altruistic'],
    strengths: ['Natural motivator', 'Excellent communicator', 'Empathetic', 'Organized'],
    growthAreas: ['Overly idealistic', 'Too selfless', 'Overly sensitive', 'Struggle with conflict'],
    famousFigures: [
      { name: 'Oprah Winfrey', title: 'Media Mogul', image: 'https://images.unsplash.com/photo-1737599819881-df2553a821ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPcHJhaCUyMFdpbmZyZXklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Barack Obama', title: 'President', image: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXJhY2slMjBPYmFtYSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Maya Angelou', title: 'Poet', image: 'https://images.unsplash.com/photo-1751612428202-5fe081d764ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXlhJTIwQW5nZWxvdSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the inspirational leader who brings out the best in others. You excel at building teams and creating harmony.',
    inRelationships: 'You\'re warm and encouraging. You\'re attentive to others\' needs and create deep connections.',
    underStress: 'You may become overly people-pleasing, manipulative, or suffer from emotional burnout.',
    backgroundPattern: 'radial',
    characterImage: enfjBg
  },
  {
    id: 'ENFP',
    name: 'ENFP',
    subtitle: 'The Campaigner',
    colorPrimary: '#F57C00',
    colorSecondary: '#FB8C00',
    colorAccent: '#81C784',
    keyTraits: ['Enthusiastic', 'Creative', 'Spontaneous'],
    strengths: ['Excellent communicator', 'Energetic', 'Creative thinking', 'Empathetic'],
    growthAreas: ['Easily distracted', 'Overly emotional', 'Difficulty with routine', 'People-pleasing'],
    famousFigures: [
      { name: 'Robin Williams', title: 'Actor', image: 'https://images.unsplash.com/photo-1731343887062-6c99daf5287e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb2JpbiUyMFdpbGxpYW1zJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Walt Disney', title: 'Entrepreneur', image: 'https://images.unsplash.com/photo-1686397140014-b17e44174f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYWx0JTIwRGlzbmV5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Ellen DeGeneres', title: 'Comedian', image: 'https://images.unsplash.com/photo-1654031424664-e0e6174fbd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFbGxlbiUyMERlR2VuZXJlcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the energetic innovator who brings creativity and passion. You excel in collaborative, dynamic environments.',
    inRelationships: 'You\'re warm, enthusiastic, and deeply caring. You bring fun and spontaneity to relationships.',
    underStress: 'You may become scattered, overly emotional, or seek constant validation.',
    backgroundPattern: 'confetti',
    characterImage: enfpBg
  },
  {
    id: 'ISTJ',
    name: 'ISTJ',
    subtitle: 'The Logistician',
    colorPrimary: '#37474F',
    colorSecondary: '#546E7A',
    colorAccent: '#4FC3F7',
    keyTraits: ['Reliable', 'Practical', 'Methodical'],
    strengths: ['Strong sense of duty', 'Detail-oriented', 'Honest', 'Organized'],
    growthAreas: ['Inflexible', 'Insensitive', 'Resistant to change', 'Judgmental'],
    famousFigures: [
      { name: 'George Washington', title: 'President', image: 'https://images.unsplash.com/photo-1736366282668-5015f8419400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZW9yZ2UlMjBXYXNoaW5ndG9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Warren Buffett', title: 'Investor', image: 'https://images.unsplash.com/photo-1618622127587-3261f2b2f553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYXJyZW4lMjBCdWZmZXR0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Angela Merkel', title: 'Chancellor', image: 'https://images.unsplash.com/photo-1725561167571-b3ac3c727e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmdlbGElMjBNZXJrZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the reliable backbone who ensures things get done right. You excel at creating and maintaining systems.',
    inRelationships: 'You\'re loyal and dependable. You show love through practical actions and consistency.',
    underStress: 'You may become rigid, overly critical, or withdraw into routines.',
    backgroundPattern: 'grid',
    characterImage: istjBg
  },
  {
    id: 'ISFJ',
    name: 'ISFJ',
    subtitle: 'The Defender',
    colorPrimary: '#4E342E',
    colorSecondary: '#6D4C41',
    colorAccent: '#FFB74D',
    keyTraits: ['Caring', 'Loyal', 'Practical'],
    strengths: ['Supportive', 'Reliable', 'Patient', 'Detail-oriented'],
    growthAreas: ['Overly humble', 'Reluctant to change', 'Take things personally', 'Overwork themselves'],
    famousFigures: [
      { name: 'Mother Teresa', title: 'Humanitarian', image: 'https://images.unsplash.com/photo-1752317591547-745de02a572e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3RoZXIlMjBUZXJlc2ElMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Queen Elizabeth II', title: 'Monarch', image: 'https://images.unsplash.com/photo-1596473784891-6ddfeaeedd5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxRdWVlbiUyMEVsaXphYmV0aCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Rosa Parks', title: 'Activist', image: 'https://images.unsplash.com/photo-1613602166248-273d12dc7468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb3NhJTIwUGFya3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the dedicated supporter who ensures everyone is taken care of. You excel in service-oriented roles.',
    inRelationships: 'You\'re nurturing and devoted. You show love through thoughtful actions and care.',
    underStress: 'You may become overwhelmed, resentful, or overly self-sacrificing.',
    backgroundPattern: 'hearts',
    characterImage: isfjBg
  },
  {
    id: 'ESTJ',
    name: 'ESTJ',
    subtitle: 'The Executive',
    colorPrimary: '#1565C0',
    colorSecondary: '#1976D2',
    colorAccent: '#FFC107',
    keyTraits: ['Organized', 'Direct', 'Traditional'],
    strengths: ['Strong leadership', 'Efficient', 'Honest', 'Dedicated'],
    growthAreas: ['Inflexible', 'Judgmental', 'Difficulty with emotions', 'Bossy'],
    famousFigures: [
      { name: 'Henry Ford', title: 'Industrialist', image: 'https://images.unsplash.com/photo-1731343887062-6c99daf5287e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIZW5yeSUyMEZvcmQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Judge Judy', title: 'TV Judge', image: 'https://images.unsplash.com/photo-1608396365879-423c3ed62ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKdWRnZSUyMEp1ZHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Lyndon B. Johnson', title: 'President', image: 'https://images.unsplash.com/photo-1585066039575-3f1582c42703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMeW5kb24lMjBKb2huc29uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the efficient organizer who gets things done. You excel at managing people and creating structure.',
    inRelationships: 'You\'re straightforward and committed. You value tradition and show love through providing.',
    underStress: 'You may become controlling, rigid, or dismissive of others\' emotions.',
    characterImage: estjBg,
    backgroundPattern: 'columns'
  },
  {
    id: 'ESFJ',
    name: 'ESFJ',
    subtitle: 'The Consul',
    colorPrimary: '#C2185B',
    colorSecondary: '#E91E63',
    colorAccent: '#FFD54F',
    keyTraits: ['Caring', 'Social', 'Organized'],
    strengths: ['Strong interpersonal skills', 'Practical', 'Loyal', 'Conscientious'],
    growthAreas: ['Worry about social status', 'Inflexible', 'Reluctant to innovate', 'Needy'],
    famousFigures: [
      { name: 'Taylor Swift', title: 'Singer', image: 'https://images.unsplash.com/photo-1747598588323-32a7ee557762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYXlsb3IlMjBTd2lmdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Jennifer Garner', title: 'Actress', image: 'https://images.unsplash.com/photo-1731343887062-6c99daf5287e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKZW5uaWZlciUyMEdhcm5lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Danny Glover', title: 'Actor', image: 'https://images.unsplash.com/photo-1545370192-c7c68d09f668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYW5ueSUyMEdsb3ZlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the team builder who creates harmony. You excel at coordinating people and maintaining morale.',
    inRelationships: 'You\'re warm and attentive. You create a welcoming environment and remember important details.',
    underStress: 'You may become overly concerned with others\' opinions or neglect your own needs.',
    backgroundPattern: 'circles',
    characterImage: esfjBg
  },
  {
    id: 'ISTP',
    name: 'ISTP',
    subtitle: 'The Virtuoso',
    colorPrimary: '#424242',
    colorSecondary: '#616161',
    colorAccent: '#FF6F00',
    keyTraits: ['Practical', 'Resourceful', 'Adventurous'],
    strengths: ['Hands-on problem-solving', 'Calm under pressure', 'Flexible', 'Analytical'],
    growthAreas: ['Private and reserved', 'Insensitive', 'Risk-prone', 'Stubborn'],
    famousFigures: [
      { name: 'Clint Eastwood', title: 'Actor/Director', image: 'https://images.unsplash.com/photo-1731343887062-6c99daf5287e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDbGludCUyMEVhc3R3b29kJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Amelia Earhart', title: 'Aviator', image: 'https://images.unsplash.com/photo-1694158748338-7e69c53450bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWVsaWElMjBFYXJoYXJ0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Bruce Lee', title: 'Martial Artist', image: 'https://images.unsplash.com/photo-1587300051119-1b01ae873b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcnVjZSUyMExlZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the hands-on problem-solver who stays calm in crisis. You excel at troubleshooting and practical solutions.',
    inRelationships: 'You\'re loyal and easygoing. You show love through actions and shared experiences.',
    underStress: 'You may become reckless, withdrawn, or engage in risky behavior.',
    backgroundPattern: 'tools',
    characterImage: istpBg
  },
  {
    id: 'ISFP',
    name: 'ISFP',
    subtitle: 'The Adventurer',
    colorPrimary: '#6A1B9A',
    colorSecondary: '#8E24AA',
    colorAccent: '#FFB74D',
    keyTraits: ['Artistic', 'Flexible', 'Charming'],
    strengths: ['Creative', 'Passionate', 'Curious', 'Open-minded'],
    growthAreas: ['Overly competitive', 'Unpredictable', 'Easily stressed', 'Private'],
    famousFigures: [
      { name: 'Michael Jackson', title: 'Musician', image: 'https://images.unsplash.com/photo-1751576027223-5880cadd5145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNoYWVsJTIwSmFja3NvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Frida Kahlo', title: 'Artist', image: 'https://images.unsplash.com/photo-1623955231868-9ba1a52d3ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGcmlkYSUyMEthaGxvJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Lana Del Rey', title: 'Singer', image: 'https://images.unsplash.com/photo-1694725411264-57731690bf1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW5hJTIwRGVsJTIwUmV5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the creative spirit who brings beauty and harmony. You excel in artistic and hands-on work.',
    characterImage: isfpBg,
    inRelationships: 'You\'re warm and spontaneous. You express love through creative gestures and quality time.',
    underStress: 'You may become withdrawn, overly critical of yourself, or lose your sense of direction.',
    backgroundPattern: 'paint'
  },
  {
    id: 'ESTP',
    name: 'ESTP',
    subtitle: 'The Entrepreneur',
    colorPrimary: '#D32F2F',
    colorSecondary: '#E53935',
    colorAccent: '#29B6F6',
    keyTraits: ['Energetic', 'Bold', 'Perceptive'],
    strengths: ['Action-oriented', 'Sociable', 'Practical', 'Direct'],
    growthAreas: ['Impatient', 'Risk-prone', 'Unstructured', 'Insensitive'],
    famousFigures: [
      { name: 'Ernest Hemingway', title: 'Author', image: 'https://images.unsplash.com/photo-1645226027644-ca4db2db060a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFcm5lc3QlMjBIZW1pbmd3YXklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5NjExMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Madonna', title: 'Singer', image: 'https://images.unsplash.com/photo-1736183986550-90262a6eeb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRvbm5hJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Donald Trump', title: 'Businessman', image: 'https://images.unsplash.com/photo-1580128660010-fd027e1e587a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEb25hbGQlMjBUcnVtcCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the action-taker who thrives in fast-paced environments. You excel at negotiation and quick decisions.',
    inRelationships: 'You\'re fun-loving and straightforward. You bring excitement and live in the moment.',
    underStress: 'You may become reckless, confrontational, or overly focused on immediate gratification.',
    backgroundPattern: 'lightning',
    characterImage: estpBg
  },
  {
    id: 'ESFP',
    name: 'ESFP',
    subtitle: 'The Entertainer',
    colorPrimary: '#C2185B',
    colorSecondary: '#EC407A',
    colorAccent: '#FFD700',
    keyTraits: ['Spontaneous', 'Enthusiastic', 'Playful'],
    strengths: ['People skills', 'Optimistic', 'Practical', 'Observant'],
    growthAreas: ['Easily bored', 'Sensitive to criticism', 'Conflict-averse', 'Unfocused'],
    famousFigures: [
      { name: 'Marilyn Monroe', title: 'Actress', image: 'https://images.unsplash.com/photo-1630817113215-b4d8af82032b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXJpbHluJTIwTW9ucm9lJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTYxMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Dolly Parton', title: 'Singer', image: 'https://images.unsplash.com/photo-1744570454075-4bc5be003b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEb2xseSUyMFBhcnRvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
      { name: 'Jamie Oliver', title: 'Chef', image: 'https://images.unsplash.com/photo-1618622127587-3261f2b2f553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYW1pZSUyME9saXZlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MTEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
    ],
    atWork: 'You\'re the energizer who lifts team spirits. You excel in people-focused, dynamic roles.',
    inRelationships: 'You\'re warm and generous. You create joy and memorable experiences for loved ones.',
    underStress: 'You may become overly sensitive, scattered, or seek constant external validation.',
    backgroundPattern: 'stars',
    characterImage: esfpBg
  }
];

export const getPersonalityType = (id: string): PersonalityType | undefined => {
  return personalityTypes.find(type => type.id === id);
};
