declare type Question = {
  _id: string;
  question: string;
  type: "single_choice" | "multiple_choice";
  answers: {
    answer: string;
    key: string;
  }[];
  correct: string | string[];
  subject: Subject;
  exam: Exam;
  createdAt: string;
};
