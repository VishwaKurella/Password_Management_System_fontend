// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   KeyIcon,
//   ShieldCheckIcon,
//   ShieldExclamationIcon,
//   ExclamationTriangleIcon,
// } from "@heroicons/react/24/outline";

// // Simple PBKDF2 derivation using Web Crypto
// async function deriveKey(password: string, salt: Uint8Array) {
//   const enc = new TextEncoder();
//   const keyMaterial = await window.crypto.subtle.importKey(
//     "raw",
//     enc.encode(password),
//     { name: "PBKDF2" },
//     false,
//     ["deriveBits"]
//   );
//   const params = {
//     name: "PBKDF2",
//     salt,
//     iterations: 100000,
//     hash: "SHA-256",
//   };
//   const bits = await window.crypto.subtle.deriveBits(params, keyMaterial, 256);
//   return new Uint8Array(bits);
// }

// export default function MasterKeyForm() {
//   const router = useRouter();
//   const [form, setForm] = useState({ master: "", confirm: "" });
//   const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
//   const [message, setMessage] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm(f => ({ ...f, [e.target.name]: e.target.value }));
//     setStatus("idle");
//     setMessage("");
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const { master, confirm } = form;
//     if (master.length < 12) {
//       setStatus("error");
//       setMessage("Master key must be at least 12 characters.");
//       return;
//     }
//     if (master !== confirm) {
//       setStatus("error");
//       setMessage("Master keys do not match.");
//       return;
//     }

//     setStatus("submitting");
//     setMessage("Deriving key and updating…");

//     try {
//       // derive with random salt
//       const salt = window.crypto.getRandomValues(new Uint8Array(16));
//       const derived = await deriveKey(master, salt);
//       // send derived and salt as base64
//       const body = {
//         _id: undefined, // layout provides context
//         master_key: window.btoa(String.fromCharCode(...derived)),
//         salt: window.btoa(String.fromCharCode(...salt)),
//       };
//       const res = await fetch("/api/auth/reset_master_key", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       const data = await res.json();
//       if (!res.ok || !data.success) throw new Error(data.message || "Failed.");

//       setStatus("success");
//       setMessage("Master key set! Redirecting…");
//       setTimeout(() => router.refresh(), 2000);
//     } catch (err: any) {
//       setStatus("error");
//       setMessage(err.message || "Error setting master key.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-full">
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-gray-800/90 backdrop-blur-md border border-gray-700 p-8 rounded-2xl w-full max-w-lg text-white shadow-lg"
//       >
//         <div className="flex items-center justify-center mb-6">
//           <KeyIcon className="h-10 w-10 text-purple-400 mr-2" />
//           <h2 className="text-xl font-bold">Set Your Master Key</h2>
//         </div>
//         <p className="text-sm text-gray-300 mb-4">
//           This Master Key encrypts your vault. <strong>Do not lose it</strong> or you will lose access permanently.
//         </p>

//         <AnimatePresence mode="wait" initial={false}>
//           {status !== "idle" && (
//             <motion.div
//               key={status}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className={`flex items-center gap-3 p-3 mb-4 rounded-md text-sm text-center ${
//                 status === "success"
//                   ? "bg-green-800 text-green-200"
//                   : status === "error"
//                   ? "bg-red-800 text-red-200"
//                   : "bg-yellow-800 text-yellow-200"
//               }`}
//             >
//               {status === "success" && (
//                 <ShieldCheckIcon className="w-5 h-5 text-green-300 flex-shrink-0" />
//               )}
//               {status === "error" && (
//                 <ExclamationTriangleIcon className="w-5 h-5 text-red-300 flex-shrink-0" />
//               )}
//               {status === "submitting" && (
//                 <ShieldExclamationIcon className="w-5 h-5 text-yellow-300 flex-shrink-0" />
//               )}
//               <span className="flex-1">{message}</span>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <div className="space-y-4">
//           <InputField
//             label="Master Key"
//             name="master"
//             type="password"
//             value={form.master}
//             onChange={handleChange}
//             placeholder="••••••••••••"
//           />
//           <InputField
//             label="Confirm Master Key"
//             name="confirm"
//             type="password"
//             value={form.confirm}
//             onChange={handleChange}
//             placeholder="••••••••••••"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={status === "submitting"}
//           className="mt-6 w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition disabled:opacity-50 flex items-center justify-center gap-2"
//         >
//           {status === "submitting" ? (
//             "Setting…"
//           ) : (
//             <>Set Master Key</>
//           )}
//         </button>
//       </motion.form>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   KeyIcon,
//   ShieldCheckIcon,
//   ShieldExclamationIcon,
//   ExclamationTriangleIcon,
// } from "@heroicons/react/24/outline";

