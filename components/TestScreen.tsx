import { useState } from "react";
import { Progress } from "./ui/progress";
import { questions, AnswerValue } from "../data/questions";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TestScreenProps {
  onComplete: (answers: AnswerValue[]) => void;
  onBack: () => void;
}

const answerOptions: {
  value: AnswerValue;
  label: string;
  color: string;
  hoverColor: string;
  size: string;
}[] = [
  {
    value: 1,
    label: "Strongly Disagree",
    color: "bg-red-500",
    hoverColor: "hover:bg-red-600",
    size: "w-14 h-14",
  },
  {
    value: 2,
    label: "Disagree",
    color: "bg-red-300",
    hoverColor: "hover:bg-red-400",
    size: "w-12 h-12",
  },
  {
    value: 3,
    label: "Neutral",
    color: "bg-gray-300",
    hoverColor: "hover:bg-gray-400",
    size: "w-10 h-10",
  },
  {
    value: 4,
    label: "Agree",
    color: "bg-green-300",
    hoverColor: "hover:bg-green-400",
    size: "w-12 h-12",
  },
  {
    value: 5,
    label: "Strongly Agree",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    size: "w-14 h-14",
  },
];

export function TestScreen({
  onComplete,
  onBack,
}: TestScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AnswerValue[]>([]);
  const [selectedAnswer, setSelectedAnswer] =
    useState<AnswerValue | null>(null);

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (answer: AnswerValue) => {
    setSelectedAnswer(answer);

    // Small delay for visual feedback
    setTimeout(() => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedAnswer(null);
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 p-4 flex flex-col">
      <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevious}
              className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="text-white/60 text-xs tracking-widest mb-1">
                PERSONAVIEW
              </div>
              <span className="text-white/90 text-sm">
                Question {currentQuestion + 1} of{" "}
                {questions.length}
              </span>
            </div>
            <div className="w-10"></div>
          </div>
          <Progress
            value={progress}
            className="h-1.5 bg-white/20"
          />
        </div>

        {/* Question Card */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md"
            >
              {/* Question Text */}
              <div className="mb-8">
                <h2 className="text-center text-xl leading-relaxed text-gray-800">
                  {question.question}
                </h2>
              </div>

              {/* Answer Circles */}
              <div className="space-y-6">
                {/* Circles */}
                <div className="flex items-center justify-center gap-3">
                  {answerOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${option.size} rounded-full ${option.color} ${option.hoverColor} transition-all relative flex items-center justify-center ${
                        selectedAnswer === option.value
                          ? "ring-4 ring-purple-500 ring-offset-2"
                          : ""
                      }`}
                    >
                      {/* Inner ring for selected state */}
                      {selectedAnswer === option.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-1/2 h-1/2 rounded-full bg-white"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Labels - Only showing 3 main labels */}
                <div className="flex items-start justify-between px-2">
                  <div className="text-center text-xs text-gray-600 max-w-[70px]">
                    Strongly
                    <br />
                    Disagree
                  </div>
                  <div className="text-center text-xs text-gray-600">
                    Neutral
                  </div>
                  <div className="text-center text-xs text-gray-600 max-w-[70px]">
                    Strongly
                    <br />
                    Agree
                  </div>
                </div>

                {/* Helper text */}
                <div className="text-center text-gray-500 text-sm pt-2">
                  Tap a circle to select your answer
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}