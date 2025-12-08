import { personalityTypes, PersonalityType } from '../data/personalityTypes';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface ExploreScreenProps {
  onSelectType: (type: PersonalityType) => void;
  onBack: () => void;
  currentType?: string;
}

export function ExploreScreen({ onSelectType, onBack, currentType }: ExploreScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-gray-900 mb-2">Explore All Personality Types</h1>
          <p className="text-gray-600 text-lg">
            Discover the unique characteristics of all 16 personality types
          </p>
        </div>

        {/* Grid of Types */}
        <div className="grid grid-cols-2 gap-4">
          {personalityTypes.map((type, index) => (
            <motion.button
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSelectType(type)}
              className="relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-left overflow-hidden group"
              style={{ backgroundColor: type.colorPrimary }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute inset-0" style={{ 
                  background: `linear-gradient(135deg, ${type.colorSecondary} 0%, transparent 100%)` 
                }} />
              </div>

              {/* Current Type Badge */}
              {currentType === type.id && (
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
                  Your Type
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="text-white text-4xl mb-2" style={{ letterSpacing: '0.1em' }}>
                  {type.name}
                </div>
                <div className="text-white/90 text-sm mb-3">
                  {type.subtitle}
                </div>
                <div className="flex flex-wrap gap-1">
                  {type.keyTraits.slice(0, 2).map((trait, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="mb-4">Understanding the 16 Types</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The 16 personality types are based on four key dimensions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center">E</span>
                  <span className="text-gray-400">/</span>
                  <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">I</span>
                </div>
                <p className="text-sm"><strong>Extraversion vs Introversion:</strong> Where you focus your energy</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">S</span>
                  <span className="text-gray-400">/</span>
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center">N</span>
                </div>
                <p className="text-sm"><strong>Sensing vs Intuition:</strong> How you take in information</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">T</span>
                  <span className="text-gray-400">/</span>
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center">F</span>
                </div>
                <p className="text-sm"><strong>Thinking vs Feeling:</strong> How you make decisions</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">J</span>
                  <span className="text-gray-400">/</span>
                  <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center">P</span>
                </div>
                <p className="text-sm"><strong>Judging vs Perceiving:</strong> How you approach the outside world</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
