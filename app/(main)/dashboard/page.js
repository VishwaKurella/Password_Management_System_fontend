// "use client";

// import { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import Sidebar from "@/components/SideBar";
// import TopBar from "@/components/TopBar";
// import EntryCard from "@/components/EntryCard";
// import RecordModal from "@/components/RecordModal";

// export default function Home() {
//   const [entries, setEntries] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchedEntries = Array.from({ length: 40 }).map((_, idx) => ({
//       id: idx,
//       name: `Record ${idx + 1}`,
//       email: `user${idx + 1}@example.com`,
//       password: "••••••••",
//       url: "https://example.com",
//       notes: "Secure notes",
//     }));
//     setEntries(fetchedEntries);
//   }, []);

//   const handleUpdate = (updatedRecord) => {
//     setEntries((prev) =>
//       prev.map((entry) =>
//         entry.id === updatedRecord.id ? updatedRecord : entry
//       )
//     );
//     setSelected(null);
//   };

//   const filteredEntries = entries.filter(
//     (entry) =>
//       entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       entry.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex h-screen bg-white text-gray-900 font-sans">
//       <Sidebar />
//       <main className="flex-1 flex flex-col overflow-hidden relative bg-gray-50">
//         <TopBar onSearch={setSearchQuery} />
//         <section className="flex-1 overflow-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredEntries.map((entry) => (
//             <EntryCard
//               key={entry.id}
//               data={entry}
//               onClick={() => setSelected(entry)}
//             />
//           ))}
//         </section>
//         <AnimatePresence>
//           {selected && (
//             <RecordModal
//               data={selected}
//               onClose={() => setSelected(null)}
//               onUpdate={handleUpdate}
//             />
//           )}
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import Sidebar from "@/components/SideBar";
// import TopBar from "@/components/TopBar";
// import EntryCard from "@/components/EntryCard";
// import RecordModal from "@/components/RecordModal";

// export default function Home() {
//   const [entries, setEntries] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     // Mock fetch
//     const fetchedEntries = Array.from({ length: 40 }).map((_, idx) => ({
//       id: idx,
//       name: `Record ${idx + 1}`,
//       email: `user${idx + 1}@example.com`,
//       password: "••••••••",
//       url: "https://example.com",
//       notes: "Secure notes",
//     }));
//     setEntries(fetchedEntries);
//   }, []);

//   const handleUpdate = (updatedRecord) => {
//     setEntries((prev) =>
//       prev.map((e) => (e.id === updatedRecord.id ? updatedRecord : e))
//     );
//     setSelected(null);
//   };

//   const handleSearch = () => {};

//   const filteredEntries = entries.filter(
//     (e) =>
//       e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       e.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-gray-100 font-sans">
//       <Sidebar theme="dark" />

//       <main className="flex-1 flex flex-col overflow-hidden">
//         {/* TopBar now sits on a semi-transparent backdrop */}
//         <div className="bg-gray-900/70 backdrop-blur-md border-b border-gray-800 z-10">
//           <TopBar onSearch={handleSearch} theme="dark" />
//         </div>

//         {/* Entries Grid */}
//         <section className="flex-1 overflow-auto px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredEntries.map((entry) => (
//             <EntryCard
//               key={entry.id}
//               data={entry}
//               onClick={() => setSelected(entry)}
//               theme="dark"
//             />
//           ))}
//         </section>

//         {/* Record Modal */}
//         <AnimatePresence>
//           {selected && (
//             <RecordModal
//               data={selected}
//               onClose={() => setSelected(null)}
//               onUpdate={handleUpdate}
//               theme="dark"
//             />
//           )}
//         </AnimatePresence>
//       </main>
//     </div>
//   );
// }

// app/dashboard/page.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import EntryCard from "@/components/EntryCard";
// import RecordModal from "@/components/RecordModal";

// export default function DashboardPage() {
//   const [entries, setEntries] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const data = Array.from({ length: 40 }).map((_, i) => ({
//       id: i,
//       name: `Record ${i + 1}`,
//       email: `user${i + 1}@example.com`,
//       password: "••••••••",
//       url: "https://example.com",
//       notes: "Secure notes",
//     }));
//     setEntries(data);
//   }, []);

//   const filtered = entries.filter(
//     (e) =>
//       e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       e.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       {/* Pass searchQuery down to TopBar via layout handler */}
//       <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filtered.map((e) => (
//           <EntryCard key={e.id} data={e} onClick={() => setSelected(e)} />
//         ))}
//       </section>

//       <AnimatePresence>
//         {selected && (
//           <RecordModal
//             data={selected}
//             onClose={() => setSelected(null)}
//             onUpdate={(u) => {
//               setEntries((prev) => prev.map((r) => (r.id === u.id ? u : r)));
//               setSelected(null);
//             }}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// app/(main)/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import EntryCard from "@/components/EntryCard";
import RecordModal from "@/components/RecordModal";

export default function DashboardPage() {
  const [entries, setEntries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const data = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      name: `Record ${i + 1}`,
      email: `user${i + 1}@example.com`,
      password: "••••••••",
      url: "https://example.com",
      notes: "Secure notes",
    }));
    setEntries(data);
  }, []);

  const filtered = entries.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((e) => (
          <EntryCard key={e.id} data={e} onClick={() => setSelected(e)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <RecordModal
            data={selected}
            onClose={() => setSelected(null)}
            onUpdate={(u) => {
              setEntries((prev) => prev.map((r) => (r.id === u.id ? u : r)));
              setSelected(null);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
