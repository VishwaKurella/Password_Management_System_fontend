// app/reset-password/page.jsx
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import InputField from "@/components/InputField";
// import { useRouter } from "next/router";

// export default function Home() {
//   const [form, setForm] = useState({ password: "", confirm: "" });
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//     setMessage("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { password, confirm } = form;

//     if (password.length < 8) {
//       setMessage("❌ Password must be at least 8 characters.");
//       return;
//     }
//     if (password !== confirm) {
//       setMessage("❌ Passwords do not match.");
//       return;
//     }

//     setStatus("submitting");
//     try {
//       const router = useRouter();
//       const res = await fetch("http://localhost:8080/api/auth/reset_password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ _id: otpId, password }),
//       });

//       const data = await res.json();
//       if (!res.ok || !data.success) {
//         throw new Error(data.message || "Reset failed.");
//       }
//       setStatus("success");
//       setMessage("✅ Password reset. Redirecting to login...");
//       setTimeout(() => router.push("/"), 1500);
//     } catch (err) {
//       setStatus("error");
//       setMessage(err.message || "❌ Failed to reset password.");
//       router.push("/");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-gray-900 border border-gray-700 p-8 rounded-2xl w-full max-w-md text-white shadow-xl"
//       >
//         <h1 className="text-2xl font-bold text-purple-400 mb-4">
//           Set New Password
//         </h1>
//         <p className="text-sm text-gray-300 mb-6">
//           Create a strong, unique password to secure your account.
//         </p>

//         {message && (
//           <div
//             className={`mb-4 p-3 rounded-md text-sm text-center ${
//               status === "success"
//                 ? "bg-green-800 text-green-200"
//                 : status === "error"
//                 ? "bg-red-800 text-red-200"
//                 : "bg-yellow-800 text-yellow-200"
//             }`}
//           >
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <InputField
//             label="New Password"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="••••••••"
//           />
//           <InputField
//             label="Confirm Password"
//             name="confirm"
//             type="password"
//             value={form.confirm}
//             onChange={handleChange}
//             placeholder="••••••••"
//           />

//           <button
//             type="submit"
//             disabled={status === "submitting"}
//             className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition disabled:opacity-50"
//           >
//             Reset Password
//           </button>
//         </form>
//       </motion.div>
//     </main>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   ExclamationTriangleIcon,
//   ShieldCheckIcon,
//   ShieldExclamationIcon,
// } from "@heroicons/react/24/outline";

// export default function ResetPasswordPage() {
//   const router = useRouter();
//   const { id } = useParams();

//   useEffect(() => {
//     if (!id) {
//       router.replace("/");
//     }
//   }, [id, router]);

//   const [form, setForm] = useState({ password: "", confirm: "" });
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//     setMessage("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { password, confirm } = form;

//     if (password.length < 8) {
//       setStatus("error");
//       setMessage("Password must be at least 8 characters.");
//       return;
//     }
//     if (password !== confirm) {
//       setStatus("error");
//       setMessage("Passwords do not match.");
//       return;
//     }

//     setStatus("submitting");
//     try {
//       const res = await fetch("http://localhost:8080/api/auth/reset_password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ _id: id, password }),
//       });

//       const data = await res.json();
//       if (!res.ok || !data.success) {
//         throw new Error(data.message || "Reset failed.");
//       }

//       setStatus("success");
//       setMessage("Password reset successfully. Redirecting...");
//       setTimeout(() => router.push("/"), 2000);
//     } catch (err) {
//       setStatus("error");
//       setMessage(err.message || "Failed to reset password.");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-gray-900 border border-gray-700 p-8 rounded-2xl w-full max-w-md text-white shadow-xl"
//       >
//         <h1 className="text-2xl font-bold text-purple-400 mb-4">
//           Set New Password
//         </h1>
//         <p className="text-sm text-gray-300 mb-6">
//           Create a strong, unique password to secure your account.
//         </p>

//         {status !== "idle" && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`flex items-center gap-3 p-3 mb-5 rounded-md text-sm text-center ${
//               status === "success"
//                 ? "bg-green-800 text-green-200"
//                 : status === "error"
//                 ? "bg-red-800 text-red-200"
//                 : "bg-yellow-800 text-yellow-200"
//             }`}
//           >
//             {/* {status === "success" && (
//               <ShieldCheckIcon className="w-5 h-5 text-green-300" />
//             )}
//             {status === "error" && (
//               <ShieldAlertIcon className="w-5 h-5 text-red-300" />
//             )}
//             {status === "submitting" && (
//               <ShieldExclamationIcon className="w-5 h-5 text-yellow-300" />
//             )} */}
//             {status === "success" && (
//               <ShieldCheckIcon className="w-5 h-5 text-green-300" />
//             )}
//             {status === "error" && (
//               <ExclamationTriangleIcon className="w-5 h-5 text-red-300" />
//             )}
//             {status === "submitting" && (
//               <ShieldExclamationIcon className="w-5 h-5 text-yellow-300" /> // also replace if missing
//             )}
//             <span className="flex-1">{message}</span>
//           </motion.div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <InputField
//             label="New Password"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="••••••••"
//           />
//           <InputField
//             label="Confirm Password"
//             name="confirm"
//             type="password"
//             value={form.confirm}
//             onChange={handleChange}
//             placeholder="••••••••"
//           />

//           <button
//             type="submit"
//             disabled={status === "submitting"}
//             className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition disabled:opacity-50"
//           >
//             {status === "submitting" ? "Resetting..." : "Reset Password"}
//           </button>
//         </form>
//       </motion.div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "@/components/InputField";
import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const BACKEND_BASE = process.env.BACKEND_URI;

export default function ResetPasswordPage() {
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      router.replace("/");
    }
  }, [id, router]);

  const [form, setForm] = useState({ password: "", confirm: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setMessage("");
    setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirm } = form;

    if (password.length < 8) {
      setStatus("error");
      setMessage("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setStatus("error");
      setMessage("Passwords do not match.");
      return;
    }

    setStatus("submitting");
    setMessage("Resetting password...");
    try {
      const res = await fetch(`${BACKEND_BASE}/api/auth/reset_password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Reset failed.");
      }

      setStatus("success");
      setMessage("Password reset successfully. Redirecting...");
      setTimeout(() => router.push("/"), 2000);
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Failed to reset password.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 border border-gray-700 p-8 rounded-2xl w-full max-w-md text-white shadow-xl"
      >
        <h1 className="text-2xl font-bold text-purple-400 mb-4">
          Set New Password
        </h1>
        <p className="text-sm text-gray-300 mb-6">
          Create a strong, unique password to secure your account.
        </p>

        <AnimatePresence mode="wait" initial={false}>
          {status !== "idle" && (
            <motion.div
              key={status} // key important for AnimatePresence
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex items-center gap-3 p-3 mb-5 rounded-md text-sm text-center ${
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="New Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          <InputField
            label="Confirm Password"
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="••••••••"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition disabled:opacity-50"
          >
            {status === "submitting" ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </motion.div>
    </main>
  );
}
