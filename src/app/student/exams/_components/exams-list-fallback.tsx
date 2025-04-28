import { Skeleton } from "@/components/ui/skeleton";

export default function ExamsListFallback() {
  return (
    <section>
      <ul className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <li key={index} className="mb-10">
            {/* Skeleton Exam Title above card */}
            <Skeleton className="h-6 w-1/2 mb-6 rounded-md animate-shimmer bg-[length:200%_100%]" />

            {/* Card Layout */}
            <div className="flex items-center px-6 py-4 rounded-[10px] shadow-Soft-deep gap-6 bg-white">
              {/* Exam Icon Skeleton */}
              <Skeleton className="w-16 h-16 rounded-full animate-shimmer bg-[length:200%_100%]" />

              {/* Exam Info Skeleton */}
              <div className="flex items-center flex-1 justify-between">
                <div className="space-y-2">
                  {/* Title skeleton */}
                  <Skeleton className="h-4 w-32 rounded animate-shimmer bg-[length:200%_100%]" />

                  {/* Number of questions skeleton */}
                  <Skeleton className="h-4 w-24 rounded animate-shimmer bg-[length:200%_100%]" />
                </div>

                {/* Exam duration and button */}
                <div className="flex flex-col items-center gap-2">
                  {/* Duration skeleton */}
                  <Skeleton className="h-4 w-20 rounded animate-shimmer bg-[length:200%_100%]" />

                  {/* Start button skeleton */}
                  <Skeleton className="h-8 w-24 rounded animate-shimmer bg-[length:200%_100%]" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
