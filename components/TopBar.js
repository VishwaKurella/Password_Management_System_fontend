// export default function TopBar({ onSearch }) {
//   return (
//     <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
//       <h1 className="text-2xl font-semibold">Your Vault</h1>
//       <div className="relative w-1/3">
//         <input
//           type="text"
//           placeholder="Search records..."
//           onChange={(e) => onSearch(e.target.value)}
//           className="w-full pl-12 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
//         />
//         <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
//           🔍
//         </div>
//       </div>
//     </header>
//   );
// }

// import { SearchIcon } from "@heroicons/react/24/outline";

// export default function TopBar({ onSearch }) {
//   return (
//     <header className="flex items-center justify-between px-8 py-4 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
//       <h1 className="text-2xl font-semibold text-white">Your Vault</h1>
//       <div className="relative w-1/3">
//         <input
//           type="text"
//           placeholder="Search records..."
//           onChange={(e) => onSearch(e.target.value)}
//           className="w-full pl-12 pr-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
//         />
//         {/* <SearchIcon className="w-5 h-5 text-purple-300 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" /> */}
//       </div>
//     </header>
//   );
// }

// components/TopBar.tsx
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const [query, setQuery] = useState("");

  // TODO: lift this state up via context or props if you need it in the dashboard page

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 z-20">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold text-white">Your Vault</h1>
        <Link
          href="/dashboard/add"
          className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition"
        >
          <PlusIcon className="h-5 w-5 text-white" />
        </Link>
      </div>

      <div className="relative w-1/3">
        {/* <SearchIcon className="w-5 h-5 text-purple-300 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" /> */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search records..."
          className="w-full pl-12 pr-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />
      </div>
    </header>
  );
}
