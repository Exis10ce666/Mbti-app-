import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Brain } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-full">
            <Brain className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        <div className="space-y-4">
          <div>
            <div className="text-white/60 text-xs tracking-widest mb-2">PERSONAVIEW</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-3xl"
            >
              Calculating Your Type...
            </motion.h2>
          </div>

          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>

          <p className="text-white/80">
            Analyzing your responses and determining your unique personality profile...
          </p>
        </div>
      </div>
    </div>
  );
}
