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

const BACKEND_BASE = process.env.BACKEND_URL || "http://localhost:8080";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  // Only run on /dashboard and /setting
  if (pathname === "/dashboard" || pathname === "/setting") {
    const token = request.cookies.get("auth_token")?.value;
    if (!token) {
      // no token → redirect to home
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      // validate via Rust backend
      // const verifyRes = await fetch(`${BACKEND_BASE}/api/verify/me`, {
      //   method: "GET",
      //   credentials: "include",
      // });
      const verifyRes = await fetch(`${BACKEND_BASE}/api/verify/me`, {
        method: "GET",
        headers: {
          Cookie: `auth_token=${token}`,
        },
      });
      if (verifyRes.ok) {
        // valid → allow
        return NextResponse.next();
      } else {
        // invalid → clear cookie & redirect
        const res = NextResponse.redirect(new URL("/", request.url));
        // res.cookies.set("auth_token", "", { maxAge: 0, path: "/" });
        res.cookies.set("auth_token", "", {
          maxAge: 0,
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "lax", // or "strict" if you're not using cross-site flows
        });

        return res;
      }
    } catch (err) {
      // on fetch error → redirect
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // all other paths: do nothing
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/setting"],
};
