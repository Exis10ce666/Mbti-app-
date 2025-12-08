import { PersonalityType } from '../data/personalityTypes';
import { motion } from 'motion/react';
import { ArrowLeft, Lightbulb, TrendingUp, Users, BookOpen, Target, Sparkles } from 'lucide-react';

interface InsightsScreenProps {
  personalityType: PersonalityType;
  onBack: () => void;
}

export function InsightsScreen({ personalityType, onBack }: InsightsScreenProps) {
  const insights = [
    {
      icon: Lightbulb,
      title: 'Weekly Insight',
      content: `As an ${personalityType.name}, this week focus on balancing your natural strengths with areas for growth. Consider how your unique perspective can contribute to your current projects.`,
      date: 'This week'
    },
    {
      icon: TrendingUp,
      title: 'Growth Challenge',
      content: 'Step outside your comfort zone by engaging with one of your growth areas. Small steps lead to meaningful change.',
      date: '3 days ago'
    },
    {
      icon: Users,
      title: 'Relationship Tip',
      content: `${personalityType.name} types often excel in their relationships when they remember to balance their natural tendencies with active listening and empathy.`,
      date: '1 week ago'
    },
    {
      icon: BookOpen,
      title: 'Recommended Reading',
      content: 'Explore books and resources specifically curated for your personality type to deepen your self-understanding.',
      date: '2 weeks ago'
    },
    {
      icon: Target,
      title: 'Career Guidance',
      content: `Consider careers that align with your strengths: ${personalityType.strengths.slice(0, 2).join(', ')}. Your natural abilities shine in environments that value these qualities.`,
      date: '2 weeks ago'
    },
    {
      icon: Sparkles,
      title: 'Daily Affirmation',
      content: `You are ${personalityType.keyTraits[0].toLowerCase()}, ${personalityType.keyTraits[1].toLowerCase()}, and ${personalityType.keyTraits[2].toLowerCase()}. Embrace your unique gifts.`,
      date: 'Today'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
              style={{ backgroundColor: personalityType.colorPrimary }}
            >
              {personalityType.name}
            </div>
            <div>
              <h1 className="text-gray-900">Insights & Guidance</h1>
              <p className="text-gray-600">
                Personalized tips for {personalityType.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Insights Timeline */}
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${personalityType.colorSecondary}20` }}
                >
                  <insight.icon className="w-6 h-6" style={{ color: personalityType.colorSecondary }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-gray-900">{insight.title}</h3>
                    <span className="text-xs text-gray-500">{insight.date}</span>
                  </div>
                  <p className="text-gray-600">
                    {insight.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8"
          style={{ borderTop: `4px solid ${personalityType.colorPrimary}` }}
        >
          <h2 className="mb-6">Quick Tips for Thriving as an {personalityType.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Self-Care</div>
              <p className="text-gray-700">
                Remember to honor your natural energy patterns and recharge in ways that work best for your type.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Communication</div>
              <p className="text-gray-700">
                Be aware of how your communication style may differ from others and adapt when necessary.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Decision Making</div>
              <p className="text-gray-700">
                Trust your natural decision-making process while remaining open to other perspectives.
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Growth</div>
              <p className="text-gray-700">
                Challenge yourself to develop skills outside your natural comfort zone for balanced growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
