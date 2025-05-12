// app/reset-password/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InputField from "@/components/InputField";

export default function Home() {
  const [form, setForm] = useState({ password: "", confirm: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirm } = form;

    if (password.length < 8) {
      setMessage("❌ Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    setStatus("submitting");
    try {
      // await resetPasswordAPI(password);
      setStatus("success");
      setMessage("✅ Password reset. Redirecting to login...");
      setTimeout(() => {
        // router.push("/login");
      }, 1500);
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "❌ Failed to reset password.");
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
            Reset Password
          </button>
        </form>
      </motion.div>
    </main>
  );
}
