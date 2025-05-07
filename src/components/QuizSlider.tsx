
import React, { useState, useEffect } from "react";
import { QuizQuestion, quizQuestions } from "../data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const QuizSlider = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"in" | "out" | null>(null);

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
    <div className="flex flex-col items-center">
      <div className="w-full md:max-w-3xl px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-quiz-purple">Quizzy Slideshow</h1>
          <div className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>

        <div className="relative h-96 mb-8 overflow-hidden">
          <Card 
            className={cn(
              "absolute w-full h-full p-6 flex flex-col transition-all duration-400 ease-in-out",
              slideDirection === "in" ? "animate-slide-in" : slideDirection === "out" ? "animate-slide-out" : ""
            )}
          >
            <div className="bg-quiz-light text-xs inline-block px-3 py-1 rounded-full self-start mb-4">
              {currentQuestion.category}
            </div>
            
            <div className="flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold mb-6">
                {currentQuestion.question}
              </h2>
              
              {showAnswer ? (
                <div className="mt-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-xl font-medium text-quiz-purple">{currentQuestion.answer}</p>
                </div>
              ) : (
                <div className="mt-auto">
                  <Button 
                    onClick={toggleAnswer}
                    className="bg-quiz-purple hover:bg-purple-700 text-white"
                  >
                    Reveal Answer
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="flex justify-between items-center">
          <Button 
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-1">
            {quizQuestions.map((_, index) => (
              <div 
                key={index} 
                className={cn(
                  "h-2 w-2 rounded-full",
                  index === currentQuestionIndex ? "bg-quiz-purple" : "bg-gray-200"
                )}
              ></div>
            ))}
          </div>

          <Button 
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;
