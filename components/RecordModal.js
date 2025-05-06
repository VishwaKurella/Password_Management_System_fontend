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
import { useState } from "react";
import { motion } from "framer-motion";

export default function RecordModal({ data, onClose, onUpdate }) {
  const [record, setRecord] = useState(data);

  const handleChange = (key, value) => {
    setRecord({ ...record, [key]: value });
  };

  return (
    <motion.div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-lg w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-white truncate">
          {record.name}
        </h2>

        <div className="space-y-4">
          {["name", "email", "password", "url", "notes"].map((field) => (
            <div key={field}>
              <label className="block text-xs text-purple-300 uppercase mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                value={record[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center space-x-4 mt-6">
          <button
            onClick={() => onUpdate(record)}
            className="px-4 py-2 text-sm bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
          >
            Update
          </button>
          <button
            onClick={() => onUpdate({ ...record, _delete: true })}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-full hover:bg-red-500 transition"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
