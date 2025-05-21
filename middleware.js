// // middleware.ts
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const { pathname } = request.nextUrl;
//   const tokenCookie = request.cookies.get("auth_token");
//   console.log("⮕ auth-token cookie:", tokenCookie?.value);
//   if (
//     (pathname.startsWith("/dashboard") || pathname.startsWith("/settings")) &&
//     !tokenCookie
//   ) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   return NextResponse.next();
// }

// // Run on ALL routes
// export const config = {
//   matcher: ["/:path*"],
// };

// middleware.js
import { NextResponse } from "next/server";

const BACKEND_BASE = "http://localhost:8080";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname === "/dashboard" || pathname === "/setting") {
    const token = request.cookies.get("auth_token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    try {
      const verifyRes = await fetch(`${BACKEND_BASE}/api/verify/me`, {
        method: "GET",
        headers: {
          Cookie: `auth_token=${token}`,
        },
      });
      if (verifyRes.ok) {
        return NextResponse.next();
      } else {
        const res = NextResponse.redirect(new URL("/", request.url));

        res.cookies.set("auth_token", "", {
          maxAge: 0,
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "lax",
        });

        return res;
      }
    } catch (err) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/setting"],
};
