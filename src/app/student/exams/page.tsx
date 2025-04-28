"use client";

import { Suspense } from "react";
import ExamsList from "./_components/exams-list";
import ExamsListFallback from "./_components/exams-list-fallback";

type PageProps = {
  params: {
    subjectId: string;
  };
  searchParams: SearchParams;
};

export default function Page({ params, searchParams }: PageProps) {
  return (
    <>
      <Suspense fallback={<ExamsListFallback />}>
        <ExamsList
          searchParams={{ ...searchParams, subjectId: params.subjectId }}
        />
      </Suspense>
    </>
  );
}
