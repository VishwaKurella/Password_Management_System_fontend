// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const tokenCookie = request.cookies.get("auth_token");
  console.log("⮕ auth-token cookie:", tokenCookie?.value);
  if (
    (pathname.startsWith("/dashboard") || pathname.startsWith("/settings")) &&
    !tokenCookie
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

// Run on ALL routes
export const config = {
  matcher: ["/:path*"],
};
