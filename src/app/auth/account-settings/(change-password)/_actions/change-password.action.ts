"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { ChangePasswordFields } from "@/lib/schemas/auth.schema";
import { getAuthHeader } from "@/lib/utils/auth-header";

export async function changePasswordAction(
  changePasswordFields: ChangePasswordFields
) {
  const response = await fetch(`${process.env.API}/auth/changePassword`, {
    method: "PATCH",
    body: JSON.stringify(changePasswordFields),
    headers: {
      ...(await getAuthHeader()),
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ChangePasswordResponse> = await response.json();

  return payload;
}
