import { PersonalityType } from '../data/personalityTypes';
import { Button } from './ui/button';
import { ArrowLeft, Download, Share2, RotateCcw, User, Settings, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfileScreenProps {
  personalityType: PersonalityType;
  onBack: () => void;
  onRetakeTest: () => void;
  onShare: () => void;
  onLogout?: () => void;
  username?: string;
}

export function ProfileScreen({ personalityType, onBack, onRetakeTest, onShare, onLogout, username }: ProfileScreenProps) {
  const handleExportPDF = () => {
    // In a real app, this would generate a PDF
    alert('PDF export feature would be implemented here. This would create a beautiful PDF summary of your personality profile.');
  };

  const handleLogout = () => {
    if (onLogout) {
      const confirmed = window.confirm('Are you sure you want to log out? Your test results will be saved locally.');
      if (confirmed) {
        onLogout();
      }
    }
  };

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
          <h1 className="text-gray-900 mb-2">{username ? `${username}'s Profile` : 'Your Profile'}</h1>
          <p className="text-gray-600 text-lg">
            Manage your personality test results and preferences
          </p>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl shrink-0"
              style={{ backgroundColor: personalityType.colorPrimary }}
            >
              {personalityType.name}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-gray-900 mb-2">{personalityType.name}</h2>
              <p className="text-gray-600 mb-4">{personalityType.subtitle}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {personalityType.keyTraits.map((trait, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm text-white"
                    style={{ backgroundColor: personalityType.colorSecondary }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <h3 className="text-gray-900 mb-4">Actions</h3>
          <div className="space-y-3">
            <Button
              onClick={onShare}
              className="w-full justify-start"
              variant="outline"
            >
              <Share2 className="mr-3 w-5 h-5" />
              Share Your Result
            </Button>
            <Button
              onClick={handleExportPDF}
              className="w-full justify-start"
              variant="outline"
            >
              <Download className="mr-3 w-5 h-5" />
              Export as PDF
            </Button>
            <Button
              onClick={onRetakeTest}
              className="w-full justify-start"
              variant="outline"
            >
              <RotateCcw className="mr-3 w-5 h-5" />
              Retake Test
            </Button>
            {onLogout && (
              <Button
                onClick={handleLogout}
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                variant="outline"
              >
                <LogOut className="mr-3 w-5 h-5" />
                Log Out
              </Button>
            )}
          </div>
        </motion.div>

        {/* Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-gray-600" />
            <h3 className="text-gray-900">Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Notifications</div>
                <div className="text-sm text-gray-600">Receive weekly insights and tips</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Dark Mode</div>
                <div className="text-sm text-gray-600">Switch to dark theme</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Language</div>
                <div className="text-sm text-gray-600">Choose your preferred language</div>
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded-lg bg-white">
                <option>English</option>
                <option>Монгол</option>
                <option>中文</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-50 border border-blue-200 rounded-2xl p-6"
        >
          <h4 className="text-gray-900 mb-2">Privacy & Data</h4>
          <p className="text-sm text-gray-600">
            Your personality test results are stored locally on your device. We don't collect or share any personal information. 
            You can delete your data at any time by clearing your browser data.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
