// app/settings/layout.tsx
"use client";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { usePathname } from "next/navigation";

export default function SettingsLayout({ children }) {
  const isDashboard = usePathname().endsWith("/dashboard");
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-gray-100">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {isDashboard && <TopBar />}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
