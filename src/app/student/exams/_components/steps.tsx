import { cn } from "@/lib/utils/cn";

interface StepsProps {
  total: number;
  active: number;
}

export const Steps = ({ total, active }: StepsProps) => {
  return (
    <div className="w-full flex justify-between items-center mb-12">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "size-2 rounded-full bg-gray-300 transition-colors",
            active >= i && "bg-brand"
          )}
        />
      ))}
    </div>
  );
};