// // Lightweight Web Crypto PBKDF2 wrapper
// async function derivePdk(password, salt) {
//   const enc = new TextEncoder();
//   const keyMaterial = await window.crypto.subtle.importKey(
//     "raw",
//     enc.encode(password),
//     { name: "PBKDF2" },
//     false,
//     ["deriveBits"]
//   );
//   const bits = await window.crypto.subtle.deriveBits(
//     {
//       name: "PBKDF2",
//       salt,
//       iterations: 100_000,
//       hash: "SHA-256",
//     },
//     keyMaterial,
//     256
//   );
//   return new Uint8Array(bits);
// }

// export default function SetMasterKeyModel() {
//   const router = useRouter();
//   const [form, setForm] = useState({ master: "", confirm: "" });
//   const [status, setStatus] = useState("idle"); // idle | submitting | success | error
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//     setStatus("idle");
//     setMessage("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { master, confirm } = form;
//     if (master.length < 12) {
//       setStatus("error");
//       setMessage("Master key must be at least 12 characters.");
//       return;
//     }
//     if (master !== confirm) {
//       setStatus("error");
//       setMessage("Master keys do not match.");
//       return;
//     }

//     setStatus("submitting");
//     setMessage("Deriving key and submitting…");

//     try {
//       // Generate a 16-byte random salt
//       const salt = window.crypto.getRandomValues(new Uint8Array(16));
//       // Derive a 256-bit PDK
//       const pdk = await derivePdk(master, salt);
//       // Convert to base64
//       const b64Salt = window.btoa(String.fromCharCode(...salt));
//       const b64Pdk = window.btoa(String.fromCharCode(...pdk));

//       // Send payload to backend
//       const res = await fetch("/api/auth/reset_master_key", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           _id: otpId,
//           master_key: b64Pdk,
//           salt: b64Salt,
//         }),
//       });
//       const data = await res.json();
//       if (!res.ok || !data.success)
//         throw new Error(data.message || "Failed to set master key.");

//       setStatus("success");
//       setMessage("Master key set! Redirecting to dashboard…");
//       setTimeout(() => router.push("/dashboard"), 2000);
//     } catch (err) {
//       setStatus("error");
//       setMessage(err.message || "Error setting master key.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-full">
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-gray-800/90 backdrop-blur-md border border-gray-700 p-8 rounded-2xl w-full max-w-lg text-white shadow-lg"
//       >
//         <div className="flex items-center justify-center mb-6">
//           <KeyIcon className="h-10 w-10 text-purple-400 mr-2" />
//           <h2 className="text-xl font-bold">Set Your Master Key</h2>
//         </div>
//         <p className="text-sm text-gray-300 mb-4">
//           This key encrypts your vault. <strong>Do not lose it</strong>—you
//           cannot recover it.
//         </p>

