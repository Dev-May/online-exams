"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import { RegistrationFields } from "@/lib/schemas/auth.schema";
import { getAuthHeader } from "@/lib/utils/auth-header";

export async function registerAction(registrationFields: RegistrationFields) {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(registrationFields),
    headers: {
      ...(await getAuthHeader()),
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<RegisterResponse> = await response.json();

  return payload;
}
