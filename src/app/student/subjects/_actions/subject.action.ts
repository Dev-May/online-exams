("use server");

import { AddSubjectFields } from "@/lib/schemas/subject.schema";
import { getAuthHeader } from "@/lib/utils/auth-header";

// Add Subject Action
export async function addSubjectAction(fields: AddSubjectFields) {
  const formData = new FormData();

  for (const key in fields) {
    const value = (fields as any)[key];
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  }

  const response = await fetch(`${process.env.API}/subjects`, {
    method: "POST",
    body: formData,
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<AddSubjectResponse> = await response.json();

  return payload;
}

// Update Subject Action
export async function updateSubjectAction(
  subjectId: string,
  fields: AddSubjectFields
) {
  const formData = new FormData();

  for (const key in fields) {
    const value = (fields as any)[key];
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  }
  const response = await fetch(`${process.env.API}/subjects/${subjectId}`, {
    method: "PUT",
    body: formData,
    headers: {
      ...(await getAuthHeader()),
    },
  });

  // const payload: APIResponse<UpdateSubjectResponse> = await response.json();

  // return payload;
}

// Delete Subject Action
export async function deleteSubjectAction(subjectId: string) {
  const response = await fetch(`${process.env.API}/subjects/${subjectId}`, {
    method: "DELETE",
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<DeleteSubjectResponse> = await response.json();

  return payload;
}

// Get Single Subject
export async function getSingleSubjectAction(subjectId: string) {
  const response = await fetch(`${process.env.API}/subjects/${subjectId}`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<GetSingleSubjectResponse> = await response.json();

  return payload;
}
