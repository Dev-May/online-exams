"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { AnswerFields } from "@/lib/schemas/exam.schema";
import { getAuthHeader } from "@/lib/utils/auth-header";

// Get All Exams
export async function getExams() {
  const response = await fetch(`${process.env.API}/exams`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<PaginatedResponse<{ exams: Exam[] }>> =
    await response.json();

  return payload;
}

// Get all exams on subject
export async function getSubjectExams(searchParams: string) {
  const response = await fetch(`${process.env.API}/exams?${searchParams}`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<PaginatedResponse<{ exams: Exam[] }>> =
    await response.json();

  return payload;
}

// Submit Answers
export async function checkQuestionsAction(fields: AnswerFields) {
  const response = await fetch(`${process.env.API}/questions/check`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...(await getAuthHeader()),
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<CheckResponse> = await response.json();

  return payload;
}
