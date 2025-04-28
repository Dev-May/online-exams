import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import SubjectsList from "./_components/subjects-list";
import SubjectsListFallback from "./_components/subjects-list-fallback";

type PageProps = {
  searchParams: SearchParams;
};

export default async function Page({ searchParams }: PageProps) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Suspense fallback={<SubjectsListFallback />}>
        <SubjectsList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
