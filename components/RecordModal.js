// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function RecordModal({ data, onClose, onUpdate }) {
//   const [record, setRecord] = useState(data);

//   const handleChange = (key, value) => {
//     setRecord({ ...record, [key]: value });
//   };

//   const handleSubmit = () => {
//     onUpdate(record);
//   };

//   return (
//     <motion.div
//       className="absolute inset-0 bg-black/30 flex items-center justify-center z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="bg-white rounded-2xl p-8 shadow-xl max-w-lg w-full relative"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//           aria-label="Close"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4 truncate">{record.name}</h2>

//         <div className="space-y-4 text-gray-700">
//           {["name", "email", "password", "url", "notes"].map((field) => (
//             <div key={field}>
//               <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
//                 {field.charAt(0).toUpperCase() + field.slice(1)}
//               </p>
//               <input
//                 type="text"
//                 value={record[field]}
//                 onChange={(e) => handleChange(field, e.target.value)}
//                 className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 text-sm"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-end items-center space-x-4 mt-6">
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 text-sm bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
//           >
//             Update
//           </button>
//           <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-full hover:bg-red-500 transition">
//             Delete
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function RecordModal({ data, onClose, onUpdate }) {
//   const [record, setRecord] = useState(data);

//   const handleChange = (key, value) => {
//     setRecord({ ...record, [key]: value });
//   };

//   return (
//     <motion.div
//       className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-lg w-full relative"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
//           aria-label="Close"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4 text-white truncate">
//           {record.name}
//         </h2>

//         <div className="space-y-4">
//           {["name", "email", "password", "url", "notes"].map((field) => (
//             <div key={field}>
//               <label className="block text-xs text-purple-300 uppercase mb-1">
//                 {field.charAt(0).toUpperCase() + field.slice(1)}
//               </label>
//               <input
//                 type="text"
//                 value={record[field]}
//                 onChange={(e) => handleChange(field, e.target.value)}
//                 className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-end items-center space-x-4 mt-6">
//           <button
//             onClick={() => onUpdate(record)}
//             className="px-4 py-2 text-sm bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//           >
//             Update
//           </button>
//           <button
//             onClick={() => onUpdate({ ...record, _delete: true })}
//             className="px-4 py-2 text-sm bg-red-600 text-white rounded-full hover:bg-red-500 transition"
//           >
//             Delete
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// export default function RecordModal({ data, onClose, onUpdate }) {
//   const [record, setRecord] = useState(data);
//   const [editMode, setEditMode] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (key, value) => {
//     setRecord({ ...record, [key]: value });
//   };
//   const handleDelete = () => {
//     if (confirm("Are you sure you want to delete this record?")) {
//       onUpdate({ ...record, _delete: true });
//     }
//   };

//   const fields = [
//     { label: "Name", key: "name", type: "text" },
//     { label: "Email", key: "email", type: "email" },
//     {
//       label: "Password",
//       key: "password",
//       type: showPassword ? "text" : "password",
//     },
//     { label: "URL", key: "url", type: "url" },
//   ];

//   return (
//     <motion.div
//       className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-xl w-full text-white relative"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
//           aria-label="Close"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-6 text-purple-400 truncate">
//           {record.name}
//         </h2>

//         <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
//           {fields.map(({ label, key, type }) => (
//             <div key={key} className="relative">
//               <label className="block text-sm text-purple-300 mb-1 tracking-wide">
//                 {label}
//               </label>

//               <input
//                 id={key}
//                 type={type}
//                 value={record[key]}
//                 readOnly={!editMode}
//                 onChange={(e) => handleChange(key, e.target.value)}
//                 className={`
//                   w-full pr-${key === "password" ? "10" : "4"} pl-4 py-2
//                   rounded-lg bg-gray-700 border
//                   ${
//                     editMode
//                       ? "border-gray-600 focus:ring-2 focus:ring-purple-600"
//                       : "border-transparent"
//                   }
//                   text-white placeholder-gray-400 transition-all
//                   focus:outline-none
//                 `}
//               />

//               {key === "password" && (
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((p) => !p)}
//                   className="absolute top-1/2 right-3 text-purple-300 hover:text-purple-100 transition"
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                 >
//                   {showPassword ? (
//                     <EyeSlashIcon className="h-6 w-6" />
//                   ) : (
//                     <EyeIcon className="h-6 w-6" />
//                   )}
//                 </button>
//               )}
//             </div>
//           ))}

