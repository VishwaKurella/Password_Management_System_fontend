// // export default function Sidebar() {
// //   const NavItem = ({ label, icon, active, href }) => (
// //     <a
// //       href={href}
// //       className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
// //         active
// {
//   /*           ? "bg-gray-900 text-white font-semibold"*/
// }
// //           : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
// //       }`}
// //     >
// //       <span className="text-lg">{icon}</span>
// //       <span className="text-base font-medium">{label}</span>
// //     </a>
// //   );

// //   return (
// //     <aside className="w-64 hidden md:flex flex-col bg-white shadow-lg p-6 space-y-8">
// //       <div className="text-3xl font-bold tracking-wide uppercase">VaultX</div>
// //       <nav className="flex flex-col space-y-4 mt-10">
// //         <NavItem label="Dashboard" icon="🏠" href={"/"} active />
// //         <NavItem label="Add New" href={"/add-record"} icon="✏️" />
// //         <NavItem label="Settings" href={"/settings"} icon="⚙️" />
// //       </nav>
// //     </aside>
// //   );
// // }

// import Link from "next/link";

// export default function Sidebar() {
//   const NavItem = ({ label, icon, href, active }) => (
//     <Link
//       href={href}
//       className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
//         active
//           ? "bg-purple-700 text-white font-semibold shadow-lg"
//           : "text-purple-300 hover:text-white hover:bg-gray-800"
//       }`}
//     >
//       <span className="text-lg">{icon}</span>
//       <span className="text-base font-medium">{label}</span>
//     </Link>
//   );

//   return (
//     <aside className="w-64 hidden md:flex flex-col bg-gray-900 p-6 space-y-8">
//       <div className="text-3xl font-bold tracking-wide uppercase text-white">
//         VaultX
//       </div>
//       <nav className="flex flex-col space-y-4 mt-8">
//         <NavItem href="/" icon="🏠" label="Dashboard" active />
//         <NavItem href="/add-record" icon="➕" label="Add New" />
//         <NavItem href="/settings" icon="⚙️" label="Settings" />
//       </nav>
//     </aside>
//   );
// }

"use client";
import Link from "next/link";
import {
  HomeIcon,
  Cog6ToothIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const isSettingsActive = usePathname().endsWith("/settings");
  const NavItem = ({ href, icon: Icon, label, active }) => (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
        active
          ? "bg-purple-700 text-white font-semibold shadow-lg"
          : "text-purple-300 hover:text-white hover:bg-gray-800"
      }`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-base font-medium">{label}</span>
    </Link>
  );

  const name = "Vishwa";
  const email = "vishwa.kurella@gmail.com";
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <aside className="w-64 hidden md:flex flex-col bg-gray-900 p-6 space-y-8 justify-between">
      <div>
        <div className="text-3xl font-bold tracking-wide uppercase text-white">
          VaultX
        </div>
        <nav className="flex flex-col space-y-4 mt-8">
          <NavItem
            href="/dashboard"
            icon={HomeIcon}
            label="Dashboard"
            active={!isSettingsActive}
          />
          <NavItem
            href="/settings"
            icon={Cog6ToothIcon}
            label="Settings"
            active={isSettingsActive}
          />
        </nav>
      </div>
      <div className="mb-4 pt-7 border-t border-gray-700">
        <div className="flex items-center space-x-3 ">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-700 text-white font-semibold text-lg">
            {firstLetter || "Guest"}
          </div>
          <div className="flex flex-col items-start space-y-2">
            <span className="text-sm font-medium text-white">
              {name || "User"}{" "}
            </span>
            <span className="text-xs text-gray-400">{email}</span>{" "}
          </div>
        </div>
        <button
          onClick={() => {}}
          className="flex items-center text-lg text-red-400 hover:text-red-200 transition space-x-2 mt-4 justify-center w-full border-purple-300 border rounded-lg p-2 hover:border-purple-200"
        >
          <ArrowRightEndOnRectangleIcon className="w-7 h-7" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
