// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { KeyIcon, LockClosedIcon } from "@heroicons/react/24/outline";
// import { masterKeyVerification } from "@/lib/api/auth_api";
// import { useUser } from "@/app/(main)/UserContext";

// export default function MasterKeyVerify() {
//   const [masterkey, setMasterKey] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { salt , setKey} = useUser();

//   const handleVerify = async () => {
//     setLoading(true);
//     setError("");
//     try {

//       if (!result.success) {
//         setError(result.message || "Invalid key.");
//       } else {
//         location.reload(); // re-trigger context
//       }
//     } catch (e) {
//       setError("Unexpected error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-zinc-950 flex items-center justify-center text-white px-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-zinc-900/80 border border-purple-500/20 rounded-2xl shadow-lg max-w-md w-full px-8 py-10 backdrop-blur-md"
//       >
//         <div className="flex justify-center mb-4">
//           <KeyIcon className="h-10 w-10 text-purple-400" />
//         </div>

//         <h2 className="text-xl text-center font-semibold text-purple-300 mb-2">
//           Master Key Required
//         </h2>
//         <p className="text-sm text-center text-gray-400 mb-6">
//           For your protection, please enter your master key to unlock your
//           vault.
//         </p>

//         <input
//           type="password"
//           value={key}
//           onChange={(e) => setKey(e.target.value)}
//           placeholder="Enter master key"
//           className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//         {error && (
//           <p className="text-sm text-red-400 mt-2 text-center">{error}</p>
//         )}

//         <button
//           onClick={handleVerify}
//           disabled={loading || key.length === 0}
//           className={`mt-6 w-full py-2 rounded-lg text-sm font-semibold transition ${
//             loading
//               ? "bg-purple-800 cursor-not-allowed opacity-50"
//               : "bg-purple-700 hover:bg-purple-600"
//           }`}
//         >
//           {loading ? "Verifying..." : "Unlock Vault"}
//         </button>

//         <div className="flex justify-center mt-4 text-xs text-gray-500">
//           <LockClosedIcon className="w-4 h-4 mr-1" />
//           <span>Encrypted end-to-end</span>
//         </div>
//       </motion.div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { KeyIcon, LockClosedIcon } from "@heroicons/react/24/outline";
// import { useUser } from "@/app/(main)/UserContext";
// import InputField from "./InputField";

// export default function MasterKeyVerify() {
//   const [keyInput, setKeyInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { salt, setKey, setEntries } = useUser();

//   const deriveKey = async (password, saltBase64) => {
//     const encoder = new TextEncoder();
//     const keyMaterial = await window.crypto.subtle.importKey(
//       "raw",
//       encoder.encode(password),
//       { name: "PBKDF2" },
//       false,
//       ["deriveBits", "deriveKey"]
//     );

//     const salt = Uint8Array.from(atob(saltBase64), (c) => c.charCodeAt(0));
//     const derivedBits = await window.crypto.subtle.deriveBits(
//       {
//         name: "PBKDF2",
//         salt,
//         iterations: 100000,
//         hash: "SHA-256",
//       },
//       keyMaterial,
//       256
//     );

//     const derivedKey = btoa(
//       String.fromCharCode(...new Uint8Array(derivedBits))
//     );
//     return derivedKey;
//   };

//   const handleVerify = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       if (!salt) {
//         setError("Missing salt — unable to verify.");
//         setLoading(false);
//         return;
//       }

//       const derived = await deriveKey(keyInput, salt);
//       const res = await fetch("http://localhost:8080/api/verify/master_key", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({ master_key: derived }),
//       });

//       const result = await res.json();

//       if (!res.ok || !result.success) {
//         setError(result.message || "Invalid master key.");
//       } else {
//         setKey(derived);
//         setEntries(result.data);
//       }
//     } catch (e) {
//       console.error("Verification error:", e);
//       setError("Unexpected error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-zinc-950 flex items-center justify-center text-white px-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-zinc-900/80 border border-purple-500/20 rounded-2xl shadow-lg max-w-md w-full px-8 py-10 backdrop-blur-md"
//       >
//         <div className="flex justify-center mb-4">
//           <KeyIcon className="h-10 w-10 text-purple-400" />
//         </div>

//         <h2 className="text-xl text-center font-semibold text-purple-300 mb-2">
//           Master Key Required
//         </h2>
//         <p className="text-sm text-center text-gray-400 mb-6">
//           For your protection, please enter your master key to unlock your
//           vault.
//         </p>

//         {/* <input
//           type="password"
//           value={keyInput}
//           onChange={(e) => setKeyInput(e.target.value)}
//           placeholder="Enter master key"
//           className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//         {error && (
//           <p className="text-sm text-red-400 mt-2 text-center">{error}</p>
//         )} */}

//         <InputField
//           label="Master Key"
//           name="password"
//           type="password"
//           value={keyInput}
//           onChange={(e) => setKeyInput(e.target.value)}
//           placeholder="Enter master key"
//           error={error}
//         />

//         <button
//           onClick={handleVerify}
//           disabled={loading || keyInput.length === 0}
//           className={`mt-6 w-full py-2 rounded-lg text-sm font-semibold transition ${
//             loading
//               ? "bg-purple-800 cursor-not-allowed opacity-50"
//               : "bg-purple-700 hover:bg-purple-600"
//           }`}
//         >
//           {loading ? "Verifying..." : "Unlock Vault"}
//         </button>

//         <div className="flex justify-center mt-4 text-xs text-gray-500">
//           <LockClosedIcon className="w-4 h-4 mr-1" />
//           <span>Encrypted end-to-end</span>
//         </div>
//       </motion.div>
//     </main>
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
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "@/app/(main)/UserContext";

const BACKEND_BASE = process.env.BACKEND_URI;

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

// derive key via PBKDF2 -> AES-GCM raw key
async function deriveKey(password, saltB64) {
  const encoder = new TextEncoder();
  const pwKey = await window.crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );
  const salt = fromBase64Url(saltB64);
  const derived = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100_000,
      hash: "SHA-256",
    },
    pwKey,
    256
  );
  return new Uint8Array(derived);
}

export default function MasterKeyVerifyModal() {
  const { salt, setKey, setMasterKeySet, setIsSessionExpired, secureFetch } =
    useUser();

  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const rawKeyBytes = await deriveKey(input, salt);
      const keyB64 = toBase64Url(rawKeyBytes.buffer);
      const { json } = await secureFetch(
        `${BACKEND_BASE}/api/verify/master_key`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ master_key: keyB64 }),
        }
      );

      if (!json.success) {
        if (json.is_expired) {
          setStatus("error");
          setMessage(json.message || "Session expired");
          setTimeout(() => setIsSessionExpired(true), 1000);
          return;
        }
        throw new Error(json.message || "Invalid master key");
      }

      setStatus("success");
      setMessage("Master key verified");
      setKey(keyB64);
      setTimeout(() => {
        setMasterKeySet(true);
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(err.message || "Verification failed");
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
        {status === "submitting" ? "Verifying…" : message}
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
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
          aria-label="Close"
          type="button"
        >
          <XMarkIcon className="h-6 w-6" />
        </button> */}

        <h2 className="text-2xl font-semibold text-purple-400 mb-6">
          Verify Master Key
        </h2>
        <AnimatePresence>
          {status !== "idle" && <StatusBanner />}
        </AnimatePresence>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Master Key"
            name="master"
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (status !== "idle") {
                setStatus("idle");
                setMessage("");
              }
            }}
            placeholder="Enter your master key"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50"
          >
            {status === "submitting" ? "Verifying…" : "Unlock Vault"}
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
