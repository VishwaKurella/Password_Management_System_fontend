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

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import InputField from "@/components/InputField";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// export default function AddRecordModal({ onClose, onCreate }) {
//   // form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     url: "",
//     notes: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");

//   // input change
//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//     setErrors((errs) => ({ ...errs, [e.target.name]: "" }));
//   };

//   // simple client-side validation
//   const validate = () => {
//     const errs = {};
//     if (!form.name.trim()) errs.name = "Name is required";
//     if (!/^\S+@\S+\.\S+$/.test(form.email))
//       errs.email = "Valid email is required";
//     if (form.password.length < 8) errs.password = "Minimum 8 characters";
//     if (!/^https?:\/\//.test(form.url))
//       errs.url = "Must start with http:// or https://";
//     return errs;
//   };

//   // submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (status === "submitting") return;
//     const v = validate();
//     if (Object.keys(v).length) {
//       setErrors(v);
//       return;
//     }

//     setStatus("submitting");
//     setMessage("");

//     try {
//       // call your API
//       await onCreate(form);
//       setStatus("success");
//       setMessage("✅ Record created!");
//       // auto-close after a short delay
//       setTimeout(onClose, 1500);
//     } catch (err) {
//       setStatus("error");
//       setMessage(err.message || "❌ Failed to create");
//       // revert to idle so they can retry
//       setTimeout(() => setStatus("idle"), 2000);
//     }
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
//         {/* close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
//           aria-label="Close"
//         >
//           <XMarkIcon className="h-6 w-6" />
//         </button>

//         <h2 className="text-2xl font-semibold text-purple-400 mb-6">
//           Add New Record
//         </h2>

//         {/* status / error banner */}
//         <AnimatePresence>
//           {status !== "idle" && (
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               className={`
//                 mb-4 p-3 rounded-md text-center text-sm font-medium
//                 ${
//                   status === "submitting" ? "bg-yellow-800 text-yellow-200" : ""
//                 }
//                 ${status === "success" ? "bg-green-800 text-green-200" : ""}
//                 ${status === "error" ? "bg-red-800 text-red-200" : ""}
//               `}
//             >
//               {
//                 {
//                   submitting: "⚙️ Saving…",
//                   success: message,
//                   error: message,
//                 }[status]
//               }
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* form */}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <InputField
//             label="Record Name"
//             name="name"
//             type="text"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="e.g. GitHub"
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
//             disabled={status === "submitting"}
//             className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50"
//           >
//             Create Record
//           </button>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { useUser } from "../UserContext";

// export default function AddRecordModel({ onClose }) {
//   const { key } = useUser(); // base64url master key
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     url: "",
//     notes: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Helpers for base64url
//   const toBase64Url = (buffer) => {
//     const b64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
//     return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
//   };
//   const fromBase64Url = (str) => {
//     const pad = 4 - (str.length % 4);
//     const b64 =
//       str.replace(/-/g, "+").replace(/_/g, "/") +
//       "=".repeat(pad === 4 ? 0 : pad);
//     const bin = atob(b64);
//     const arr = new Uint8Array(bin.length);
//     for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
//     return arr;
//   };

//   // AES‑GCM encrypt
//   const encrypt = async (plaintext, rawKey) => {
//     const iv = crypto.getRandomValues(new Uint8Array(12));
//     const keyBytes = fromBase64Url(rawKey);
//     const cryptoKey = await crypto.subtle.importKey(
//       "raw",
//       keyBytes,
//       "AES-GCM",
//       false,
//       ["encrypt"]
//     );
//     const encoded = new TextEncoder().encode(plaintext);
//     const cipherBuffer = await crypto.subtle.encrypt(
//       { name: "AES-GCM", iv },
//       cryptoKey,
//       encoded
//     );
//     return {
//       nonce: toBase64Url(iv),
//       cipherText: toBase64Url(cipherBuffer),
//     };
//   };

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     setError("");
//     if (!key) {
//       setError("Master key not set.");
//       setLoading(false);
//       return;
//     }

//     try {
//       // 1. stringify entry (excluding id)
//       const plaintext = JSON.stringify(form);

//       // 2. encrypt
//       const { nonce, cipherText } = await encrypt(plaintext, key);

//       // 3. send to endpoint
//       const res = await fetch("/api/request/create_entries", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ data: cipherText, nonce }),
//       });

