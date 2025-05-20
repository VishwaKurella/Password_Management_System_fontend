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
//   return uint8ToBase64(new Uint8Array(bits));
// }

// export default function SetMasterKeyModel({ setMasterKeySet, setKey }) {
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

//     if (master.length < 8) {
//       setStatus("error");
//       setMessage("Master key must be at least 8 characters.");
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
//       let salt = window.crypto.getRandomValues(new Uint8Array(16));
//       let pdk = await derivePdk(master, salt);
//       salt = uint8ToBase64(salt);

//       const res = await fetch("http://localhost:8080/api/auth/set_master_key", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ master_key: pdk, salt: salt }),
//         credentials: "include",
//         cache: "no-store",
//       });
//       const data = await res.json();
//       console.log(data);
//       if (!res.ok || !data.success) {
//         throw new Error(data.message || "Failed to set master key.");
//       }

//       setStatus("success");
//       setMessage("Master key set successfully!");
//       setMasterKeySet(true);
//       setKey(pdk);
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

// function uint8ToBase64(uint8Array) {
//   return btoa(String.fromCharCode(...uint8Array));
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
  LockClosedIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "@/app/(main)/UserContext";

// base64url helpers
const toBase64Url = (buffer) => {
  const b64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

// derive key via PBKDF2 -> raw bits
async function deriveKey(password, saltBytes) {
  const encoder = new TextEncoder();
  const pwKey = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );
  const derived = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: saltBytes,
      iterations: 100_000,
      hash: "SHA-256",
    },
    pwKey,
    256
  );
  return new Uint8Array(derived);
}

export default function SetMasterKeyModal() {
  const { setSalt, setKey, setMasterKeySet, setIsSessionExpired, secureFetch } =
    useUser();
  const [master, setMaster] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (master.length < 12) errs.master = "Minimum 12 characters";
    if (master !== confirm) errs.confirm = "Does not match";
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

    setStatus("submitting");
    setMessage("");

    try {
      // generate salt
      const saltBytes = window.crypto.getRandomValues(new Uint8Array(16));
      const saltB64 = toBase64Url(saltBytes.buffer);

      // derive key
      const rawKeyBytes = await deriveKey(master, saltBytes);
      const keyB64 = toBase64Url(rawKeyBytes.buffer);

      console.log(keyB64);
      const { json } = await secureFetch("/api/auth/set_master_key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ salt: saltB64, master_key: keyB64 }),
      });

      if (!json.success) {
        if (json.is_expired) {
          setStatus("error");
          setMessage(json.message || "Session expired");
          setTimeout(() => setIsSessionExpired(true), 1000);
          return;
        }
        throw new Error(json.message || "Setup failed");
      }

      // success
      setStatus("success");
      setMessage("Master key set");
      // update context
      setSalt(saltB64);
      setKey(keyB64);
      setTimeout(() => {
        setMasterKeySet(true);
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(err.message || "Setup failed");
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
        {status === "submitting" ? "Setting…" : message}
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
        className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl text-white relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
          aria-label="Close"
          type="button"
        >
          <XMarkIcon className="h-6 w-6" />
        </button> */}

        {/* <h2 className="text-2xl font-semibold text-purple-400 mb-6">
          Set Master Key
        </h2> */}
        <div className="flex items-center justify-center mb-6">
          <KeyIcon className="h-10 w-10 text-purple-400 mr-2" />
          <h2 className="text-xl font-bold">Set Your Master Key</h2>
        </div>
        <AnimatePresence>
          {status !== "idle" && <StatusBanner />}
        </AnimatePresence>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <p className="text-sm text-gray-300 mb-4">
            This key encrypts your vault. <strong>Do not lose it</strong>—you
            cannot recover it.
          </p>
          <InputField
            label="Master Key"
            name="master"
            type="password"
            value={master}
            onChange={(e) => {
              setMaster(e.target.value);
              setErrors((errs) => ({ ...errs, master: "" }));
              if (status !== "idle") {
                setStatus("idle");
                setMessage("");
              }
            }}
            placeholder="Pick a strong master key"
            error={errors.master}
          />
          <InputField
            label="Confirm Key"
            name="confirm"
            type="password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
              setErrors((errs) => ({ ...errs, confirm: "" }));
              if (status !== "idle") {
                setStatus("idle");
                setMessage("");
              }
            }}
            placeholder="Re-enter master key"
            error={errors.confirm}
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50"
          >
            {status === "submitting" ? "Setting…" : "Set Key"}
          </button>
          <div className="flex justify-center mt-4 text-xs text-gray-500">
            <LockClosedIcon className="w-4 h-4 mr-1" />
            <span>Encrypted end-to-end</span>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
