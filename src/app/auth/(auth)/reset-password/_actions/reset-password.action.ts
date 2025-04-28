"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { ResetPasswordFields } from "@/lib/schemas/auth.schema";

export async function resetPasswordAction(
  resetPasswordFields: ResetPasswordFields
) {
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(resetPasswordFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ResetPasswordResponse> = await response.json();

  return payload;
}
