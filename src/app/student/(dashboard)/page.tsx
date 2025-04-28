import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import ProfileCard from "./_components/profile-card";
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
      <ProfileCard
        firstName={session?.user.firstName || ""}
        lastName={session?.user.lastName || ""}
        email={session?.user.email || ""}
      />

      <Suspense fallback={<SubjectsListFallback />}>
        <SubjectsList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