//       const result = await res.json();

//       if (!res.ok || !result.success) {
//         throw new Error(result.message || "Failed to create entry");
//       }

//       // 4. on success, close modal (and parent can refetch or append)
//       onClose();
//     } catch (e) {
//       console.error(e);
//       setError(e.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-lg w-full text-white relative"
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
//           type="button"
//         >
//           <XMarkIcon className="h-6 w-6" />
//         </button>

//         <h2 className="text-2xl font-bold mb-6 text-purple-400">
//           Add New Record
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
//           {[
//             { label: "Name", name: "name", type: "text" },
//             { label: "Email", name: "email", type: "email" },
//             { label: "Password", name: "password", type: "password" },
//             { label: "URL", name: "url", type: "url" },
//           ].map(({ label, name, type }) => (
//             <div key={name} className="flex flex-col">
//               <label className="mb-1 text-sm text-purple-300">{label}</label>
//               <input
//                 name={name}
//                 type={type}
//                 value={form[name]}
//                 onChange={handleChange}
//                 placeholder={`Enter ${label.toLowerCase()}`}
//                 className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
//                 autoComplete="off"
//               />
//             </div>
//           ))}

//           <div className="md:col-span-2 flex flex-col">
//             <label className="mb-1 text-sm text-purple-300">Notes</label>
//             <textarea
//               name="notes"
//               rows={3}
//               value={form.notes}
//               onChange={handleChange}
//               placeholder="Any additional notes"
//               className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>
//         </div>

//         {error && (
//           <p className="text-sm text-red-400 mt-4 text-center">{error}</p>
//         )}

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className={`mt-6 w-full py-2 rounded-full text-sm font-semibold transition ${
//             loading
//               ? "bg-purple-800 cursor-not-allowed opacity-50"
//               : "bg-purple-700 hover:bg-purple-600"
//           }`}
//           type="button"
//         >
//           {loading ? "Saving..." : "Save Record"}
//         </button>
//       </motion.div>
//     </motion.div>
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
} from "@heroicons/react/24/outline";
import { useUser } from "@/app/(main)/UserContext";

// helper: base64url encode/decode
const toBase64Url = (buffer) => {
  const b64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
// const fromBase64Url = (str) => {
//   const pad = 4 - (str.length % 4);
//   const b64 = (str + "=".repeat(pad)).replace(/-/g, "+").replace(/_/g, "/");
//   const bin = atob(b64);
//   const arr = new Uint8Array(bin.length);
//   for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
//   return arr;
//   };
// correct base64url → Uint8Array
const fromBase64Url = (str) => {
  // only pad when needed
  const pad = str.length % 4 === 0 ? 0 : 4 - (str.length % 4);
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(pad);
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
};

export default function AddRecordModal({ onClose, onCreate }) {
  const { key, setKey, setMasterKeySet } = useUser();
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

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((errs) => ({ ...errs, [e.target.name]: "" }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

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

      const plaintext = new TextEncoder().encode(JSON.stringify(form));
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const cipherBuffer = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        cryptoKey,
        plaintext
      );

      const dataB64 = toBase64Url(cipherBuffer);
      const ivB64 = toBase64Url(iv);

      const res = await fetch(
        "http://localhost:8080/api/request/create_entries",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ data: dataB64, nonce: ivB64 }),
        }
      );

      const json = await res.json();
      console.log("hello", json);

      if (res.status === 401 || json.is_expired) {
        setStatus("error");
        setMessage(json.message || "Session expired");
        setTimeout(() => {
          setMasterKeySet(false);
          setKey(null);
        }, 1000);
        return;
      }

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Server error");
      }

      const newId = json.id;
      setStatus("success");
      setMessage("Record created!");
      onCreate({
        ...form,
        id: newId,
        cipherText: dataB64,
        nonce: ivB64,
      });
      setTimeout(onClose, 1200);
    } catch (err) {
      console.error("Create entry failed:", err);
      setStatus("error");
      setMessage(err.message || "Failed to create");
      setTimeout(() => setStatus("idle"), 1500);
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
        {status === "submitting" ? "Saving…" : message}
      </motion.div>
    );
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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
          aria-label="Close"
          type="button"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-semibold text-purple-400 mb-6">
          Add New Record
        </h2>

        <AnimatePresence>
          {status !== "idle" && <StatusBanner />}
        </AnimatePresence>

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
