
import QuizSlider from "@/components/QuizSlider";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-quiz-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Additional futuristic elements */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white/5 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iIzIwMjMzOCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <div className="relative z-10 container mx-auto py-4 sm:py-8 px-2 sm:px-4">
        <QuizSlider />
      </div>
    </div>
  );
};

export default Index;
