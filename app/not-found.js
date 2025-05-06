"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const orbStyles = [
  { top: "60%", left: "15%", className: "from-pink-400 to-red-500" },
  { top: "75%", left: "80%", className: "from-green-400 to-blue-500" },
  { top: "70%", left: "40%", className: "from-yellow-400 to-orange-500" },
];

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-purple-500 to-blue-400 opacity-20 rounded-full z-10"
      />

      {/* Neon Orbs */}
      {orbStyles.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, 50, 0], x: [0, -50, 0] }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute w-48 h-48 bg-gradient-to-tr ${orb.className} opacity-30 blur-2xl rounded-full z-10`}
          style={{ top: orb.top, left: orb.left }}
        />
      ))}

      {/* 404 Message Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-20 max-w-sm p-10 bg-gray-800/90 backdrop-blur-md rounded-2xl border border-gray-700 text-center"
      >
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-lg text-purple-300 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-medium transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
