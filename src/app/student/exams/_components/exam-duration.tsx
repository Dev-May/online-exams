"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ExamDurationProps = {
  duration: number;
  onTimerEnd?: () => void;
  onTimeChange?: (date: Date) => void;
};

export default function ExamDuration({
  duration,
  onTimerEnd,
  onTimeChange,
}: ExamDurationProps) {
  // State
  const [date, setDate] = useState(new Date(0).setMinutes(duration));

  // Effects
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate((prev) => {
        const currentDate = new Date(prev);

        // Check if the time is up
        if (currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0) {
          onTimerEnd?.();

          window.clearInterval(timerId);

          return Date.now();
        }

        // Invoke time handler on each iteration
        onTimeChange?.(currentDate);

        return currentDate.setSeconds(currentDate.getSeconds() - 1);
      });
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [onTimerEnd, onTimeChange]);

  return (
    <div className="flex items-center">
      {/* Icon */}
      <Image
        className="w-8 h-8"
        src={"/assets/icons/alarm.png"}
        width={32}
        height={32}
        alt="alarm"
      />

      {/* Timer */}
      <span className="text-sm text-bright-green">
        {Intl.DateTimeFormat("en-US", {
          minute: "2-digit",
          second: "2-digit",
        }).format(date)}
      </span>
    </div>
  );
}
