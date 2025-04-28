import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPages = new Set(["/auth/login", "/auth/register"]);
const publicPages = new Set([
  ...Array.from(authPages),
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify-code",
]);

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  const { pathname } = req.nextUrl;

  // Redirect authenticated users away from auth pages to dashboard
  if (authPages.has(pathname) && token) {
    const redirectUrl = new URL("/student", req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  // Allow public pages for everyone
  if (publicPages.has(pathname)) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to login page for protected routes
  if (!token) {
    const redirectUrl = new URL("/auth/login", req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  // Allow authenticated users to proceed to protected pages
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
