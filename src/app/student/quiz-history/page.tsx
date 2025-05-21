import { Suspense } from "react";
import QuizHistoryList from "./_components/quiz-history-list";

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}>
      <QuizHistoryList />;
    </Suspense>
}
