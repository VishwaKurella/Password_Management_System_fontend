// // app/verify/page.jsx
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import InputField from "@/components/InputField";

// export default function OtpVerify() {
//   const [otp, setOtp] = useState("");
//   const [status, setStatus] = useState("idle");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!otp || otp.length !== 6) {
//       setMessage("❌ Enter the 6-digit OTP code.");
//       return;
//     }

//     setStatus("submitting");
//     setMessage("Verifying...");
//     try {
//       // await verifyOtpAPI(otp); // real API call
//       setStatus("success");
//       setMessage("✅ Verified. Redirecting...");
//       setTimeout(() => {
//         // router.push("/reset-password");
//       }, 1500);
//     } catch (err) {
//       setStatus("error");
//       setMessage(err.message || "❌ Invalid code.");
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
//           Verify Your Email
//         </h1>
//         <p className="text-sm text-gray-300 mb-6">
//           Enter the 6-digit OTP code sent to your email to proceed.
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
//             label="OTP Code"
//             name="otp"
//             type="text"
//             maxLength={6}
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="123456"
//           />

//           <button
//             type="submit"
//             disabled={status === "submitting"}
//             className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition disabled:opacity-50"
//           >
//             Verify Code
//           </button>
//         </form>
//       </motion.div>
//     </main>
//   );
// }

// app/verify/page.jsx
"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import InputField from "@/components/InputField";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      setStatus("error");
      setMessage("❌ Enter the 6-digit OTP code.");
      return;
    }

    setStatus("submitting");
    setMessage("Verifying...");
    try {
      const form = { _id: id, secret: otp };
      console.log(form);
      const res = await fetch("http://localhost:8080/api/verify/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        credentials: "include",
        cache: "no-store",
      });

      const data = await res.json();
      console.log(data);

      if (!data.success) {
        throw new Error(data.message || "Invalid OTP");
      }

      setStatus("success");
      setMessage("✅ Verified. Redirecting...");

      const target =
        data.issued_for === "ForEmailVerification"
          ? "/dashboard"
          : data.issued_for === "ForResetPassword"
          ? `/reset-password/${id}`
          : data.issued_for === "ForResetMasterKey"
          ? `/set-masterkey/${id}`
          : "/";

      setTimeout(() => {
        router.replace(target);
      }, 1500);
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "❌ Verification failed.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-zinc-900 flex items-center justify-center p-6 overflow-hidden relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500 to-purple-800 opacity-10 -z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900 border border-zinc-700 p-8 rounded-2xl w-full max-w-md text-white shadow-2xl backdrop-blur-md"
      >
        <h1 className="text-2xl font-bold text-purple-400 mb-4">
          Verify Your OTP
        </h1>
        <p className="text-sm text-zinc-400 mb-6">
          Enter the 6-digit OTP sent to your email to proceed securely.
        </p>

        {message && (
          <div
            className={`mb-4 p-3 rounded-md text-sm text-center ${
              status === "success"
                ? "bg-green-900 text-green-200"
                : status === "error"
                ? "bg-red-900 text-red-200"
                : "bg-yellow-900 text-yellow-200"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="OTP Code"
            name="otp"
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="123456"
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition disabled:opacity-50"
          >
            Verify Code
          </button>
        </form>
      </motion.div>
    </main>
  );
}
