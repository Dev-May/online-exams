"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { ForgotPasswordFields } from "@/lib/schemas/auth.schema";

export async function forgotPasswordAction(
  forgotPasswordFields: ForgotPasswordFields
) {
  const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(forgotPasswordFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<ForgotPasswordResponse> = await response.json();

  return payload;
}
