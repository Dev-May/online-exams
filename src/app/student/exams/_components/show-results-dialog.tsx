import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import catchError from "@/lib/utils/catch-error";
import "react-circular-progressbar/dist/styles.css";
import { getQuestions } from "../../question/_actions/question.action";
import { convertSearchParams } from "@/lib/utils/convert-search-params";

type ShowResultsDialogProps = {
  searchParams: SearchParams;
};

export async function ShowResultsDialog({
  searchParams,
}: ShowResultsDialogProps) {
  // Variables
  const [payload, error] = await catchError(() =>
    getQuestions(convertSearchParams(searchParams).toString())
  );

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="w-1/2 rounded-[20px] bg-brand text-white hover:bg-brand-hover">
          Show Results
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="max-w-[776px] max-h-[90vh] overflow-y-auto gap-12 rounded-[20px]">
        <ul className="grid grid-cols-2 gap-4">
          {payload?.questions.map((question) => (
            <li
              key={question._id}
              className="shadow-soft-glow rounded-[10px] px-2 py-4 gap-4"
            >
              {/* Question */}
              <h2 className="text-2xl font-medium">{question.question}</h2>

              {/* Answers */}
              {question.answers.map((answer) => (
                <div
                  key={answer.key}
                  className={`border rounded-[10px] px-2 py-4 gap-4`}
                >
                  <p className="text-xl text-[#011234]">{answer.answer}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>

        {/* Close Button */}
        <DialogTrigger className="ml-auto" asChild>
          <Button className="px-12 py-2 rounded-[20px] border border-brand text-brand bg-white hover:text-white hover:bg-brand transition-colors">
            Close
          </Button>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
}
