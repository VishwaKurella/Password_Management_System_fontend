"use client";

import { motion } from "framer-motion";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-zinc-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900/80 border border-purple-500/20 shadow-2xl rounded-2xl px-8 py-10 max-w-sm w-full backdrop-blur-md flex flex-col items-center space-y-5 text-center"
      >
        {/* Optional Logo */}
        <Image
          src="/logo.svg" // Replace with your VaultX logo path
          alt="VaultX Logo"
          width={48}
          height={48}
          className="mb-2"
        />

        {/* Spinner */}
        <ArrowPathIcon className="h-8 w-8 text-purple-400 animate-spin" />

        {/* Message */}
        <h2 className="text-lg font-semibold text-purple-300">
          Just a moment...
        </h2>
        <p className="text-sm text-gray-400">
          We’re securely preparing your workspace.
        </p>
      </motion.div>
    </main>
  );
}
