
export interface QuizQuestion {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
    category: "Geography"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    category: "Astronomy"
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    answer: "Blue Whale",
    category: "Biology"
  },
  {
    id: 4,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    category: "Literature"
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    category: "Chemistry"
  },
  {
    id: 6,
    question: "Which country is home to the Great Barrier Reef?",
    answer: "Australia",
    category: "Geography"
  },
  {
    id: 7,
    question: "What is the smallest prime number?",
    answer: "2",
    category: "Mathematics"
  },
  {
    id: 8,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    category: "Art"
  },
  {
    id: 9,
    question: "What is the main component of the Sun?",
    answer: "Hydrogen",
    category: "Astronomy"
  },
  {
    id: 10,
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
    category: "Chemistry"
  }
];
