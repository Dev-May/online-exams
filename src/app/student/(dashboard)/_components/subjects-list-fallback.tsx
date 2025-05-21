import { Skeleton } from "@/components/ui/skeleton";

export default function SubjectsListFallback() {
  // Constants
  const SUBJECTS_List = 6

  return (
    <section className="shadow-subtle px-4 py-8 rounded-[20px]">
      {/* Section Title */}
      <h2 className="text-2xl text-brand font-medium mb-6">
        {/* Skeleton for the Section Title */}
        <Skeleton className="h-8 w-36" />
      </h2>

      {/* Subjects List */}
      <ul className="grid grid-cols-3 gap-x-5 gap-y-6">
        {[...Array(SUBJECTS_List)].map((_, index) => (
          <li
            key={index}
            className="relative rounded-md overflow-hidden shadow-elevated-glow h-72"
          >
            {/* Background Image Skeleton */}
            <div className="absolute inset-0 h-full">
              <Skeleton className="w-full h-full bg-gray-300 rounded-md" />
            </div>

            {/* Subject Info Skeleton */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gray-200 backdrop-blur-xl p-4 mx-4 my-6 rounded-[8px]">
              {/* Subject Name Skeleton */}
              <Skeleton className="h-4 w-32 mx-auto bg-gray-100 rounded-md" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
