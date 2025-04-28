// Get All Subjects Response
declare type Subject = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};

declare type SubjectResponse = SuccessfulResponse<{
  subjects: Subject[];
}>;

// Add Subject Response
declare type AddSubjectResponse = {
  subject: Subject;
};

// Delete Subject Response
declare type DeleteSubjectResponse = {
  category: Subject;
};

// Get Single Subject Response
declare type GetSingleSubjectResponse = {
  category: Subject;
};
