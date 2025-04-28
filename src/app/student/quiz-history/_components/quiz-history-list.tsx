import catchError from "@/lib/utils/catch-error";
import { getUserHistory } from "../_actions/quiz-history.action";

export default async function QuizHistoryList() {
  // Variables
  const [payload] = await catchError(() => getUserHistory());

  if (!payload || !payload.history || payload.history.length === 0) {
    return (
      <section>
        <p>You have not attempted any quizzes yet.</p>
      </section>
    );
  }

  return (
    <section>
      <ul className="gap-4">
        {payload?.history.map((question) => (
          <li
            key={question._id}
            className="shadow-soft-glow rounded-[10px] px-2 py-4 gap-4"
          >
            <h2 className="text-2xl font-medium">{question.question}</h2>
            {question.answers.map((answer) => (
              <div
                key={answer.key}
                className={`border rounded-[10px] px-2 py-4 gap-4 ${
                  answer.key === question.correct
                    ? "bg-[#CAF9CC] border-[#11CE19]"
                    : ""
                }`}
              >
                <p className="text-xl text-[#011234]">{answer.answer}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