//         <AnimatePresence mode="wait" initial={false}>
//           {status !== "idle" && (
//             <motion.div
//               key={status}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className={`flex items-center gap-3 p-3 mb-4 rounded-md text-sm text-center ${
//                 status === "success"
//                   ? "bg-green-800 text-green-200"
//                   : status === "error"
//                   ? "bg-red-800 text-red-200"
//                   : "bg-yellow-800 text-yellow-200"
//               }`}
//             >
//               {status === "success" && (
//                 <ShieldCheckIcon className="w-5 h-5 text-green-300 flex-shrink-0" />
//               )}
//               {status === "error" && (
//                 <ExclamationTriangleIcon className="w-5 h-5 text-red-300 flex-shrink-0" />
//               )}
//               {status === "submitting" && (
//                 <ShieldExclamationIcon className="w-5 h-5 text-yellow-300 flex-shrink-0" />
//               )}
//               <span className="flex-1">{message}</span>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <div className="space-y-4">
//           <InputField
//             label="Master Key"
//             name="master"
//             type="password"
//             value={form.master}
//             onChange={handleChange}
//             placeholder="••••••••••••"
//           />
//           <InputField
//             label="Confirm Master Key"
//             name="confirm"
//             type="password"
//             value={form.confirm}
//             onChange={handleChange}
//             placeholder="••••••••••••"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={status === "submitting"}
//           className="mt-6 w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition disabled:opacity-50 flex items-center justify-center gap-2"
//         >
//           {status === "submitting" ? "Updating…" : "Set Master Key"}
//         </button>
//       </motion.form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "@/components/InputField";
import {
  KeyIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

// Lightweight Web Crypto PBKDF2 wrapper
async function derivePdk(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );
  const bits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100_000,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );
  return uint8ToBase64(new Uint8Array(bits));
}

export default function SetMasterKeyModel({ setMasterKeySet, setKey }) {
  const [form, setForm] = useState({ master: "", confirm: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setStatus("idle");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { master, confirm } = form;

    if (master.length < 8) {
      setStatus("error");
      setMessage("Master key must be at least 8 characters.");
      return;
    }
    if (master !== confirm) {
      setStatus("error");
      setMessage("Master keys do not match.");
      return;
    }

    setStatus("submitting");
    setMessage("Deriving key and submitting…");

    try {
      let salt = window.crypto.getRandomValues(new Uint8Array(16));
      let pdk = await derivePdk(master, salt);
      salt = uint8ToBase64(salt);

      const res = await fetch("http://localhost:8080/api/auth/set_master_key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ master_key: pdk, salt: salt }),
        credentials: "include",
        cache: "no-store",
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to set master key.");
      }

      setStatus("success");
      setMessage("Master key set successfully!");
      setMasterKeySet(true);
      setKey(pdk);
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Error setting master key.");
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/90 backdrop-blur-md border border-gray-700 p-8 rounded-2xl w-full max-w-lg text-white shadow-lg"
      >
        <div className="flex items-center justify-center mb-6">
          <KeyIcon className="h-10 w-10 text-purple-400 mr-2" />
          <h2 className="text-xl font-bold">Set Your Master Key</h2>
        </div>
        <p className="text-sm text-gray-300 mb-4">
          This key encrypts your vault. <strong>Do not lose it</strong>—you
          cannot recover it.
        </p>

        <AnimatePresence mode="wait" initial={false}>
          {status !== "idle" && (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex items-center gap-3 p-3 mb-4 rounded-md text-sm text-center ${
                status === "success"
                  ? "bg-green-800 text-green-200"
                  : status === "error"
                  ? "bg-red-800 text-red-200"
                  : "bg-yellow-800 text-yellow-200"
              }`}
            >
              {status === "success" && (
                <ShieldCheckIcon className="w-5 h-5 text-green-300 flex-shrink-0" />
              )}
              {status === "error" && (
                <ExclamationTriangleIcon className="w-5 h-5 text-red-300 flex-shrink-0" />
              )}
              {status === "submitting" && (
                <ShieldExclamationIcon className="w-5 h-5 text-yellow-300 flex-shrink-0" />
              )}
              <span className="flex-1">{message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          <InputField
            label="Master Key"
            name="master"
            type="password"
            value={form.master}
            onChange={handleChange}
            placeholder="••••••••••••"
          />
          <InputField
            label="Confirm Master Key"
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="••••••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-6 w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === "submitting" ? "Updating…" : "Set Master Key"}
        </button>
      </motion.form>
    </div>
  );
}

function uint8ToBase64(uint8Array) {
  return btoa(String.fromCharCode(...uint8Array));
}
