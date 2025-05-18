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

//-----------------------------Vishwa's Code commented for sometime------------------------

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

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { updateRecord, deleteRecord } from "@/models/RecordModel";

export default function RecordModal({ data, onClose, onUpdate }) {
  const [record, setRecord] = useState(data);
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | saving | error

  const handleChange = (key, value) => {
    setRecord((r) => ({ ...r, [key]: value }));
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this record?")) return;

    setStatus("saving");
    try {
      await deleteRecord(record.id);
      onUpdate({ ...record, _delete: true }); // Triggers removal in page.js
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete record.");
      setStatus("idle");
    }
  };

  const handleSave = async () => {
    setStatus("saving");
    try {
      const updated = await updateRecord(record);
      onUpdate(updated);
      setEditMode(false);
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update record.");
    }
    setStatus("idle");
  };

  const fields = [
    { label: "Name", key: "name", type: "text" },
    { label: "Email", key: "email", type: "email" },
    {
      label: "Password",
      key: "password",
      type: showPassword ? "text" : "password",
    },
    { label: "URL", key: "url", type: "url" },
  ];

  return (
    <motion.div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-xl w-full text-white relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-purple-400 truncate">
          {record.name}
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {fields.map(({ label, key, type }) => (
            <div key={key} className="relative">
              <label className="block text-sm text-purple-300 mb-1 tracking-wide">
                {label}
              </label>
              <input
                id={key}
                type={type}
                value={record[key]}
                readOnly={!editMode}
                onChange={(e) => handleChange(key, e.target.value)}
                className={`w-full pr-${key === "password" ? "10" : "4"} pl-4 py-2 rounded-lg bg-gray-700 border
                  ${
                    editMode
                      ? "border-gray-600 focus:ring-2 focus:ring-purple-600"
                      : "border-transparent"
                  }
                  text-white placeholder-gray-400 transition-all focus:outline-none`}
              />
              {key === "password" && (
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute top-1/2 right-3 text-purple-300 hover:text-purple-100 transition"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </button>
              )}
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block text-sm text-purple-300 mb-1 tracking-wide">
              Notes
            </label>
            <textarea
              id="notes"
              value={record.notes}
              readOnly={!editMode}
              onChange={(e) => handleChange("notes", e.target.value)}
              rows={3}
              className={`w-full px-4 py-2 rounded-lg bg-gray-700 border ${
                editMode
                  ? "border-gray-600 focus:ring-2 focus:ring-purple-600"
                  : "border-transparent"
              } text-white placeholder-gray-400 transition-all focus:outline-none`}
            />
          </div>
        </form>

        {/* Actions */}
        <div className="flex justify-end items-center space-x-4 mt-6">
          {editMode ? (
            <>
              <button
                onClick={() => {
                  setEditMode(false);
                  setRecord(data);
                }}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={status === "saving"}
                className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-500 text-white rounded-full transition disabled:opacity-60"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-full transition"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                disabled={status === "saving"}
                className="px-4 py-2 text-sm bg-red-600 hover:bg-red-500 text-white rounded-full transition disabled:opacity-60"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
