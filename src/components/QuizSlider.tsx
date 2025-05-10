
import React, { useState, useEffect } from "react";
import { QuizQuestion, quizQuestions } from "../data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Add darkMode as a prop
interface QuizSliderProps {
  darkMode?: boolean;
}

const QuizSlider: React.FC<QuizSliderProps> = ({ darkMode = false }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"in" | "out" | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState<"question" | "chapter">("question");
  const [invalidInput, setInvalidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setSlideDirection("out");
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setSlideDirection("in");
      }, 400);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setSlideDirection("out");
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSlideDirection("in");
      }, 400);
    }
  };

  const handleFindQuestion = () => {
    if (searchInput.trim() === "") {
      showError("Please enter a search term");
      return;
    }

    if (searchType === "question") {
      const questionNumber = parseInt(searchInput);
      if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > totalQuestions) {
        showError(`Please enter a valid question number (1-${totalQuestions})`);
        return;
      }

      const newIndex = questionNumber - 1;
      if (newIndex !== currentQuestionIndex) {
        setSlideDirection("out");
        setTimeout(() => {
          setCurrentQuestionIndex(newIndex);
          setSlideDirection("in");
        }, 400);
      }
    } else {
      // Search by chapter
      const chapterNumber = parseInt(searchInput);
      if (isNaN(chapterNumber)) {
        showError("Please enter a valid chapter number");
        return;
      }
      
      // Find the first question with the matching chapter
      const matchingQuestions = quizQuestions.filter(q => 
        q.chapter && parseInt(q.chapter) === chapterNumber
      );

      if (matchingQuestions.length === 0) {
        showError(`No questions found for chapter "${searchInput}"`);
        return;
      }

      // Take the first matching question
      const newIndex = quizQuestions.indexOf(matchingQuestions[0]);
      if (newIndex !== currentQuestionIndex) {
        setSlideDirection("out");
        setTimeout(() => {
          setCurrentQuestionIndex(newIndex);
          setSlideDirection("in");
        }, 400);
      }
    }
    
    setSearchInput("");
    setErrorMessage("");
  };

  const showError = (message: string) => {
    setErrorMessage(message);
    setInvalidInput(true);
    setTimeout(() => setInvalidInput(false), 1500);
  };

  useEffect(() => {
    // Initial slide in animation
    setSlideDirection("in");
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
          <h1 className={`text-2xl sm:text-3xl font-bold ${
            darkMode 
              ? "bg-gradient-to-r from-[#33C3F0] to-[#8B5CF6] bg-clip-text text-transparent" 
              : "bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent"
          }`}>
            Quizzy Explorer
          </h1>
          <div className={`text-sm font-medium px-3 py-1 rounded-full ${
            darkMode 
              ? "bg-gradient-to-r from-[#33C3F0] to-[#8B5CF6] text-white" 
              : "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white"
          }`}>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>

        <div className="relative mb-6 overflow-hidden">
          <Card
            className={cn(
              `rounded-xl border-none shadow-lg w-full p-4 sm:p-6 flex flex-col transition-all duration-400 ease-in-out backdrop-blur-md hover:shadow-xl ${
                darkMode 
                  ? "bg-slate-800/60 text-white" 
                  : "bg-white/30 text-card-foreground"
              }`,
              slideDirection === "in"
                ? "animate-slide-in"
                : slideDirection === "out"
                ? "animate-slide-out"
                : ""
            )}
          >
            <div className={`${
              darkMode 
                ? "bg-gradient-to-r from-[#33C3F0] to-[#8B5CF6]" 
                : "bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]"
              } text-xs inline-block px-3 py-1 rounded-full self-start mb-4 text-white`}
            >
              {currentQuestion.category}
              {currentQuestion.chapter && ` • Chapter ${currentQuestion.chapter}`}
            </div>

            <div className="flex-1 flex flex-col">
              <h2 className={`text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
                {currentQuestion.question}
              </h2>

              <div className={`${
                darkMode 
                  ? "bg-slate-700/70 border-slate-600/50" 
                  : "bg-white/70 border-[#e2d1c3]/20"
                } p-4 sm:p-6 rounded-lg shadow-md border mb-4 max-h-60 overflow-y-auto transition-all duration-300 hover:shadow-lg`}
              >
                <p className={`text-base sm:text-xl font-medium ${
                  darkMode ? "text-[#33C3F0]" : "text-[#8B5CF6]"
                }`}>
                  {currentQuestion.answer}
                </p>
              </div>
            </div>

            {/* Question indicators removed as requested */}
          </Card>
        </div>

        {/* Navigation buttons - with dark mode support */}
        <div className="flex justify-center gap-3 mb-6">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`${
              darkMode 
                ? "bg-gradient-to-r from-slate-800 to-slate-700 hover:opacity-90" 
                : "bg-gradient-to-r from-gray-800 to-gray-900 hover:opacity-90"
              } text-white transition-all duration-300 transform hover:-translate-x-1 rounded-xl shadow-lg`}
            size="sm"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Prev</span>
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className={`${
              darkMode 
                ? "bg-gradient-to-r from-[#33C3F0] to-[#8B5CF6]" 
                : "bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]"
              } text-white hover:opacity-90 transition-all duration-300 transform hover:translate-x-1 rounded-xl shadow-lg`}
            size="sm"
          >
            <span className="text-sm">Next</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        {/* Question finder section - with dark mode support */}
        <div className={`flex flex-col items-center justify-center gap-4 mt-2 backdrop-blur-sm p-4 rounded-xl border shadow-lg ${
          darkMode 
            ? "bg-slate-800/30 border-slate-700/30" 
            : "bg-white/20 border-white/30"
          }`}
        >
          <div className="flex flex-col sm:flex-row w-full items-center gap-2">
            <Select 
              value={searchType} 
              onValueChange={(value: "question" | "chapter") => setSearchType(value)}
            >
              <SelectTrigger className={`w-full sm:w-40 border-none shadow-sm ${
                darkMode ? "bg-slate-700/70" : "bg-white/70"
              }`}>
                <SelectValue placeholder="Search by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="question">Question #</SelectItem>
                <SelectItem value="chapter">Chapter</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="relative w-full">
              <Input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={searchType === "question" 
                  ? `Enter question # (1-${totalQuestions})` 
                  : "Enter chapter number (15-27)"
                }
                className={cn(
                  `pr-10 border-none focus:ring-[#8B5CF6] transition-colors rounded-xl shadow-sm ${
                    darkMode ? "bg-slate-700/70" : "bg-white/70"
                  }`,
                  invalidInput && "border-red-500 animate-shake"
                )}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleFindQuestion();
                }}
              />
              {errorMessage && invalidInput && (
                <div className="absolute -bottom-6 left-0 text-xs text-red-500 font-medium">
                  {errorMessage}
                </div>
              )}
            </div>
            
            <Button
              onClick={handleFindQuestion}
              className={`${
                darkMode 
                  ? "bg-gradient-to-r from-[#33C3F0] to-[#8B5CF6]" 
                  : "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
                } text-white hover:opacity-90 transition-all duration-300 rounded-xl shadow-md w-full sm:w-auto`}
            >
              <Search className="h-4 w-4 mr-1" />
              Find
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;
