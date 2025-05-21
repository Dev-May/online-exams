import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type ScoreProps = {
  results: CheckResponse | null;
};

export function ScoreDialog({ results }: ScoreProps) {
  // Red arc config
  const redArcRotation =
    (typeof results?.total === "number" ? results.total : 0) / 100;

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="bg-brand hover:bg-brand-hover py-2 px-6 rounded-[20px] text-lg w-full">
          Submit Answers
        </Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="max-w-[686px]">
        <div className="flex flex-col items-center gap-12 rounded-2xl">
          <h2 className="mr-auto text-2xl font-medium">Your score</h2>

          <div className="flex gap-20">
            <div className="relative w-32 h-32">
              {/* Red Arc */}
              <div className="absolute top-0 left-0 w-full h-full z-10">
                <CircularProgressbarWithChildren
                  value={100 - Number(results?.total) || 0}
                  strokeWidth={6}
                  styles={buildStyles({
                    pathColor: "#CC1010",
                    trailColor: "transparent",
                    rotation: redArcRotation,
                    strokeLinecap: "round",
                  })}
                />
              </div>

              {/* Main Circle */}
              <div className="absolute top-0 left-0 w-full h-full">
                <CircularProgressbarWithChildren
                  value={Number(results?.total) || 0}
                  strokeWidth={6}
                  styles={buildStyles({
                    pathColor: "#02369C",
                    trailColor: "#fff",
                    strokeLinecap: "round",
                  })}
                >
                  {/* Center Text */}
                  <div className="flex flex-col items-center justify-center text-black text-lg">
                    {results?.total}%
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-[170px] flex flex-col items-center justify-center gap-2">
              <div className="w-full flex justify-between items-center text-blue-700">
                <span className="text-2xl font-medium">Correct</span>
                <div className="w-8 h-8 border border-[#02369C] rounded-full flex items-center justify-center text-base font-medium">
                  {results?.correct}
                </div>
              </div>

              <div className="w-full flex justify-between items-center text-red-600">
                <span className="text-2xl font-medium">Incorrect</span>
                <div className="w-8 h-8 border border-[#CC1010] rounded-full flex items-center justify-center text-base font-bold">
                  {results?.wrong}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="w-full flex justify-between gap-12">
            {/* Back */}
            <Button className="w-1/2 rounded-[20px] border border-brand text-brand bg-white hover:text-white hover:bg-brand transition-colors">
              Back
            </Button>

            {/* Show Results */}
            {/* <ShowResultsDialog /> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
