
import { useState } from "react";
import QuizSlider from "@/components/QuizSlider";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${darkMode ? "dark bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900" : "bg-gradient-to-br from-slate-100 via-purple-200 to-slate-100"}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${darkMode ? "bg-purple-600" : "bg-purple-400"}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${darkMode ? "bg-blue-600" : "bg-blue-400"}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 ${darkMode ? "bg-quiz-blue" : "bg-quiz-purple"}`}></div>
        
        {/* Additional futuristic elements */}
        <div className={`absolute top-20 left-20 w-40 h-40 border rounded-full ${darkMode ? "border-white/10" : "border-black/10"}`}></div>
        <div className={`absolute bottom-20 right-20 w-60 h-60 border-2 rounded-full ${darkMode ? "border-white/5" : "border-black/5"}`}></div>
        <div className={`absolute top-1/3 right-1/4 w-2 h-2 rounded-full shadow-lg ${darkMode ? "bg-white shadow-white/50" : "bg-black shadow-black/20"}`}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50`}></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iIzIwMjMzOCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <div className="relative z-10 container mx-auto py-4 sm:py-8 px-2 sm:px-4">
        <div className="flex justify-end mb-4">
          <Button 
            onClick={toggleDarkMode} 
            variant="outline" 
            size="icon"
            className={`rounded-full transition-all duration-300 ${darkMode ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700' : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-100'}`}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        <QuizSlider darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Index;
