"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { KeyIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { masterKeyVerification } from "@/lib/api/auth_api";
import { useUser } from "@/app/(main)/UserContext";

export default function MasterKeyVerify() {
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser();

  const handleVerify = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await masterKeyVerification(key);
      if (!result.success) {
        setError(result.message || "Invalid key.");
      } else {
        location.reload(); // re-trigger context
      }
    } catch (e) {
      setError("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-zinc-950 flex items-center justify-center text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900/80 border border-purple-500/20 rounded-2xl shadow-lg max-w-md w-full px-8 py-10 backdrop-blur-md"
      >
        <div className="flex justify-center mb-4">
          <KeyIcon className="h-10 w-10 text-purple-400" />
        </div>

        <h2 className="text-xl text-center font-semibold text-purple-300 mb-2">
          Master Key Required
        </h2>
        <p className="text-sm text-center text-gray-400 mb-6">
          For your protection, please enter your master key to unlock your
          vault.
        </p>

        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter master key"
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {error && (
          <p className="text-sm text-red-400 mt-2 text-center">{error}</p>
        )}

        <button
          onClick={handleVerify}
          disabled={loading || key.length === 0}
          className={`mt-6 w-full py-2 rounded-lg text-sm font-semibold transition ${
            loading
              ? "bg-purple-800 cursor-not-allowed opacity-50"
              : "bg-purple-700 hover:bg-purple-600"
          }`}
        >
          {loading ? "Verifying..." : "Unlock Vault"}
        </button>

        <div className="flex justify-center mt-4 text-xs text-gray-500">
          <LockClosedIcon className="w-4 h-4 mr-1" />
          <span>Encrypted end-to-end</span>
        </div>
      </motion.div>
    </main>
  );
}
