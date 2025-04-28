"use server";

import { getAuthHeader } from "@/lib/utils/auth-header";

export async function profileDataAction() {
  const response = await fetch(`${process.env.API}/auth/profileData`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<ProfileDataResponse> = await response.json();

  return payload;
}
