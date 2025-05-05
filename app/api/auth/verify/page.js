"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { authenticate } from "@/lib/api/auth_api";

export default function Home() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const result = await authenticate();
        if (result.success) {
          router.push("/");
        } else {
          setErrorMessage(result.message || "Authentication failed.");
          setTimeout(() => {
            router.replace("/sign-in");
          }, 3000);
        }
      } catch (e) {
        console.log(e);
        setErrorMessage("Unexpected error occurred. Redirecting...");
        setTimeout(() => {
          router.back();
        }, 3000);
      }
    };

    handleAuth();
  }, [router]);

  return (
    <main className="relative flex items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Main box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`z-10 px-8 py-6 rounded-2xl backdrop-blur-xl max-w-md w-full space-y-4 text-center border shadow-[0_0_40px_rgba(168,85,247,0.25)] ${
          errorMessage
            ? "bg-red-950/80 border-red-500/30"
            : "bg-zinc-900/80 border-purple-500/20"
        }`}
      >
        <h1
          className={`text-xl font-semibold tracking-wide ${
            errorMessage ? "text-red-400" : "text-purple-400"
          }`}
        >
          {errorMessage
            ? "Authentication Error"
            : "Authenticating Please Wait."}
        </h1>

        <p className="text-sm text-zinc-400">
          {errorMessage
            ? `${errorMessage} Redirecting you back...`
            : "Initializing your secure session. Please hang tight..."}
        </p>

        <div className="flex justify-center items-center space-x-2 mt-6">
          <Image
            src="spin_logo.svg"
            alt="Loading animation"
            width={32}
            height={32}
            className={`${
              errorMessage ? "opacity-20 grayscale" : "animate-spin"
            } transition-all`}
          />
          <span
            className={`font-mono text-sm tracking-wider ${
              errorMessage ? "text-red-300" : "text-purple-300"
            }`}
          >
            {errorMessage ? "Redirecting..." : "Establishing trust..."}
          </span>
        </div>
      </motion.div>
    </main>
  );
}
