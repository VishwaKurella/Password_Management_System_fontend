// app/verify/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InputField from "@/components/InputField";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      setMessage("❌ Enter the 6-digit OTP code.");
      return;
    }

    setStatus("submitting");
    setMessage("Verifying...");
    try {
      // await verifyOtpAPI(otp); // real API call
      setStatus("success");
      setMessage("✅ Verified. Redirecting...");
      setTimeout(() => {
        // router.push("/reset-password");
      }, 1500);
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "❌ Invalid code.");
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
          Verify Your Email
        </h1>
        <p className="text-sm text-gray-300 mb-6">
          Enter the 6-digit OTP code sent to your email to proceed.
        </p>

        {message && (
          <div
            className={`mb-4 p-3 rounded-md text-sm text-center ${
              status === "success"
                ? "bg-green-800 text-green-200"
                : status === "error"
                ? "bg-red-800 text-red-200"
                : "bg-yellow-800 text-yellow-200"
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
