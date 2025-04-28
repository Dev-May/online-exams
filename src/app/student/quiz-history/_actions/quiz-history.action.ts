"use server";

import { getAuthHeader } from "@/lib/utils/auth-header";

// Get User History
export async function getUserHistory() {
  const response = await fetch(`${process.env.API}/questions/history`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<{ history: Question[] }> = await response.json();

  return payload;
}
