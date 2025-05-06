// "use client";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// export default function Layout({ children }) {
//   let isSignIn = usePathname().endsWith("sign-in");
//   return (
//     <main className="flex min-h-screen  w-full">
//       <div className="flex-1">{children}</div>
//       {/* <div
//         className={`${
//           isSignIn ? "bg-sign-in" : "bg-sign-up"
//         } hidden lg:block flex-1 transition-all duration-500`}
//       /> */}
//     </main>
//   );
// }

// app/(auth)/layout.tsx
"use client";

import { motion } from "framer-motion";

const orbStyles = [
  { top: "60%", left: "15%", className: "from-pink-400 to-red-500" },
  { top: "75%", left: "80%", className: "from-green-400 to-blue-500" },
  { top: "70%", left: "40%", className: "from-yellow-400 to-orange-500" },
];

export default function AuthLayout({ children }) {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-purple-500 to-blue-400 opacity-20 rounded-full z-10"
      />

      {/* Neon orbs */}
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

      {/* Form slot */}
      <div className="relative z-20 w-full max-w-md p-8 bg-gray-800/70 backdrop-blur-md rounded-2xl border border-gray-700">
        {children}
      </div>
    </div>
  );
}
