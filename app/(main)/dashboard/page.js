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
// "use client";

// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import EntryCard from "@/components/EntryCard";
// import RecordModal from "@/components/RecordModal";
// import TopBar from "@/components/TopBar";
// import AddRecordModel from "@/components/AddRecordModel";

// export default function DashboardPage() {
//   const [entries, setEntries] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [addRecord, setAddRecord] = useState(false);

//   useEffect(() => {
//     const data = Array.from({ length: 20 }).map((_, i) => ({
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
//       <TopBar
//         query={searchQuery}
//         setQuery={setSearchQuery}
//         addRecord={setAddRecord}
//       />
//       <main className="flex-1 overflow-auto">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//         >
//           {filtered.map((e) => (
//             <EntryCard key={e.id} data={e} onClick={() => setSelected(e)} />
//           ))}
//         </motion.div>

//         <AnimatePresence>
//           {!!selected && (
//             <RecordModal
//               data={selected}
//               onClose={() => setSelected(null)}
//               onUpdate={(u) => {
//                 setEntries((prev) => prev.map((r) => (r.id === u.id ? u : r)));
//                 setSelected(null);
//               }}
//             />
//           )}
//         </AnimatePresence>
//         <AnimatePresence>
//           {!!addRecord && (
//             <AddRecordModel onClose={() => setAddRecord(false)} />
//           )}
//         </AnimatePresence>
//       </main>
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import EntryCard from "@/components/EntryCard";
// import RecordModal from "@/components/RecordModal";
// import TopBar from "@/components/TopBar";
// import AddRecordModel from "@/components/AddRecordModel";
// import MasterKeyVerify from "@/components/MasterKeyVerify";
// import { useUser } from "../UserContext";
// import SetMasterKeyModel from "@/components/SetMasterKeyModel";

// export default function DashboardPage() {
//   const { user, setMasterKeySet, masterKeySet, key, setKey } = useUser();
//   const [entries, setEntries] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [addRecord, setAddRecord] = useState(false);

//   useEffect(() => {
//     if (key) {
//       // Simulate fetching records
//       const data = Array.from({ length: 20 }).map((_, i) => ({
//         id: i,
//         name: `Record ${i + 1}`,
//         email: `user${i + 1}@example.com`,
//         password: "••••••••",
//         url: "https://example.com",
//         notes: "Secure notes",
//       }));
//       setEntries(data);
//     }
//   }, [key]);

//   const filtered = entries.filter(
//     (e) =>
//       e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       e.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return key ? (
//     <>
//       <TopBar
//         query={searchQuery}
//         setQuery={setSearchQuery}
//         addRecord={setAddRecord}
//       />
//       <main className="flex-1 overflow-auto">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//         >
//           {filtered.map((e) => (
//             <EntryCard key={e.id} data={e} onClick={() => setSelected(e)} />
//           ))}
//         </motion.div>

