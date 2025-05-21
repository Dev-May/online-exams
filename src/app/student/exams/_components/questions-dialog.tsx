import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import QuestionsForm from "./questions-form";
import catchError from "@/lib/utils/catch-error";
import { getQuestions } from "../../question/_actions/question.action";
import { convertSearchParams } from "@/lib/utils/convert-search-params";

type QuestionsDialogProps = {
  searchParams: SearchParams;
};

export default async function QuestionsDialog({
  searchParams,
}: QuestionsDialogProps) {
  const [payload, error] = await catchError(() =>
    getQuestions(convertSearchParams(searchParams).toString())
  );

  if (error) return <p>{error}</p>;

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="bg-brand hover:bg-brand-hover py-2 px-6 rounded-[20px] text-lg w-full">
          Start
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="max-w-[617px] min-h-[550px]">
        {/* Form */}
        {payload?.questions && <QuestionsForm questions={payload?.questions} />}
      </DialogContent>
    </Dialog>
  );
}
