import { getSubjectExams } from "../_actions/exam.action";
import catchError from "@/lib/utils/catch-error";
import { Card } from "@/components/ui/card";
import { BookCheck } from "lucide-react";
import InstructionsDialog from "./instructions-dialog";
import { convertSearchParams } from "@/lib/utils/convert-search-params";

type ExamsListProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function ExamsList({ searchParams }: ExamsListProps) {
  // Variables
  const [payload] = await catchError(() =>
    getSubjectExams(convertSearchParams(searchParams).toString())
  );

  if (!payload || !payload.exams || payload.exams.length === 0) {
    return (
      <section>
        <p>No exams available for this subject.</p>
      </section>
    );
  }

  return (
    <section>
      <ul className="space-y-6">
        {payload?.exams.map((exam) => (
          <li key={exam._id} className="mb-10">
            <h2 className="text-lg font-medium mb-6">{exam.title}</h2>
            <Card className="flex items-center px-6 py-4 rounded-[10px] shadow-Soft-deep gap-6">
              {/* Exam */}
              <div>
                <BookCheck size={70} className="w-16 h-16 text-brand" />
              </div>

              {/* Exam info */}
              <div className="flex items-center flex-1 justify-between">
                <div>
                  {/* Title */}
                  <h2 className="text-base font-semibold mb-1">{exam.title}</h2>

                  {/* Number of questions */}
                  <p className="text-sm text-neutral-600">
                    {exam.numberOfQuestions}{" "}
                    {exam.numberOfQuestions === 1 ? "Question" : "Questions"}
                  </p>
                </div>

                {/* Exam duration */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm text-neutral-600">
                    {exam.duration} Minutes
                  </p>

                  {/* Start */}
                  <InstructionsDialog searchParams={searchParams} />
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