//           <div className="md:col-span-2">
//             <label className="block text-sm text-purple-300 mb-1 tracking-wide">
//               Notes
//             </label>
//             <textarea
//               id="notes"
//               value={record.notes}
//               readOnly={!editMode}
//               onChange={(e) => handleChange("notes", e.target.value)}
//               rows={3}
//               className={`
//                 w-full px-4 py-2 rounded-lg bg-gray-700 border
//                 ${
//                   editMode
//                     ? "border-gray-600 focus:ring-2 focus:ring-purple-600"
//                     : "border-transparent"
//                 }
//                 text-white placeholder-gray-400 transition-all
//                 focus:outline-none
//               `}
//             />
//           </div>
//         </form>

//         {/* Actions */}
//         <div className="flex justify-end items-center space-x-4 mt-6">
//           {editMode ? (
//             <>
//               <button
//                 onClick={() => {
//                   setEditMode(false);
//                   setRecord(data);
//                 }}
//                 className="px-4 py-2 text-sm text-gray-400 hover:text-white transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => {
//                   onUpdate(record);
//                   setEditMode(false);
//                 }}
//                 className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-500 text-white rounded-full transition"
//               >
//                 Save
//               </button>
//             </>
//           ) : (
//             <>
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-full transition"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 text-sm bg-red-600 hover:bg-red-500 text-white rounded-full transition"
//               >
//                 Delete
//               </button>
//             </>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   XMarkIcon,
//   Cog6ToothIcon,
//   CheckCircleIcon,
//   ExclamationTriangleIcon,
//   TrashIcon,
//   EyeSlashIcon,
//   EyeIcon,
// } from "@heroicons/react/24/outline";
// import { useUser } from "@/app/(main)/UserContext";

// const toBase64Url = (buffer) => {
//   const b64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
//   return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
// };
// const fromBase64Url = (str) => {
//   const pad = str.length % 4 === 0 ? 0 : 4 - (str.length % 4);
//   const b64 = str.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(pad);
//   const bin = atob(b64);
//   const arr = new Uint8Array(bin.length);
//   for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
//   return arr;
// };

// export default function RecordModal({ record, onClose, onUpdate, onDelete }) {
//   console.log(record);
//   const { key, setKey, setMasterKeySet, secureFetch } = useUser();
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState(record);
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//     if (status !== "idle") {
//       setStatus("idle");
//       setMessage("");
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     if (!key) {
//       setMasterKeySet(false);
//       return;
//     }

//     setStatus("submitting");
//     setMessage("");

//     try {
//       const rawKey = fromBase64Url(key);
//       const cryptoKey = await window.crypto.subtle.importKey(
//         "raw",
//         rawKey,
//         { name: "AES-GCM" },
//         false,
//         ["encrypt"]
//       );

//       const encoder = new TextEncoder();
//       const dataBuffer = encoder.encode(JSON.stringify(form));
//       const iv = window.crypto.getRandomValues(new Uint8Array(12));
//       const cipherBuffer = await window.crypto.subtle.encrypt(
//         { name: "AES-GCM", iv },
//         cryptoKey,
//         dataBuffer
//       );

//       const dataB64 = toBase64Url(cipherBuffer);
//       const ivB64 = toBase64Url(iv);

//       const { json } = await secureFetch(
//         "http://localhost:8080/api/request/update_entries",
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ id: record.id, data: dataB64, nonce: ivB64 }),
//         }
//       );

//       if (!json.success) {
//         if (json.is_expired) {
//           setStatus("error");
//           setMessage(json.message || "Session expired");
//           setTimeout(() => {
//             setIsSessionExpired(true);
//             setKey(null);
//           }, 1000);
//           return;
//         }
//         throw new Error(json.message || "Invalid master key");
//       }

//       setStatus("success");
//       setMessage("Record updated!");
//       onUpdate(form);
//       setTimeout(onClose, 1000);
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setMessage(err.message || "Update failed");
//     }
//   };

