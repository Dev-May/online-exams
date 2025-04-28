import SubjectsList from "../_components/subjects-list";

type PageProps = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: PageProps) {
  return (
    <div>
      <SubjectsList searchParams={searchParams} />
    </div>
  );
}
