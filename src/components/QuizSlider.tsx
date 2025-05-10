
import React, { useState, useEffect } from "react";
import { QuizQuestion, quizQuestions } from "../data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const QuizSlider = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"in" | "out" | null>(null);
  const [questionInput, setQuestionInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

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
    const questionNumber = parseInt(questionInput);
    if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > totalQuestions) {
      setInvalidInput(true);
      setTimeout(() => setInvalidInput(false), 1500);
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
    
    setQuestionInput("");
  };

  useEffect(() => {
    // Initial slide in animation
    setSlideDirection("in");
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-quiz-purple to-quiz-blue bg-clip-text text-transparent">
            Quizzy Explorer
          </h1>
          <div className="text-sm font-medium bg-gradient-to-r from-quiz-blue to-quiz-purple text-white px-3 py-1 rounded-full animate-pulse">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>

        <div className="relative mb-6 overflow-hidden">
          <Card
            className={cn(
              "rounded-xl border-2 border-quiz-light bg-card text-card-foreground shadow-lg w-full p-4 sm:p-6 flex flex-col transition-all duration-400 ease-in-out backdrop-blur-sm bg-white/80 hover:shadow-xl",
              slideDirection === "in"
                ? "animate-slide-in"
                : slideDirection === "out"
                ? "animate-slide-out"
                : ""
            )}
          >
            <div className="bg-gradient-to-r from-quiz-purple to-quiz-blue text-xs inline-block px-3 py-1 rounded-full self-start mb-4 text-white">
              {currentQuestion.category}
            </div>

            <div className="flex-1 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                {currentQuestion.question}
              </h2>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 mb-4 max-h-60 overflow-y-auto transition-all duration-300 hover:shadow-md">
                <p className="text-base sm:text-xl font-medium text-quiz-purple">
                  {currentQuestion.answer}
                </p>
              </div>
            </div>

            {/* Question indicators - made into clickable dots */}
            <div className="flex justify-center gap-1 mt-6 mb-4">
              {quizQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== currentQuestionIndex) {
                      setSlideDirection("out");
                      setTimeout(() => {
                        setCurrentQuestionIndex(index);
                        setSlideDirection("in");
                      }, 400);
                    }
                  }}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-all duration-300",
                    index === currentQuestionIndex
                      ? "bg-gradient-to-r from-quiz-purple to-quiz-blue scale-125"
                      : "bg-gray-200 hover:bg-gray-300"
                  )}
                  aria-label={`Go to question ${index + 1}`}
                ></button>
              ))}
            </div>
          </Card>
        </div>

        {/* Navigation buttons - new futuristic style with gradient */}
        <div className="flex justify-center gap-3 mb-4">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:opacity-90 transition-all duration-300 transform hover:-translate-x-1 rounded-xl shadow-md"
            size="sm"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Prev</span>
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className="bg-gradient-to-r from-quiz-purple to-quiz-blue text-white hover:opacity-90 transition-all duration-300 transform hover:translate-x-1 rounded-xl shadow-md"
            size="sm"
          >
            <span className="text-sm">Next</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        {/* Question finder section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2">
          <div className="relative w-full max-w-xs">
            <Input
              type="number"
              min="1"
              max={totalQuestions}
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              placeholder={`Enter question # (1-${totalQuestions})`}
              className={cn(
                "pr-10 border-2 focus:border-quiz-purple transition-colors rounded-xl",
                invalidInput && "border-red-500 animate-shake"
              )}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleFindQuestion();
              }}
            />
          </div>
          <Button
            onClick={handleFindQuestion}
            className="bg-gradient-to-r from-quiz-blue to-quiz-purple text-white hover:opacity-90 transition-all duration-300 rounded-xl shadow-md w-full sm:w-auto"
          >
            <Search className="h-4 w-4 mr-1" />
            Find Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;
