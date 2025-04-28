import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionsDialog from "./questions-dialog";

type InstructionsDialogProps = {
  searchParams: SearchParams;
};

export default async function InstructionsDialog({
  searchParams,
}: InstructionsDialogProps) {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="bg-brand text-white text-xs rounded-[20px] px-6 py-1 hover:bg-brand-hover">
          Start
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-12">
        <DialogHeader className="gap-4">
          <DialogTitle className="text-2xl">Instructions</DialogTitle>
          <DialogDescription>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <QuestionsDialog searchParams={searchParams} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