//   const handleDelete = async () => {
//     if (!confirm("Are you sure you want to delete this record?")) return;
//     setStatus("submitting");
//     setMessage("");

//     try {
//       const { json } = await secureFetch(
//         "http://localhost:8080/api/request/delete_entries",
//         {
//           method: "DELETE",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ id: record.id }),
//         }
//       );

//       if (!json.success) {
//         if (json.is_expired) {
//           setStatus("error");
//           setMessage(json.message || "Session expired");
//           setTimeout(() => {
//             setIsSessionExpired(true);
//             setKey(null);
//           }, 1000);
//           return;
//         }
//         throw new Error(json.message || "Invalid master key");
//       }
//       setStatus("success");
//       setMessage("Record deleted");
//       onDelete(record.id);
//       setTimeout(onClose, 1000);
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setMessage(err.message || "Delete failed");
//     }
//   };

//   const StatusBanner = () => {
//     const icons = {
//       submitting: (
//         <Cog6ToothIcon className="h-5 w-5 animate-spin inline-block mr-2" />
//       ),
//       success: (
//         <CheckCircleIcon className="h-5 w-5 text-green-400 inline-block mr-2" />
//       ),
//       error: (
//         <ExclamationTriangleIcon className="h-5 w-5 text-red-400 inline-block mr-2" />
//       ),
//     };
//     const colors = {
//       submitting: "bg-yellow-800 text-yellow-200",
//       success: "bg-green-800 text-green-200",
//       error: "bg-red-800 text-red-200",
//     };
//     return (
//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -20, opacity: 0 }}
//         className={`mb-4 p-3 rounded-md text-center text-sm font-medium ${colors[status]}`}
//       >
//         {icons[status]}
//         {status === "submitting" ? "Processing…" : message}
//       </motion.div>
//     );
//   };

//   return (
//     <motion.div
//       className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl text-white relative"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
//           aria-label="Close"
//           type="button"
//         >
//           <XMarkIcon className="h-6 w-6" />
//         </button>
//         <h2 className="text-2xl font-semibold text-purple-400 mb-6">
//           Edit Record
//         </h2>
//         <AnimatePresence>
//           {status !== "idle" && <StatusBanner />}
//         </AnimatePresence>

//         <form className="space-y-4" onSubmit={handleUpdate}>
//           <InputField
//             label="Record Name"
//             name="name"
//             type="text"
//             value={form.name}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Email"
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//           />
//           {/* <InputField
//             label="Password"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//           /> */}
//           <div className="relative">
//             <InputField
//               label="Password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               value={form.password}
//               onChange={handleChange}
//               // add right padding so text never underneath the icon
//               className="pr-10"
//             />
//             <button
//               type="button"
//               aria-label={showPassword ? "Hide password" : "Show password"}
//               onClick={() => setShowPassword((v) => !v)}
//               tabIndex={-1}
//               className="absolute right-3 top-1/2 transform text-gray-400 hover:text-purple-400 transition"
//             >
//               {showPassword ? (
//                 <EyeSlashIcon className="h-6 w-6" />
//               ) : (
//                 <EyeIcon className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           <InputField
//             label="Website URL"
//             name="url"
//             type="url"
//             value={form.url}
//             onChange={handleChange}
//           />
//           <div className="flex flex-col">
//             <label
//               htmlFor="notes"
//               className="mb-1 text-sm text-purple-300 tracking-wider"
//             >
//               Notes
//             </label>
//             <textarea
//               id="notes"
//               name="notes"
//               value={form.notes}
//               onChange={handleChange}
//               rows={3}
//               className="px-4 py-2 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
//               placeholder="Additional context"
//             />
//           </div>
//           <div className="flex justify-between items-center gap-4 pt-2">
//             <button
//               type="button"
//               onClick={handleDelete}
//               className="flex items-center text-sm text-red-400 hover:text-red-600 transition"
//             >
//               <TrashIcon className="h-5 w-5 mr-1" /> Delete
//             </button>
//             <button
//               type="submit"
//               disabled={status === "submitting"}
//               className="py-2 px-4 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50"
//             >
//               {status === "submitting" ? "Saving…" : "Update Record"}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   XMarkIcon,
//   Cog6ToothIcon,
//   CheckCircleIcon,
//   ExclamationTriangleIcon,
//   TrashIcon,
//   EyeSlashIcon,
//   EyeIcon,
// } from "@heroicons/react/24/outline";
// import { useUser } from "@/app/(main)/UserContext";

