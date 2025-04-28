"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { VerifyCodeFields } from "@/lib/schemas/auth.schema";

export async function verifyCodeAction(verifyCodeFields: VerifyCodeFields) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(verifyCodeFields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<VerifyCodeResponse> = await response.json();

  return payload;
}
