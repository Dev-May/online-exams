"use server";

import { getAuthHeader } from "@/lib/utils/auth-header";

export async function deleteAccountAction() {
  const response = await fetch(`${process.env.API}/auth/deleteMe`, {
    method: "DELETE",
    cache: "no-store",
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<DeleteAccountResponse> = await response.json();

  return payload;
}