// // base64url helpers
// const toBase64Url = (buffer) => {
//   const b64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
//   return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
// };
// const fromBase64Url = (str) => {
//   const pad = str.length % 4 === 0 ? 0 : 4 - (str.length % 4);
//   const b64 = str.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(pad);
//   const bin = atob(b64);
//   const arr = new Uint8Array(bin.length);
//   for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
//   return arr;
// };

// export default function RecordModal({ record, onClose, onUpdate, onDelete }) {
//   const { key, setKey, setMasterKeySet, secureFetch } = useUser();

//   const [form, setForm] = useState(record);
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // NEW: state to control our custom delete‑confirm overlay
//   const [deleting, setDeleting] = useState(false);

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//     if (status !== "idle") {
//       setStatus("idle");
//       setMessage("");
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     if (!key) {
//       setMasterKeySet(false);
//       return;
//     }

//     setStatus("submitting");
//     setMessage("");

//     try {
//       const rawKey = fromBase64Url(key);
//       const cryptoKey = await window.crypto.subtle.importKey(
//         "raw",
//         rawKey,
//         { name: "AES-GCM" },
//         false,
//         ["encrypt"]
//       );

//       const encoder = new TextEncoder();
//       const dataBuffer = encoder.encode(JSON.stringify(form));
//       const iv = window.crypto.getRandomValues(new Uint8Array(12));
//       const cipherBuffer = await window.crypto.subtle.encrypt(
//         { name: "AES-GCM", iv },
//         cryptoKey,
//         dataBuffer
//       );

//       const dataB64 = toBase64Url(cipherBuffer);
//       const ivB64 = toBase64Url(iv);

//       const { json } = await secureFetch(
//         "http://localhost:8080/api/request/update_entries",
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ id: record.id, data: dataB64, nonce: ivB64 }),
//         }
//       );

//       if (!json.success) {
//         if (json.is_expired) {
//           setStatus("error");
//           setMessage(json.message || "Session expired");
//           setTimeout(() => {
//             setMasterKeySet(false);
//             setKey(null);
//           }, 1000);
//           return;
//         }
//         throw new Error(json.message || "Invalid master key");
//       }

//       setStatus("success");
//       setMessage("Record updated!");
//       onUpdate(form);
//       setTimeout(onClose, 1000);
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setMessage(err.message || "Update failed");
//     }
//   };

//   // NEW: kick off the custom delete confirmation
//   const confirmDelete = () => setDeleting(true);
//   const cancelDelete = () => setDeleting(false);

//   // NEW: perform the actual delete
//   const doDelete = async () => {
//     setStatus("submitting");
//     setMessage("");

//     try {
//       const { json } = await secureFetch(
//         "http://localhost:8080/api/request/delete_entries",
//         {
//           method: "DELETE",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ id: record.id }),
//         }
//       );

//       if (!json.success) {
//         if (json.is_expired) {
//           setStatus("error");
//           setMessage(json.message || "Session expired");
//           setTimeout(() => {
//             setMasterKeySet(false);
//             setKey(null);
//           }, 1000);
//           return;
//         }
//         throw new Error(json.message || "Delete failed");
//       }

//       setStatus("success");
//       setMessage("Record deleted");
//       onDelete(record.id);
//       setTimeout(onClose, 1000);
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//       setMessage(err.message || "Delete failed");
//       setDeleting(false);
//     }
//   };

//   const StatusBanner = () => {
//     const icons = {
//       submitting: (
//         <Cog6ToothIcon className="h-5 w-5 animate-spin inline-block mr-2" />
//       ),
//       success: (
//         <CheckCircleIcon className="h-5 w-5 text-green-400 inline-block mr-2" />
//       ),
//       error: (
//         <ExclamationTriangleIcon className="h-5 w-5 text-red-400 inline-block mr-2" />
//       ),
//     };
//     const colors = {
//       submitting: "bg-yellow-800 text-yellow-200",
//       success: "bg-green-800 text-green-200",
//       error: "bg-red-800 text-red-200",
//     };
//     return (
//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -20, opacity: 0 }}
//         className={`mb-4 p-3 rounded-md text-center text-sm font-medium ${colors[status]}`}
//       >
//         {icons[status]}
//         {status === "submitting" ? "Processing…" : message}
//       </motion.div>
//     );
//   };

