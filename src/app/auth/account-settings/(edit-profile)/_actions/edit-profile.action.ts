"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { EditProfileFields } from "@/lib/schemas/auth.schema";
import { getAuthHeader } from "@/lib/utils/auth-header";

export async function editProfileAction(editProfileFields: EditProfileFields) {
  const response = await fetch(`${process.env.API}/auth/editProfile`, {
    method: "PUT",
    body: JSON.stringify(editProfileFields),
    headers: {
      ...(await getAuthHeader()),
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<EditProfileResponse> = await response.json();

  return payload;
}
