import { Button } from './ui/button';
import { Brain, Compass } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
  onExplore: () => void;
}

export function WelcomeScreen({ onStart, onExplore }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-full">
            <Brain className="w-20 h-20 text-white" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="text-white/80 text-sm tracking-widest mb-2">WELCOME TO</div>
          <h1 className="text-white text-6xl mb-4" style={{ letterSpacing: '0.05em' }}>
            PersonaView
          </h1>
          <p className="text-white/90 text-lg">
            Discover your personality type through a comprehensive assessment based on the Myers-Briggs Type Indicator.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={onStart}
            size="lg"
            className="w-full bg-white text-purple-600 hover:bg-white/90"
          >
            Take the Test
          </Button>
          
          <Button 
            onClick={onExplore}
            size="lg"
            variant="outline"
            className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
          >
            <Compass className="w-5 h-5 mr-2" />
            Explore All 16 Types
          </Button>
          
          <p className="text-white/70 text-sm">
            40 questions • Takes about 5 minutes
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 text-white/80 text-sm">
          <div>
            <div className="text-2xl mb-1">16</div>
            <div>Personality Types</div>
          </div>
          <div>
            <div className="text-2xl mb-1">40</div>
            <div>Questions</div>
          </div>
          <div>
            <div className="text-2xl mb-1">5</div>
            <div>Minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
