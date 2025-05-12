// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const res = NextResponse.json({ success: true, message: "Logged out" });
  res.cookies.set({
    name: "auth_token",
    value: "",
    maxAge: 0,
    path: "/",
  });
  return res;
}
