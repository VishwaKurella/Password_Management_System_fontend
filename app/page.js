// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Home() {
//   const [selected, setSelected] = useState(null);

//   const entries = Array.from({ length: 40 }).map((_, idx) => ({
//     id: idx,
//     name: `Record ${idx + 1}`,
//     email: `user${idx + 1}@example.com`,
//     password: "••••••••",
//     url: "https://example.com",
//     notes: "Secure notes",
//   }));

//   return (
//     <div className="flex h-screen bg-white text-gray-900 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 hidden md:flex flex-col bg-white shadow-lg p-6 space-y-8">
//         <div className="text-3xl font-bold tracking-wide uppercase">VaultX</div>
//         <nav className="flex flex-col space-y-4 mt-10">
//           <NavItem label="Dashboard" icon="🏠" active />
//           <NavItem label="Add New" icon="✏️" />
//           <NavItem label="Settings" icon="⚙️" />
//         </nav>
//       </aside>

//       {/* Main Area */}
//       <main className="flex-1 flex flex-col overflow-hidden relative bg-gray-50">
//         {/* Top Bar */}
//         <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
//           <h1 className="text-2xl font-semibold">Your Vault</h1>
//           <div className="relative w-1/3">
//             <input
//               type="text"
//               placeholder="Search records..."
//               className="w-full pl-12 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
//             />
//             <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
//               🔍
//             </div>
//           </div>
//         </header>

//         {/* Content: Infinite Scroll Cards */}
//         <section className="flex-1 overflow-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {entries.map((entry) => (
//             <EntryCard
//               key={entry.id}
//               data={entry}
//               onClick={() => setSelected(entry)}
//             />
//           ))}
//         </section>

//         {/* Modal Overlay */}
//         <AnimatePresence>
//           {selected && (
//             <motion.div
//               className="absolute inset-0 bg-black/30 flex items-center justify-center z-50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.95, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-2xl p-8 shadow-xl max-w-lg w-full relative"
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setSelected(null)}
//                   className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//                   aria-label="Close"
//                 >
//                   ✕
//                 </button>

//                 <h2 className="text-2xl font-bold mb-4 truncate">
//                   {selected.name}
//                 </h2>
//                 <div className="space-y-4 text-gray-700">
//                   <InfoRow label="Email" value={selected.email} />
//                   <InfoRow label="Password" value={selected.password} mono />
//                   <InfoRow label="Website" value={selected.url} link />
//                   <InfoRow label="Notes" value={selected.notes} italic />
//                 </div>

//                 {/* Actions */}
//                 <div className="flex justify-end items-center space-x-4 mt-6">
//                   <button className="px-4 py-2 text-sm bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
//                     Update
//                   </button>
//                   <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-full hover:bg-red-500 transition">
//                     Delete
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// }

// function NavItem({ label, icon, active }) {
//   return (
//     <a
//       href="#"
//       className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
//         active
//           ? "bg-gray-900 text-white font-semibold"
//           : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//       }`}
//     >
//       <span className="text-lg">{icon}</span>
//       <span className="text-base font-medium">{label}</span>
//     </a>
//   );
// }

// function EntryCard({ data, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className="cursor-pointer p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
//     >
//       <h3 className="text-lg font-semibold truncate">{data.name}</h3>
//       <p className="text-sm text-gray-500 mt-2 truncate">{data.email}</p>
//     </div>
//   );
// }

// function InfoRow({ label, value, mono, link, italic }) {
//   return (
//     <div>
//       <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
//         {label}
//       </p>
//       {link ? (
//         <a
//           href={value}
//           className="text-blue-600 hover:underline truncate block"
//         >
//           {value}
//         </a>
//       ) : (
//         <p
//           className={`${mono ? "font-mono" : ""} ${
//             italic ? "italic text-gray-500" : ""
//           }`}
//         >
//           {value}
//         </p>
//       )}
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import EntryCard from "@/components/EntryCard";
import RecordModal from "@/components/RecordModal";

export default function Home() {
  const [entries, setEntries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchedEntries = Array.from({ length: 40 }).map((_, idx) => ({
      id: idx,
      name: `Record ${idx + 1}`,
      email: `user${idx + 1}@example.com`,
      password: "••••••••",
      url: "https://example.com",
      notes: "Secure notes",
    }));
    setEntries(fetchedEntries);
  }, []);

  const handleUpdate = (updatedRecord) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === updatedRecord.id ? updatedRecord : entry
      )
    );
    setSelected(null);
  };

  const filteredEntries = entries.filter(
    (entry) =>
      entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-white text-gray-900 font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden relative bg-gray-50">
        <TopBar onSearch={setSearchQuery} />
        <section className="flex-1 overflow-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEntries.map((entry) => (
            <EntryCard
              key={entry.id}
              data={entry}
              onClick={() => setSelected(entry)}
            />
          ))}
        </section>
        <AnimatePresence>
          {selected && (
            <RecordModal
              data={selected}
              onClose={() => setSelected(null)}
              onUpdate={handleUpdate}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
