"use client";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  let isSignIn = usePathname().endsWith("sign-in");
  return (
    <main className="flex min-h-screen  w-full">
      <div className="flex-1">{children}</div>
      <div
        className={`${
          isSignIn ? "bg-sign-in" : "bg-sign-up"
        } hidden lg:block flex-1 transition-all duration-500`}
      />
    </main>
  );
}
