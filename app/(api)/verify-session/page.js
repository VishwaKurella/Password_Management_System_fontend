// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { authenticate } from "@/lib/api/auth_api";

// export default function Home() {
//   const router = useRouter();
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     const handleAuth = async () => {
//       try {
//         const result = await authenticate();
//         if (result.success) {
//           router.push("/");
//         } else {
//           setErrorMessage(result.message || "Authentication failed.");
//           setTimeout(() => {
//             router.replace("/sign-in");
//           }, 3000);
//         }
//       } catch (e) {
//         console.log(e);
//         setErrorMessage("Unexpected error occurred. Redirecting...");
//         setTimeout(() => {
//           router.back();
//         }, 3000);
//       }
//     };

//     handleAuth();
//   }, [router]);

//   return (
//     <main className="relative flex items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 overflow-hidden">
//       {/* Main box */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className={`z-10 px-8 py-6 rounded-2xl backdrop-blur-xl max-w-md w-full space-y-4 text-center border shadow-[0_0_40px_rgba(168,85,247,0.25)] ${
//           errorMessage
//             ? "bg-red-950/80 border-red-500/30"
//             : "bg-zinc-900/80 border-purple-500/20"
//         }`}
//       >
//         <h1
//           className={`text-xl font-semibold tracking-wide ${
//             errorMessage ? "text-red-400" : "text-purple-400"
//           }`}
//         >
//           {errorMessage
//             ? "Authentication Error"
//             : "Authenticating Please Wait."}
//         </h1>

//         <p className="text-sm text-zinc-400">
//           {errorMessage
//             ? `${errorMessage} Redirecting you back...`
//             : "Initializing your secure session. Please hang tight..."}
//         </p>

//         <div className="flex justify-center items-center space-x-2 mt-6">
//           <Image
//             src="spin_logo.svg"
//             alt="Loading animation"
//             width={32}
//             height={32}
//             className={`${
//               errorMessage ? "opacity-20 grayscale" : "animate-spin"
//             } transition-all`}
//           />
//           <span
//             className={`font-mono text-sm tracking-wider ${
//               errorMessage ? "text-red-300" : "text-purple-300"
//             }`}
//           >
//             {errorMessage ? "Redirecting..." : "Establishing trust..."}
//           </span>
//         </div>
//       </motion.div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/outline";

const BACKEND_BASE = process.env.BACKEND_URI;

export default function AuthCallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("Hello");

  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await fetch("/api/verify-session", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const sessionRes = await res.json();

        if (!res.ok || !sessionRes.success) {
          throw new Error(sessionRes.message || "Unable to verify session.");
        }

        const user_data = sessionRes.user;
        delete user_data.image;
        console.log(user_data);
        if (!user_data) {
          throw new Error("Unable to login user. Please try again.");
        }
        const authRes = await fetch(`${BACKEND_BASE}/api/auth/authenticate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user_data),
          credentials: "include",
          cache: "no-store",
        });
        const result = await authRes.json();

        if (!authRes.ok || !result.success) {
          throw new Error(
            result.message || "Unable to login user. Please try again."
          );
        }
        setStatus("success");
        setMessage("✅ Session verified. Redirecting to your vault...");
        setTimeout(() => router.replace("/dashboard"), 1500);
      } catch (err) {
        setStatus("error");
        setMessage(err.message || "Unexpected error occurred");
        setTimeout(() => router.replace("/sign-in"), 3000);
      }
    };

    verifySession();
  }, [router]);

  const statusStyles = {
    pending: {
      bg: "bg-zinc-900/80 border-purple-500/20",
      text: "text-purple-400",
      icon: "text-purple-400",
    },
    success: {
      bg: "bg-green-900/60 border-green-500/30",
      text: "text-green-300",
      icon: "text-green-300",
    },
    error: {
      bg: "bg-red-900/60 border-red-500/30",
      text: "text-red-300",
      icon: "text-red-300",
    },
  };

  return (
    <main className="relative flex items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Ring background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-60 -left-60 w-[900px] h-[900px] bg-gradient-to-r from-purple-400 to-purple-600 opacity-10 rounded-full border border-purple-700"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`z-10 max-w-md w-full p-8 rounded-2xl backdrop-blur-xl border shadow-[0_0_40px_rgba(168,85,247,0.25)] space-y-4 text-center ${statusStyles[status].bg}`}
      >
        <AnimatePresence>
          <motion.div
            key={status}
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <LockClosedIcon
              className={`w-10 h-10 mx-auto ${statusStyles[status].icon}`}
            />
            <h1
              className={`text-xl font-semibold ${statusStyles[status].text}`}
            >
              {status === "pending"
                ? "Verifying Session…"
                : status === "success"
                ? "Authenticated"
                : "Authentication Error"}
            </h1>
            <p className="text-sm text-zinc-400">{message}</p>

            {status === "pending" && (
              <div className="flex justify-center">
                <div className="w-8 h-8 border-4 border-t-transparent border-purple-400 rounded-full animate-spin" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