//         <AnimatePresence>
//           {!!selected && (
//             <RecordModal
//               data={selected}
//               onClose={() => setSelected(null)}
//               onUpdate={(u) => {
//                 setEntries((prev) => prev.map((r) => (r.id === u.id ? u : r)));
//                 setSelected(null);
//               }}
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {!!addRecord && (
//             <AddRecordModel onClose={() => setAddRecord(false)} />
//           )}
//         </AnimatePresence>
//       </main>
//     </>
//   ) : masterKeySet ? (
//     <MasterKeyVerify />
//   ) : (
//     <SetMasterKeyModel setMasterKeySet={setMasterKeySet} setKey={setKey} />
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import EntryCard from "@/components/EntryCard";
// import RecordModal from "@/components/RecordModal";
// import TopBar from "@/components/TopBar";
// import AddRecordModel from "@/components/AddRecordModel";
// import MasterKeyVerify from "@/components/MasterKeyVerify";
// import SetMasterKeyModel from "@/components/SetMasterKeyModel";
// import { useUser } from "../UserContext";
// import { Cog6ToothIcon } from "@heroicons/react/24/outline";

// function Loader() {
//   return (
//     <div className="flex flex-col items-center justify-center py-24 space-y-4 text-purple-400">
//       <Cog6ToothIcon className="animate-spin h-10 w-10" />
//       <p className="text-lg font-semibold">Decrypting your entries...</p>
//     </div>
//   );
// }

// function EmptyState() {
//   return (
//     <div className="flex flex-col items-center justify-center py-24 text-gray-400 space-y-2">
//       <p className="text-xl font-semibold">No entries found</p>
//       <p className="max-w-sm text-center">
//         Start by adding your first secure account entry.
//       </p>
//     </div>
//   );
// }

// function base64UrlDecode(base64url) {
//   const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
//   const pad = base64.length % 4 === 0 ? 0 : 4 - (base64.length % 4);
//   const base64Padded = base64 + "=".repeat(pad);
//   const binary = atob(base64Padded);
//   const len = binary.length;
//   const bytes = new Uint8Array(len);
//   for (let i = 0; i < len; i++) {
//     bytes[i] = binary.charCodeAt(i);
//   }
//   return bytes;
// }

// async function decryptEntry(entry, key) {
//   try {
//     const iv = base64UrlDecode(entry.nonce);
//     const encryptedData = base64UrlDecode(entry.cipherText);
//     const cryptoKey = await window.crypto.subtle.importKey(
//       "raw",
//       key,
//       { name: "AES-GCM" },
//       false,
//       ["decrypt"]
//     );

//     const decryptedBuffer = await window.crypto.subtle.decrypt(
//       {
//         name: "AES-GCM",
//         iv: iv,
//       },
//       cryptoKey,
//       encryptedData
//     );

//     const dec = new TextDecoder();
//     const decryptedText = dec.decode(decryptedBuffer);
//     const decryptedEntry = JSON.parse(decryptedText);

//     return {
//       ...decryptedEntry,
//       id: entry.id,
//       nonce: entry.nonce,
//     };
//   } catch (error) {
//     console.error("Failed to decrypt entry", entry.id, error);
//     return null;
//   }
// }

// export default function DashboardPage() {
//   const {
//     user,
//     entries: encryptedEntries = [],
//     key,
//     masterKeySet,
//     setMasterKeySet,
//     setKey,
//   } = useUser();

//   const [entries, setEntries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selected, setSelected] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [addRecord, setAddRecord] = useState(false);

//   useEffect(() => {
//     if (!key || !encryptedEntries.length) {
//       setEntries([]);
//       setLoading(false);
//       return;
//     }

//     let cancelled = false;

//     async function decryptAll() {
//       setLoading(true);
//       const keyBytes = base64UrlDecode(key);
//       const decryptedPromises = encryptedEntries.map((entry) =>
//         decryptEntry(entry, keyBytes)
//       );

//       const decrypted = await Promise.all(decryptedPromises);

//       if (!cancelled) {
//         const filtered = decrypted.filter(Boolean);
//         setEntries(filtered);
//         setLoading(false);
//       }
//     }

//     decryptAll();

//     return () => {
//       cancelled = true;
//     };
//   }, [key, encryptedEntries]);

//   const filtered = entries.filter(
//     (e) =>
//       e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       e.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (!key) {
//     return masterKeySet ? (
//       <MasterKeyVerify />
//     ) : (
//       <SetMasterKeyModel setMasterKeySet={setMasterKeySet} setKey={setKey} />
//     );
//   }

//   return (
//     <>
//       <TopBar
//         query={searchQuery}
//         setQuery={setSearchQuery}
//         addRecord={setAddRecord}
//       />
//       <main className="flex-1 overflow-auto">
//         {loading ? (
//           <Loader />
//         ) : entries.length === 0 ? (
//           <EmptyState />
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//           >
//             {filtered.map((e) => (
//               <EntryCard key={e.id} data={e} onClick={() => setSelected(e)} />
//             ))}
//           </motion.div>
//         )}

//         <AnimatePresence>
//           {!!selected && (
//             <RecordModal
//               data={selected}
//               onClose={() => setSelected(null)}
//               onUpdate={(updatedRecord) => {
//                 if (updatedRecord._delete) {
//                   setEntries((prev) =>
//                     prev.filter((r) => r.id !== updatedRecord.id)
//                   );
//                 } else {
//                   setEntries((prev) =>
//                     prev.map((r) =>
//                       r.id === updatedRecord.id ? updatedRecord : r
//                     )
//                   );
//                 }
//                 setSelected(null);
//               }}
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {!!addRecord && (
//             <AddRecordModel onClose={() => setAddRecord(false)} />
//           )}
//         </AnimatePresence>
//       </main>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EntryCard from "@/components/EntryCard";
import RecordModal from "@/components/RecordModal";
import TopBar from "@/components/TopBar";
import AddRecordModel from "@/components/AddRecordModel";
import MasterKeyVerify from "@/components/MasterKeyVerify";
import SetMasterKeyModel from "@/components/SetMasterKeyModel";
import { useUser } from "../UserContext";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-4 text-purple-400">
      <Cog6ToothIcon className="animate-spin h-10 w-10" />
      <p className="text-lg font-semibold">Decrypting your entries...</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-gray-400 space-y-2">
      <p className="text-xl font-semibold">No entries found</p>
      <p className="max-w-sm text-center">
        Start by adding your first secure account entry.
      </p>
    </div>
  );
}

function base64UrlDecode(base64url) {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const pad = base64.length % 4 === 0 ? 0 : 4 - (base64.length % 4);
  const base64Padded = base64 + "=".repeat(pad);
  const binary = atob(base64Padded);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function decryptEntry(entry, key) {
  try {
    const iv = base64UrlDecode(entry.nonce);
    const encryptedData = base64UrlDecode(entry.cipherText);
    const cryptoKey = await window.crypto.subtle.importKey(
      "raw",
      key,
      { name: "AES-GCM" },
      false,
      ["decrypt"]
    );

    const decryptedBuffer = await window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      cryptoKey,
      encryptedData
    );

    const dec = new TextDecoder();
    const decryptedText = dec.decode(decryptedBuffer);
    const decryptedEntry = JSON.parse(decryptedText);

    return {
      ...decryptedEntry,
      id: entry.id,
      nonce: entry.nonce,
    };
  } catch (error) {
    console.error("Failed to decrypt entry", entry.id, error);
    return null;
  }
}

export default function DashboardPage() {
  const {
    user,
    entries: encryptedEntries = [],
    key,
    masterKeySet,
    setMasterKeySet,
    setKey,
  } = useUser();

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [addRecord, setAddRecord] = useState(false);

  // useEffect(() => {
  //   let cancelled = false;

  //   async function decryptAll() {
  //     if (!key || !encryptedEntries.length) {
  //       if (!cancelled) {
  //         setEntries([]);
  //         setLoading(false);
  //       }
  //       return;
  //     }

  //     setLoading(true);
  //     const keyBytes = base64UrlDecode(key);
  //     const decryptedPromises = encryptedEntries.map((entry) =>
  //       decryptEntry(entry, keyBytes)
  //     );

  //     const decrypted = await Promise.all(decryptedPromises);

  //     if (!cancelled) {
  //       const filtered = decrypted.filter(Boolean);
  //       setEntries(filtered);
  //       setLoading(false);
  //     }
  //   }

  //   decryptAll();

  //   return () => {
  //     cancelled = true;
  //   };
  // }, [key, encryptedEntries]);

  const encryptedEntriesJSON = JSON.stringify(encryptedEntries);

  useEffect(() => {
    let cancelled = false;

    async function decryptAll() {
      if (!key || !encryptedEntries.length) {
        if (!cancelled) {
          setEntries([]);
          setLoading(false);
        }
        return;
      }

      setLoading(true);
      const keyBytes = base64UrlDecode(key);
      const decryptedPromises = encryptedEntries.map((entry) =>
        decryptEntry(entry, keyBytes)
      );

      const decrypted = await Promise.all(decryptedPromises);

      if (!cancelled) {
        const filtered = decrypted.filter(Boolean);
        setEntries(filtered);
        setLoading(false);
      }
    }

    decryptAll();

    return () => {
      cancelled = true;
    };
  }, [key, encryptedEntriesJSON]);

  const filtered = entries.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!key) {
    return masterKeySet ? (
      <MasterKeyVerify />
    ) : (
      <SetMasterKeyModel setMasterKeySet={setMasterKeySet} setKey={setKey} />
    );
  }

  return (
    <>
      <TopBar
        query={searchQuery}
        setQuery={setSearchQuery}
        addRecord={setAddRecord}
      />
      <main className="flex-1 overflow-auto">
        {loading ? (
          <Loader />
        ) : entries.length === 0 ? (
          <EmptyState />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((e) => (
              <EntryCard key={e.id} data={e} onClick={() => setSelected(e)} />
            ))}
          </motion.div>
        )}

        <AnimatePresence>
          {!!selected && (
            <RecordModal
              data={selected}
              onClose={() => setSelected(null)}
              onUpdate={(updatedRecord) => {
                if (updatedRecord._delete) {
                  setEntries((prev) =>
                    prev.filter((r) => r.id !== updatedRecord.id)
                  );
                } else {
                  setEntries((prev) =>
                    prev.map((r) =>
                      r.id === updatedRecord.id ? updatedRecord : r
                    )
                  );
                }
                setSelected(null);
              }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!!addRecord && (
            <AddRecordModel onClose={() => setAddRecord(false)} />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