//   return (
//     <AnimatePresence>
//       {/* Backdrop + main modal */}
//       <motion.div
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <motion.div
//           className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl text-white relative"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//         >
//           {/* Close */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
//             aria-label="Close"
//             type="button"
//           >
//             <XMarkIcon className="h-6 w-6" />
//           </button>

//           <h2 className="text-2xl font-semibold text-purple-400 mb-6">
//             Edit Record
//           </h2>
//           <AnimatePresence>
//             {status !== "idle" && <StatusBanner />}
//           </AnimatePresence>

//           <form className="space-y-4" onSubmit={handleUpdate}>
//             <InputField
//               label="Record Name"
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//             />
//             <InputField
//               label="Email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//             />

//             <div className="relative">
//               <InputField
//                 label="Password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={form.password}
//                 onChange={handleChange}
//                 className="pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((v) => !v)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//                 tabIndex={-1}
//               >
//                 {showPassword ? (
//                   <EyeSlashIcon className="h-6 w-6" />
//                 ) : (
//                   <EyeIcon className="h-6 w-6" />
//                 )}
//               </button>
//             </div>

//             <InputField
//               label="Website URL"
//               name="url"
//               type="url"
//               value={form.url}
//               onChange={handleChange}
//             />

//             <div className="flex flex-col">
//               <label
//                 htmlFor="notes"
//                 className="mb-1 text-sm text-purple-300 tracking-wider"
//               >
//                 Notes
//               </label>
//               <textarea
//                 id="notes"
//                 name="notes"
//                 value={form.notes}
//                 onChange={(e) => handleChange(e)}
//                 rows={3}
//                 className="px-4 py-2 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
//                 placeholder="Additional context"
//               />
//             </div>

//             <div className="flex justify-between items-center gap-4 pt-2">
//               {/* NEW: open custom confirm */}
//               <button
//                 type="button"
//                 onClick={confirmDelete}
//                 className="flex items-center text-sm text-red-400 hover:text-red-600 transition"
//               >
//                 <TrashIcon className="h-5 w-5 mr-1" /> Delete
//               </button>
//               <button
//                 type="submit"
//                 disabled={status === "submitting"}
//                 className="py-2 px-4 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50"
//               >
//                 {status === "submitting" ? "Saving…" : "Update Record"}
//               </button>
//             </div>
//           </form>
//         </motion.div>

