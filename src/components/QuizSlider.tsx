import React, { useState, useEffect } from "react";
import { QuizQuestion, quizQuestions } from "../data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const QuizSlider = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"in" | "out" | null>(
    null
  );

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setSlideDirection("out");
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setShowAnswer(false);
        setSlideDirection("in");
      }, 400);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setSlideDirection("out");
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowAnswer(false);
        setSlideDirection("in");
      }, 400);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  useEffect(() => {
    // Initial slide in animation
    setSlideDirection("in");
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-quiz-purple">
            Quizzy Slideshow
          </h1>
          <div className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>

        <div className="relative min-h-[570px] sm:min-h-[740px] mb-6 overflow-hidden">
          <Card
            className={cn(
              "rounded-lg border bg-card text-card-foreground shadow-sm absolute w-full h-full p-4 sm:p-6 flex flex-col transition-all duration-400 ease-in-out",
              slideDirection === "in"
                ? "animate-slide-in"
                : slideDirection === "out"
                ? "animate-slide-out"
                : ""
            )}
          >
            <div className="bg-quiz-light text-xs inline-block px-3 py-1 rounded-full self-start mb-4">
              {currentQuestion.category}
            </div>

            <div className="flex-1 flex flex-col overflow-y-auto">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                {currentQuestion.question}
              </h2>

              {showAnswer && (
                <div
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 overflow-y-auto mb-4"
                  style={{ maxHeight: "670px", minHeight: "350px" }}
                >
                  <p className="text-base sm:text-xl font-medium text-quiz-purple">
                    {currentQuestion.answer}
                  </p>
                </div>
              )}

              <div className="mt-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <Button
                  onClick={toggleAnswer}
                  className="bg-quiz-purple hover:bg-purple-700 text-white"
                >
                  {showAnswer ? "Hide Answer" : "Reveal Answer"}
                </Button>
              </div>
            </div>

            {/* Question indicators */}
            <div className="flex justify-center gap-1 mt-6">
              {quizQuestions.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full",
                    index === currentQuestionIndex
                      ? "bg-quiz-purple"
                      : "bg-gray-200"
                  )}
                ></div>
              ))}
            </div>
          </Card>
        </div>

        {/* Navigation buttons outside the Card, always visible */}
        <div className="flex justify-center gap-2">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="outline"
            size="sm"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Prev</span>
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            variant="outline"
            size="sm"
          >
            <span className="text-sm">Next</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;
