import { CircleCheck, Clock, Flag } from "lucide-react";

export default function PerformanceMetrics() {
  return (
    <div className="flex justify-between gap-6">
      <div className="text-center flex items-center justify-center gap-4">
        <div className="w-16 h-16 shadow-glow rounded-[10px] p-4">
          <Flag className="w-8 h-8 text-brand fill-brand" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-500">27</h3>
          <p className="text-sm text-zinc-500">Quiz Passed</p>
        </div>
      </div>
      <div className="text-center flex items-center justify-center gap-4">
        <div className="w-16 h-16 shadow-glow rounded-[10px] p-4">
          <Clock className="w-8 h-8 text-brand" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-500">13 min</h3>
          <p className="text-sm text-zinc-500">Fastest Time</p>
        </div>
      </div>
      <div className="text-center flex items-center justify-center gap-4">
        <div className="w-16 h-16 shadow-glow rounded-[10px] p-4">
          <CircleCheck className="w-8 h-8 text-brand" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-500">200</h3>
          <p className="text-sm text-zinc-500">Correct Answers</p>
        </div>
      </div>
    </div>
  );
}