//         {/* DELETE CONFIRM OVERLAY */}
//         <AnimatePresence>
//           {deleting && (
//             <motion.div
//               className="absolute inset-0 bg-black/50 flex items-center justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 className="bg-gray-800 p-6 rounded-xl text-white max-w-xs text-center"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//               >
//                 <p className="mb-4">
//                   Are you sure you want to delete this record?
//                 </p>
//                 <div className="flex justify-center space-x-4">
//                   <button
//                     onClick={cancelDelete}
//                     className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={doDelete}
//                     className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-full"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "@/components/InputField";
import {
  XMarkIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  TrashIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "@/app/(main)/UserContext";
const BACKEND_BASE = "http://localhost:8080";

// base64url helpers
const toBase64Url = (buffer) => {
  const b64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
const fromBase64Url = (str) => {
  const pad = str.length % 4 === 0 ? 0 : 4 - (str.length % 4);
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(pad);
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr;
};

export default function RecordModal({ record, onClose, onUpdate, onDelete }) {
  const { key, setKey, setMasterKeySet, secureFetch } = useUser();

  const [form, setForm] = useState(record);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // NEW: state to control our custom delete‑confirm overlay
  const [deleting, setDeleting] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!key) {
      setMasterKeySet(false);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const rawKey = fromBase64Url(key);
      const cryptoKey = await window.crypto.subtle.importKey(
        "raw",
        rawKey,
        { name: "AES-GCM" },
        false,
        ["encrypt"]
      );

      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(JSON.stringify(form));
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const cipherBuffer = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        cryptoKey,
        dataBuffer
      );

      const dataB64 = toBase64Url(cipherBuffer);
      const ivB64 = toBase64Url(iv);

      const { json } = await secureFetch(
        `${BACKEND_BASE}/api/request/update_entries`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: record.id, data: dataB64, nonce: ivB64 }),
        }
      );

      if (!json.success) {
        if (json.is_expired) {
          setStatus("error");
          setMessage(json.message || "Session expired");
          setTimeout(() => {
            setMasterKeySet(false);
            setKey(null);
          }, 1000);
          return;
        }
        throw new Error(json.message || "Invalid master key");
      }

      setStatus("success");
      setMessage("Record updated!");
      onUpdate(form);
      setTimeout(onClose, 1000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(err.message || "Update failed");
    }
  };

  // NEW: kick off the custom delete confirmation
  const confirmDelete = () => setDeleting(true);
  const cancelDelete = () => setDeleting(false);

  // NEW: perform the actual delete
  const doDelete = async () => {
    setStatus("submitting");
    setMessage("");

    try {
      const { json } = await secureFetch(
        `${BACKEND_BASE}/api/request/delete_entries`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: record.id }),
        }
      );

      if (!json.success) {
        if (json.is_expired) {
          setStatus("error");
          setMessage(json.message || "Session expired");
          setTimeout(() => {
            setMasterKeySet(false);
            setKey(null);
          }, 1000);
          return;
        }
        throw new Error(json.message || "Delete failed");
      }

      setStatus("success");
      setMessage("Record deleted");
      onDelete(record.id);
      setTimeout(onClose, 1000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(err.message || "Delete failed");
      setDeleting(false);
    }
  };

  const StatusBanner = () => {
    const icons = {
      submitting: (
        <Cog6ToothIcon className="h-5 w-5 animate-spin inline-block mr-2" />
      ),
      success: (
        <CheckCircleIcon className="h-5 w-5 text-green-400 inline-block mr-2" />
      ),
      error: (
        <ExclamationTriangleIcon className="h-5 w-5 text-red-400 inline-block mr-2" />
      ),
    };
    const colors = {
      submitting: "bg-yellow-800 text-yellow-200",
      success: "bg-green-800 text-green-200",
      error: "bg-red-800 text-red-200",
    };
    return (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className={`mb-4 p-3 rounded-md text-center text-sm font-medium ${colors[status]}`}
      >
        {icons[status]}
        {status === "submitting" ? "Processing…" : message}
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {/* Backdrop + main modal */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl text-white relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
            aria-label="Close"
            type="button"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <h2 className="text-2xl font-semibold text-purple-400 mb-6">
            Edit Record
          </h2>
          <AnimatePresence>
            {status !== "idle" && <StatusBanner />}
          </AnimatePresence>

          <form className="space-y-4" onSubmit={handleUpdate}>
            <InputField
              label="Record Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />

            <div className="relative">
              <InputField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-6" />
                ) : (
                  <EyeIcon className="h-6 w-6" />
                )}
              </button>
            </div>

            <InputField
              label="Website URL"
              name="url"
              type="url"
              value={form.url}
              onChange={handleChange}
            />

            <div className="flex flex-col">
              <label
                htmlFor="notes"
                className="mb-1 text-sm text-purple-300 tracking-wider"
              >
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={(e) => handleChange(e)}
                rows={3}
                className="px-4 py-2 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
                placeholder="Additional context"
              />
            </div>

            <div className="flex justify-between items-center gap-4 pt-2">
              {/* NEW: open custom confirm */}
              <button
                type="button"
                onClick={confirmDelete}
                className="flex items-center text-sm text-red-400 hover:text-red-600 transition"
              >
                <TrashIcon className="h-5 w-5 mr-1" /> Delete
              </button>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="py-2 px-4 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50"
              >
                {status === "submitting" ? "Saving…" : "Update Record"}
              </button>
            </div>
          </form>
        </motion.div>

        {/* DELETE CONFIRM OVERLAY */}
        <AnimatePresence>
          {deleting && (
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-800 p-6 rounded-xl text-white max-w-xs text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <p className="mb-4">
                  Are you sure you want to delete this record?
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={cancelDelete}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={doDelete}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-full"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
