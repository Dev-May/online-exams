import "server-only";

import { AUTH_COOKIE } from "@/lib/constants/auth.constant";
import { decode, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getAuthHeader() {
  const tokenCookie = cookies().get(AUTH_COOKIE)?.value;
  let JWT: JWT | null = null;

  try {
    JWT = await decode({
      token: tokenCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });
  } catch (error) {
    void error;
  }

  return {
    token: JWT?.token || "",
  };
}
