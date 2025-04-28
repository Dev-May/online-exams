"use server";

import { getAuthHeader } from "@/lib/utils/auth-header";

// Get All Subjects
export async function getSubjects() {
  const response = await fetch(`${process.env.API}/subjects`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<PaginatedResponse<{ subjects: Subject[] }>> =
    await response.json();

  return payload;
}
