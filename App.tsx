import { useState, useEffect } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { TestScreen } from './components/TestScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultScreen } from './components/ResultScreen';
import { ExploreScreen } from './components/ExploreScreen';
import { InsightsScreen } from './components/InsightsScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { calculatePersonalityType } from './data/questions';
import { getPersonalityType, PersonalityType } from './data/personalityTypes';
import { Home, Compass, Lightbulb, User } from 'lucide-react';
import { toast, Toaster } from 'sonner@2.0.3';

type Screen = 'login' | 'welcome' | 'test' | 'loading' | 'result' | 'explore' | 'insights' | 'profile';

interface UserData {
  email: string;
  username: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [userType, setUserType] = useState<PersonalityType | null>(null);
  const [viewingType, setViewingType] = useState<PersonalityType | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('personaview_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserData(user);
      setCurrentScreen('welcome');
    }
  }, []);

  // Load saved result from localStorage
  useEffect(() => {
    const savedType = localStorage.getItem('personalityType');
    if (savedType) {
      const type = getPersonalityType(savedType);
      if (type) {
        setUserType(type);
        setViewingType(type);
      }
    }
  }, []);

  const handleLogin = (user: UserData) => {
    setUserData(user);
    setCurrentScreen('welcome');
    toast.success(`Welcome, ${user.username}!`);
  };

  const handleStartTest = () => {
    setCurrentScreen('test');
  };

  const handleCompleteTest = (answers: string[]) => {
    setUserAnswers(answers);
    setCurrentScreen('loading');
  };

  const handleLoadingComplete = () => {
    const typeId = calculatePersonalityType(userAnswers);
    const type = getPersonalityType(typeId);
    if (type) {
      setUserType(type);
      setViewingType(type);
      // Save to localStorage
      localStorage.setItem('personalityType', typeId);
      setCurrentScreen('result');
    }
  };

  const handleExplore = () => {
    setCurrentScreen('explore');
  };

  const handleSelectType = (type: PersonalityType) => {
    setViewingType(type);
    setCurrentScreen('result');
  };

  const handleShare = () => {
    const type = viewingType || userType;
    if (type) {
      const shareText = `I just discovered I'm an ${type.name} - ${type.subtitle} on PersonaView! Discover your personality type too.`;
      
      if (navigator.share) {
        navigator.share({
          title: 'My PersonaView Result',
          text: shareText,
        }).catch(() => {
          // Fallback if share fails
          navigator.clipboard.writeText(shareText);
          toast.success('Copied to clipboard!');
        });
      } else {
        navigator.clipboard.writeText(shareText);
        toast.success('Copied to clipboard!');
      }
    }
  };

  const handleRetakeTest = () => {
    setUserAnswers([]);
    setCurrentScreen('welcome');
  };

  const handleNavigateHome = () => {
    if (userType) {
      setViewingType(userType);
      setCurrentScreen('result');
    } else {
      setCurrentScreen('welcome');
    }
  };

  const handleNavigateInsights = () => {
    if (userType) {
      setCurrentScreen('insights');
    } else {
      toast.error('Please complete the test first to view insights');
    }
  };

  const handleNavigateProfile = () => {
    if (userType) {
      setCurrentScreen('profile');
    } else {
      toast.error('Please complete the test first to view your profile');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('personaview_user');
    setUserData(null);
    setCurrentScreen('login');
    toast.success('Logged out successfully');
  };

  // Show navigation only on certain screens
  const showNavigation = ['result', 'explore', 'insights', 'profile'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="relative w-full max-w-[430px] h-[932px] bg-black rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-50"></div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-white overflow-y-auto overflow-x-hidden rounded-[46px]">
          <Toaster position="top-center" />
      
      {/* Main Content */}
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}

      {currentScreen === 'welcome' && (
        <WelcomeScreen 
          onStart={handleStartTest}
          onExplore={handleExplore}
        />
      )}

      {currentScreen === 'test' && (
        <TestScreen 
          onComplete={handleCompleteTest}
          onBack={() => setCurrentScreen('welcome')}
        />
      )}

      {currentScreen === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {currentScreen === 'result' && viewingType && (
        <ResultScreen
          personalityType={viewingType}
          onExplore={handleExplore}
          onShare={handleShare}
          onHome={handleNavigateHome}
        />
      )}

      {currentScreen === 'explore' && (
        <ExploreScreen
          onSelectType={handleSelectType}
          onBack={() => setCurrentScreen(userType ? 'result' : 'welcome')}
          currentType={userType?.id}
        />
      )}

      {currentScreen === 'insights' && userType && (
        <InsightsScreen
          personalityType={userType}
          onBack={() => setCurrentScreen('result')}
        />
      )}

      {currentScreen === 'profile' && userType && (
        <ProfileScreen
          personalityType={userType}
          onBack={() => setCurrentScreen('result')}
          onRetakeTest={handleRetakeTest}
          onShare={handleShare}
          onLogout={handleLogout}
          username={userData?.username}
        />
      )}

      {/* Bottom Navigation */}
      {showNavigation && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="max-w-lg mx-auto px-4">
            <div className="flex items-center justify-around py-3">
              <button
                onClick={handleNavigateHome}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  currentScreen === 'result'
                    ? 'text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </button>

              <button
                onClick={handleExplore}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  currentScreen === 'explore'
                    ? 'text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Compass className="w-6 h-6" />
                <span className="text-xs">Explore</span>
              </button>

              <button
                onClick={handleNavigateInsights}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  currentScreen === 'insights'
                    ? 'text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Lightbulb className="w-6 h-6" />
                <span className="text-xs">Insights</span>
              </button>

              <button
                onClick={handleNavigateProfile}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  currentScreen === 'profile'
                    ? 'text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <User className="w-6 h-6" />
                <span className="text-xs">Profile</span>
              </button>
            </div>
          </div>
        </nav>
      )}

          {/* Bottom padding when navigation is visible */}
          {showNavigation && <div className="h-20" />}
        </div>
      </div>
    </div>
  );
}
