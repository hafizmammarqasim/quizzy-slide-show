
import React, { useState, useEffect } from "react";
import { QuizQuestion, quizQuestions } from "../data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const QuizSlider = () => {
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
      const matchingQuestions = quizQuestions.filter(q => 
        q.chapter && q.chapter.toLowerCase().includes(searchInput.toLowerCase())
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
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
            Quizzy Explorer
          </h1>
          <div className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-3 py-1 rounded-full">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>

        <div className="relative mb-6 overflow-hidden">
          <Card
            className={cn(
              "rounded-xl border-none bg-card text-card-foreground shadow-lg w-full p-4 sm:p-6 flex flex-col transition-all duration-400 ease-in-out backdrop-blur-md bg-white/30 hover:shadow-xl",
              slideDirection === "in"
                ? "animate-slide-in"
                : slideDirection === "out"
                ? "animate-slide-out"
                : ""
            )}
          >
            <div className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-xs inline-block px-3 py-1 rounded-full self-start mb-4 text-white">
              {currentQuestion.category}
              {currentQuestion.chapter && ` • ${currentQuestion.chapter}`}
            </div>

            <div className="flex-1 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                {currentQuestion.question}
              </h2>

              <div className="bg-white/70 p-4 sm:p-6 rounded-lg shadow-md border border-[#e2d1c3]/20 mb-4 max-h-60 overflow-y-auto transition-all duration-300 hover:shadow-lg">
                <p className="text-base sm:text-xl font-medium text-[#8B5CF6]">
                  {currentQuestion.answer}
                </p>
              </div>
            </div>

            {/* Question indicators - made into clickable dots */}
            <div className="flex justify-center gap-1 mt-6 mb-4 flex-wrap">
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
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] scale-125"
                      : "bg-gray-200 hover:bg-gray-300"
                  )}
                  aria-label={`Go to question ${index + 1}`}
                ></button>
              ))}
            </div>
          </Card>
        </div>

        {/* Navigation buttons - new futuristic style with gradient */}
        <div className="flex justify-center gap-3 mb-6">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:opacity-90 transition-all duration-300 transform hover:-translate-x-1 rounded-xl shadow-lg"
            size="sm"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Prev</span>
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white hover:opacity-90 transition-all duration-300 transform hover:translate-x-1 rounded-xl shadow-lg"
            size="sm"
          >
            <span className="text-sm">Next</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        {/* Question finder section - redesigned */}
        <div className="flex flex-col items-center justify-center gap-4 mt-2 bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-lg">
          <div className="flex flex-col sm:flex-row w-full items-center gap-2">
            <Select 
              value={searchType} 
              onValueChange={(value: "question" | "chapter") => setSearchType(value)}
            >
              <SelectTrigger className="w-full sm:w-40 bg-white/70 border-none shadow-sm">
                <SelectValue placeholder="Search by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="question">Question #</SelectItem>
                <SelectItem value="chapter">Chapter</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="relative w-full">
              <Input
                type={searchType === "question" ? "number" : "text"}
                min={searchType === "question" ? "1" : undefined}
                max={searchType === "question" ? totalQuestions.toString() : undefined}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={searchType === "question" 
                  ? `Enter question # (1-${totalQuestions})` 
                  : "Enter chapter name"
                }
                className={cn(
                  "pr-10 border-none bg-white/70 focus:ring-[#8B5CF6] transition-colors rounded-xl shadow-sm",
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
              className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white hover:opacity-90 transition-all duration-300 rounded-xl shadow-md w-full sm:w-auto"
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
