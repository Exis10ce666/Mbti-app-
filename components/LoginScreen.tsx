import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface LoginScreenProps {
  onLogin: (userData: { email: string; username: string }) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (isSignUp && !username) {
      setError('Please enter a username');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Store user data in localStorage (in a real app, this would be backend authentication)
    const userData = {
      email,
      username: username || email.split('@')[0],
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('personaview_user', JSON.stringify(userData));
    onLogin(userData);
  };

  const handleGuestLogin = () => {
    const guestData = {
      email: 'guest@personaview.app',
      username: 'Guest User',
    };
    localStorage.setItem('personaview_user', JSON.stringify(guestData));
    onLogin(guestData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo & Branding */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4"
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-full">
              <Brain className="w-16 h-16 text-white" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-white/80 text-sm tracking-widest mb-2">WELCOME TO</div>
            <h1 className="text-white text-5xl mb-2" style={{ letterSpacing: '0.05em' }}>
              PersonaView
            </h1>
            <p className="text-white/80">Discover your unique personality</p>
          </motion.div>
        </div>

        {/* Login/Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
        >
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 px-4 rounded-lg transition-all ${
                !isSignUp
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 px-4 rounded-lg transition-all ${
                isSignUp
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:bg-white/30 focus:border-white/50"
                  />
                </div>
              </motion.div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:bg-white/30 focus:border-white/50"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:bg-white/30 focus:border-white/50"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-sm"
              >
                {error}
              </motion.p>
            )}

            <Button
              type="submit"
              className="w-full bg-white text-purple-600 hover:bg-white/90 py-6"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/60">or</span>
              </div>
            </div>

            <button
              onClick={handleGuestLogin}
              className="w-full mt-4 py-3 px-4 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Continue as Guest
            </button>
          </div>

          <p className="text-white/60 text-xs text-center mt-6">
            Your data is stored locally on your device. We respect your privacy.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/60 text-sm text-center mt-6"
        >
          Discover insights about your personality through the MBTI framework
        </motion.p>
      </motion.div>
    </div>
  );
}
