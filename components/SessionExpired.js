"use client";

import { motion } from "framer-motion";
import {
  ExclamationTriangleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function SessionExpired() {
  return (
    <main className="h-screen w-full bg-gradient-to-br from-black via-zinc-950 to-zinc-900 flex items-center justify-center px-4 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md px-8 py-10 rounded-2xl backdrop-blur-md bg-zinc-900/80 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)] text-center space-y-5"
      >
        {/* Icon */}
        <div className="flex justify-center">
          <ExclamationTriangleIcon className="h-12 w-12 text-purple-400 drop-shadow-lg" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-purple-300 tracking-wide">
          Session Expired
        </h1>

        {/* Message */}
        <p className="text-sm text-zinc-300 leading-relaxed">
          Your secure session has timed out. For your protection, you’ll be
          redirected to the sign-in page.
        </p>

        {/* Spinner */}
        <div className="flex justify-center items-center gap-2">
          <ArrowPathIcon className="w-5 h-5 animate-spin text-purple-300" />
          <span className="text-xs font-mono text-purple-200 tracking-wide">
            Redirecting in 5 seconds...
          </span>
        </div>

        {/* Fallback Link */}
        <p className="text-xs text-zinc-500 mt-3">
          Not redirected?{" "}
          <a
            href="/sign-in"
            className="text-purple-400 hover:underline transition"
          >
            Click here to sign in
          </a>
          .
        </p>
      </motion.div>
    </main>
  );
}
