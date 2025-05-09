// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import InputField from "@/components/InputField"; // Make sure this is your reusable styled input

// export default function AddRecordModal({ onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     url: "",
//     notes: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic client-side validation
//     const validationErrors = {};
//     if (!form.name) validationErrors.name = "Name is required";
//     if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
//       validationErrors.email = "Valid email is required";
//     if (!form.password || form.password.length < 8)
//       validationErrors.password = "Password must be at least 8 characters";
//     if (!form.url || !/^https?:\/\//.test(form.url))
//       validationErrors.url = "Must be a valid URL starting with http or https";

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Submit securely (e.g., POST to protected API route)
//     console.log("Form Submitted:", form);

//     // Reset and close modal
//     setForm({ name: "", email: "", password: "", url: "", notes: "" });
//     onClose();
//   };

//   return (
//     <motion.div
//       className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl text-white"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-purple-400">
//             Add New Record
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-red-400 transition"
//             aria-label="Close"
//           >
//             ✖
//           </button>
//         </div>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <InputField
//             label="Record Name"
//             name="name"
//             type="text"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="e.g., GitHub"
//             error={errors.name}
//           />
//           <InputField
//             label="Email"
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//             error={errors.email}
//           />
//           <InputField
//             label="Password"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Strong password"
//             error={errors.password}
//           />
//           <InputField
//             label="Website URL"
//             name="url"
//             type="url"
//             value={form.url}
//             onChange={handleChange}
//             placeholder="https://example.com"
//             error={errors.url}
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
//               placeholder="Additional context (optional)"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200"
//           >
//             Save Record
//           </button>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "@/components/InputField";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AddRecordModal({ onClose, onCreate }) {
  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    url: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  // input change
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((errs) => ({ ...errs, [e.target.name]: "" }));
  };

  // simple client-side validation
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Valid email is required";
    if (form.password.length < 8) errs.password = "Minimum 8 characters";
    if (!/^https?:\/\//.test(form.url))
      errs.url = "Must start with http:// or https://";
    return errs;
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      // call your API
      await onCreate(form);
      setStatus("success");
      setMessage("✅ Record created!");
      // auto-close after a short delay
      setTimeout(onClose, 1500);
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "❌ Failed to create");
      // revert to idle so they can retry
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
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
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
          aria-label="Close"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-semibold text-purple-400 mb-6">
          Add New Record
        </h2>

        {/* status / error banner */}
        <AnimatePresence>
          {status !== "idle" && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className={`
                mb-4 p-3 rounded-md text-center text-sm font-medium
                ${
                  status === "submitting" ? "bg-yellow-800 text-yellow-200" : ""
                }
                ${status === "success" ? "bg-green-800 text-green-200" : ""}
                ${status === "error" ? "bg-red-800 text-red-200" : ""}
              `}
            >
              {
                {
                  submitting: "⚙️ Saving…",
                  success: message,
                  error: message,
                }[status]
              }
            </motion.div>
          )}
        </AnimatePresence>

        {/* form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Record Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. GitHub"
            error={errors.name}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            error={errors.email}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Strong password"
            error={errors.password}
          />
          <InputField
            label="Website URL"
            name="url"
            type="url"
            value={form.url}
            onChange={handleChange}
            placeholder="https://example.com"
            error={errors.url}
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
              onChange={handleChange}
              rows={3}
              className="px-4 py-2 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
              placeholder="Additional context (optional)"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50"
          >
            Create Record
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
