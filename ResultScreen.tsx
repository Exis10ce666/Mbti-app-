import { useState, useEffect } from 'react';
import { PersonalityType } from '../data/personalityTypes';
import { BackgroundPattern } from './BackgroundPattern';
import { Button } from './ui/button';
import { Share2, Sparkles, Users, Briefcase, Heart, AlertCircle, ArrowRight, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface ResultScreenProps {
  personalityType: PersonalityType;
  onExplore: () => void;
  onShare: () => void;
  onHome: () => void;
}

export function ResultScreen({ personalityType, onExplore, onShare, onHome }: ResultScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay content reveal for animation
    const timer = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
          {/* Full Custom Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={personalityType.characterImage}
              alt={personalityType.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="text-center space-y-6 max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-4">
                <span className="text-white/90">Your Personality Type</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-white text-8xl mb-4" style={{ letterSpacing: '0.1em' }}>
                {personalityType.name.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.h2 
              className="text-white text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {personalityType.subtitle}
            </motion.h2>

            {showContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  onClick={() => {
                    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="lg"
                  className="bg-white hover:bg-white/90 mt-8"
                  style={{ color: personalityType.colorPrimary }}
                >
                  Explore Your Type
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Detailed Content */}
        {showContent && (
          <div id="details" className="bg-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Key Traits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6" style={{ color: personalityType.colorAccent }} />
                  <h3>Key Traits</h3>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {personalityType.keyTraits.map((trait, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-6 py-3 rounded-full text-white font-medium text-lg shadow-md hover:shadow-lg transition-shadow"
                      style={{ backgroundColor: personalityType.colorSecondary }}
                    >
                      {trait}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Strengths & Growth */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="mb-4" style={{ color: personalityType.colorPrimary }}>
                    Strengths
                  </h3>
                  <ul className="space-y-3">
                    {personalityType.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span 
                          className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: personalityType.colorAccent }}
                        />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="mb-4" style={{ color: personalityType.colorPrimary }}>
                    Growth Areas
                  </h3>
                  <ul className="space-y-3">
                    {personalityType.growthAreas.map((area, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span 
                          className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: personalityType.colorSecondary }}
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Famous Figures */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6" style={{ color: personalityType.colorAccent }} />
                  <h3>Famous People Who Share Your Type</h3>
                </div>
                <div className="space-y-4">
                  {personalityType.famousFigures.map((figure, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-4 rounded-xl transition-transform hover:scale-[1.02]"
                      style={{ backgroundColor: `${personalityType.colorPrimary}10` }}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
                        <img 
                          src={figure.image} 
                          alt={figure.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-medium mb-1">{figure.name}</p>
                        <p className="text-sm text-gray-600">{figure.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* How You Show Up */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="mb-6" style={{ color: personalityType.colorPrimary }}>
                  How You Show Up
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${personalityType.colorSecondary}20` }}
                    >
                      <Briefcase className="w-6 h-6" style={{ color: personalityType.colorSecondary }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2">At Work</h4>
                      <p className="text-gray-600">{personalityType.atWork}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${personalityType.colorAccent}20` }}
                    >
                      <Heart className="w-6 h-6" style={{ color: personalityType.colorAccent }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2">In Relationships</h4>
                      <p className="text-gray-600">{personalityType.inRelationships}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${personalityType.colorPrimary}20` }}
                    >
                      <AlertCircle className="w-6 h-6" style={{ color: personalityType.colorPrimary }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2">Under Stress</h4>
                      <p className="text-gray-600">{personalityType.underStress}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={onExplore}
                  size="lg"
                  className="flex-1"
                  style={{ backgroundColor: personalityType.colorPrimary }}
                >
                  Explore Other Types
                </Button>
                <Button
                  onClick={onShare}
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  style={{ borderColor: personalityType.colorPrimary, color: personalityType.colorPrimary }}
                >
                  <Share2 className="mr-2 w-5 h-5" />
                  Share Your Result
                </Button>
                <Button
                  onClick={onHome}
                  size="lg"
                  variant="outline"
                  className="flex-1"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Home
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
