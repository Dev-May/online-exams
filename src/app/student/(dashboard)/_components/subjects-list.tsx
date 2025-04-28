import catchError from "@/lib/utils/catch-error";
import Image from "next/image";
import { getSubjects } from "../_actions/subject.action";
import Link from "next/link";

type SubjectsListProps = {
  searchParams: SearchParams;
};

export default async function SubjectsList({
  searchParams,
}: SubjectsListProps) {
  const [payload] = await catchError(getSubjects);

  return (
    <section className="shadow-subtle px-4 py-8 rounded-[20px] ">
      <div className="flex justify-between">
        {/* Section Title */}
        <h2 className="text-2xl text-brand font-medium mb-6">Quizzes</h2>
        <Link href={"/student/all-subjects"} className="text-brand">
          View All
        </Link>
      </div>

      {/* Subjects List */}
      <ul className="grid grid-cols-3 gap-x-5 gap-y-6">
        {payload?.subjects.map((subject) => (
          <li
            key={subject._id}
            className="relative rounded-md overflow-hidden shadow-elevated-glow h-72"
          >
            {/* Background Image */}
            <div className="absolute inset-0 h-full">
              <Image
                src={subject.icon}
                alt={subject.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <Link href={`/student/exams?subject=${subject._id}`}>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#1935CA66] bg-opacity-30 backdrop-blur-xl p-4 mx-4 my-6 rounded-[8px]">
                <p className="text-sm font-bold text-center text-white">
                  {subject.name}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
