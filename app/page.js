// "use client";
// // import Link from "next/link";
// // import Image from "next/image";

// // export default function HomePage() {
// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       {/* Hero Section */}
// //       <header className="flex-1 flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center p-8">
// //         <h1 className="text-5xl font-extrabold mb-4">
// //           VaultX: Secure Your Digital Life
// //         </h1>
// //         <p className="text-lg max-w-2xl mb-8">
// //           VaultX is a cutting-edge password management solution designed to keep
// //           all your credentials safe in one encrypted vault. Experience
// //           next-level security with seamless accessibility.
// //         </p>
// //         <div className="space-x-4">
// //           <Link
// //             href="/sign-up"
// //             className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
// //           >
// //             Get Started
// //           </Link>
// //           <Link
// //             href="/sign-in"
// //             className="px-6 py-3 border border-white text-white font-semibold rounded-full shadow hover:bg-white hover:text-gray-900 transition"
// //           >
// //             Sign In
// //           </Link>
// //         </div>
// //       </header>

// //       {/* Features Section */}
// //       <section className="py-16 bg-white text-gray-900">
// //         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
// //           <FeatureCard
// //             title="Zero-Knowledge Encryption"
// //             description="Only you can decrypt your data. We never see or store your master key."
// //           />
// //           <FeatureCard
// //             title="Cross-Platform"
// //             description="Access VaultX on Web, Desktop, and Mobile with real-time sync."
// //           />
// //           <FeatureCard
// //             title="Auto-Fill Forms"
// //             description="Quickly fill login forms with a single click, saving you time and hassle."
// //           />
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="py-6 bg-gray-900 text-gray-400 text-center">
// //         © {new Date().getFullYear()} VaultX. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }

// // function FeatureCard({ title, description }) {
// //   return (
// //     <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
// //       <h3 className="text-xl font-semibold mb-2">{title}</h3>
// //       <p className="text-gray-600">{description}</p>
// //     </div>
// //   );
// // }

// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // export default function LandingPage() {
// //   return (
// //     <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
// //       {/* Hero Section */}
// //       <motion.header
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         className="flex flex-col items-center justify-center flex-1 px-6 py-16 md:py-32 bg-gradient-to-b from-gray-50 to-white text-center"
// //       >
// //         <motion.h1
// //           initial={{ y: -20 }}
// //           animate={{ y: 0 }}
// //           transition={{ delay: 0.3, duration: 0.6 }}
// //           className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl"
// //         >
// //           VaultX: Your Secure Digital Vault
// //         </motion.h1>
// //         <motion.p
// //           initial={{ y: 20 }}
// //           animate={{ y: 0 }}
// //           transition={{ delay: 0.5, duration: 0.6 }}
// //           className="mt-6 text-lg md:text-xl max-w-2xl text-gray-600"
// //         >
// //           Seamless security meets elegant simplicity. Store passwords, notes,
// //           and sensitive information with industry-leading encryption.
// //         </motion.p>
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.8, duration: 0.6 }}
// //           className="mt-8 flex space-x-4"
// //         >
// //           <Link
// //             href="/sign-up"
// //             className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
// //           >
// //             Get Started
// //           </Link>
// //           <Link
// //             href="/sign-in"
// //             className="px-6 py-3 border border-white text-white font-semibold rounded-full shadow hover:bg-white hover:text-gray-900 transition"
// //           >
// //             Sign In
// //           </Link>
// //         </motion.div>
// //       </motion.header>

// //       {/* Feature Section */}
// //       <section className="py-20 bg-gray-100">
// //         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
// //           {[
// //             {
// //               title: "Zero-Knowledge Encryption",
// //               desc: "Only you hold the keys. Your data is unreadable to us.",
// //             },
// //             {
// //               title: "Cross-Platform Sync",
// //               desc: "Access your vault anywhere, anytime, on any device.",
// //             },
// //             {
// //               title: "Auto-Fill & Strong Passwords",
// //               desc: "Generate and fill passwords securely in one click.",
// //             },
// //           ].map((feat, idx) => (
// //             <motion.div
// //               key={idx}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3 + idx * 0.2 }}
// //               className="text-center"
// //             >
// //               <h3 className="text-2xl font-semibold mb-2">{feat.title}</h3>
// //               <p className="text-gray-600">{feat.desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="py-8 bg-white border-t border-gray-200 text-center text-sm text-gray-500">
// //         © {new Date().getFullYear()} VaultX. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }

// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // export default function LandingPage() {
// //   return (
// //     <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
// //       {/* Hero Section */}
// //       <motion.header
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         className="relative flex flex-col items-center justify-center flex-1 px-6 py-16 md:py-32 overflow-hidden bg-white text-center"
// //       >
// //         {/* Decorative Background */}
// //         <div className="absolute inset-0 pointer-events-none">
// //           <motion.div
// //             animate={{ rotate: 360 }}
// //             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //             className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-300 to-purple-400 opacity-10 rounded-full top-[-200px] left-[-200px]"
// //           />
// //         </div>
// //         <motion.h1
// //           initial={{ y: -30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.3, duration: 0.6 }}
// //           className="relative text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl"
// //         >
// //           VaultX: The Future of Password Security
// //         </motion.h1>
// //         <motion.p
// //           initial={{ y: 30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.5, duration: 0.6 }}
// //           className="relative mt-6 text-lg md:text-xl max-w-2xl text-gray-600"
// //         >
// //           Automated encryption and seamless access, powered by tomorrow’s
// //           technology.
// //         </motion.p>
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.8, duration: 0.6 }}
// //           className="relative mt-8 flex space-x-4"
// //         >
// //           <Link
// //             href="/sign-up"
// //             className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
// //           >
// //             Get Started
// //           </Link>
// //           <Link
// //             href="/sign-in"
// //             className="px-6 py-3 border border-black text-black rounded-full text-sm font-medium hover:bg-gray-100 transition"
// //           >
// //             Sign In
// //           </Link>
// //         </motion.div>
// //       </motion.header>

// //       {/* Features Section */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-6xl mx-auto px-6 text-center">
// //           <motion.h2
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             className="text-3xl font-bold mb-12"
// //           >
// //             Features That Define the Future
// //           </motion.h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// //             {[
// //               {
// //                 icon: "🔒",
// //                 title: "Quantum-Ready Encryption",
// //                 desc: "Secure your data with algorithms designed for tomorrow’s threats.",
// //               },
// //               {
// //                 icon: "☁️",
// //                 title: "Cloud Sync & Recovery",
// //                 desc: "Instant backup and recovery across any device, anywhere in the world.",
// //               },
// //               {
// //                 icon: "🤖",
// //                 title: "AI-Powered Autofill",
// //                 desc: "Smart autofill that learns your habits for lightning-fast logins.",
// //               },
// //             ].map((feat, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.2 }}
// //                 className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
// //               >
// //                 <div className="text-4xl mb-4">{feat.icon}</div>
// //                 <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
// //                 <p className="text-gray-600">{feat.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
// //           <motion.div
// //             initial={{ scale: 0.8, opacity: 0 }}
// //             whileInView={{ scale: 1, opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <h2 className="text-3xl font-bold mb-4">About VaultX</h2>
// //             <p className="text-gray-600 mb-4">
// //               Founded on principles of privacy and innovation, VaultX empowers
// //               users to take control of their digital identities. With
// //               zero-knowledge architecture, your master key never leaves your
// //               device.
// //             </p>
// //             <p className="text-gray-600">
// //               Our mission is to blend military-grade security with a
// //               user-centric interface, delivering a product that’s as intuitive
// //               as it is impenetrable.
// //             </p>
// //           </motion.div>
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="relative w-full h-64 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-3xl shadow-lg"
// //           >
// //             {/* Placeholder for hero imagery */}
// //             <div className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-40">
// //               🔐
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="py-8 bg-gray-100 border-t border-gray-200 text-center text-sm text-gray-500">
// //         © {new Date().getFullYear()} VaultX. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }

// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // export default function LandingPage() {
// //   return (
// //     <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
// //       {/* Hero Section */}
// //       <motion.header
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         className="relative flex flex-col items-center justify-center flex-1 px-6 py-16 md:py-32 overflow-hidden bg-white text-center"
// //       >
// //         {/* Decorative Background Elements */}
// //         <div className="absolute inset-0 pointer-events-none">
// //           {/* Main rotating circle */}
// //           <motion.div
// //             animate={{ rotate: 360 }}
// //             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //             className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-300 to-purple-400 opacity-10 rounded-full top-[-200px] left-[-200px]"
// //           />
// //           {/* Small floating spheres */}
// //           {[...Array(3)].map((_, i) => (
// //             <motion.div
// //               key={i}
// //               animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
// //               transition={{
// //                 duration: 6 + i * 2,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //               className={`absolute w-24 h-24 bg-gradient-to-tr from-pink-300 to-red-300 opacity-20 rounded-full top-${
// //                 i * 20 + 10
// //               } left-${i * 30 + 20}`}
// //             />
// //           ))}
// //         </div>
// //         <motion.h1
// //           initial={{ y: -30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.3, duration: 0.6 }}
// //           className="relative text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl"
// //         >
// //           VaultX: The Future of Password Security
// //         </motion.h1>
// //         <motion.p
// //           initial={{ y: 30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.5, duration: 0.6 }}
// //           className="relative mt-6 text-lg md:text-xl max-w-2xl text-gray-600"
// //         >
// //           Automated encryption and seamless access, powered by tomorrow’s
// //           technology.
// //         </motion.p>
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.8, duration: 0.6 }}
// //           className="relative mt-8 flex space-x-4"
// //         >
// //           <Link
// //             href="/sign-up"
// //             className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
// //           >
// //             Get Started
// //           </Link>
// //           <Link
// //             href="/sign-in"
// //             className="px-6 py-3 border border-black text-black rounded-full text-sm font-medium hover:bg-gray-100 transition"
// //           >
// //             Sign In
// //           </Link>
// //         </motion.div>
// //       </motion.header>

// //       {/* Features Section */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-6xl mx-auto px-6 text-center">
// //           <motion.h2
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             className="text-3xl font-bold mb-12"
// //           >
// //             Core Features
// //           </motion.h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //             {[
// //               {
// //                 icon: "🔒",
// //                 title: "Zero-Knowledge Encryption",
// //                 desc: "Only you hold the keys. Your data is unreadable to us.",
// //               },
// //               {
// //                 icon: "🔄",
// //                 title: "Cross-Platform Sync",
// //                 desc: "Access your vault anywhere, anytime, on any device.",
// //               },
// //             ].map((feat, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.3 }}
// //                 className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
// //               >
// //                 <div className="text-4xl mb-4">{feat.icon}</div>
// //                 <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
// //                 <p className="text-gray-600">{feat.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
// //           <motion.div
// //             initial={{ scale: 0.8, opacity: 0 }}
// //             whileInView={{ scale: 1, opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <h2 className="text-3xl font-bold mb-4">About VaultX</h2>
// //             <p className="text-gray-600 mb-4">
// //               Founded on principles of privacy and innovation, VaultX empowers
// //               users to take control of their digital identities. With
// //               zero-knowledge architecture, your master key never leaves your
// //               device.
// //             </p>
// //             <p className="text-gray-600">
// //               Our mission is to blend military-grade security with a
// //               user-centric interface, delivering a product that’s as intuitive
// //               as it is impenetrable.
// //             </p>
// //           </motion.div>
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="relative w-full h-64 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-3xl shadow-lg"
// //           >
// //             {/* Placeholder for hero imagery */}
// //             <div className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-40">
// //               🔐
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="py-8 bg-gray-100 border-t border-gray-200 text-center text-sm text-gray-500">
// //         © 2025 VaultX. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }

// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   LockClosedIcon,
//   ArrowsRightLeftIcon,
// } from "@heroicons/react/24/outline";

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
//       {/* Hero Section */}
//       <motion.header
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative flex flex-col items-center justify-center flex-1 px-6 py-16 md:py-32 overflow-hidden bg-white text-center"
//       >
//         {/* Decorative Background Elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Rotating circle */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-300 to-purple-400 opacity-10 rounded-full top-[-150px] left-[-150px]"
//           />
//           {/* Floating orbs around screen */}
//           {[
//             { top: "10%", left: "80%" },
//             { top: "70%", left: "20%" },
//             { top: "50%", left: "90%" },
//           ].map((pos, i) => (
//             <motion.div
//               key={i}
//               animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
//               transition={{
//                 duration: 8 + i * 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute w-32 h-32 bg-gradient-to-tr from-pink-300 to-red-300 opacity-20 rounded-full"
//               style={{ top: pos.top, left: pos.left }}
//             />
//           ))}
//         </div>

//         <motion.h1
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="relative text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl"
//         >
//           VaultX: The Future of Password Security
//         </motion.h1>
//         <motion.p
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="relative mt-6 text-lg md:text-xl max-w-2xl text-gray-600"
//         >
//           Automated encryption and seamless access, powered by tomorrow’s
//           technology.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="relative mt-8 flex space-x-4"
//         >
//           <Link
//             href="/sign-up"
//             className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
//           >
//             Get Started
//           </Link>
//           <Link
//             href="/sign-in"
//             className="px-6 py-3 border border-black text-black rounded-full text-sm font-medium hover:bg-gray-100 transition"
//           >
//             Sign In
//           </Link>
//         </motion.div>
//       </motion.header>

//       {/* Features Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold mb-12"
//           >
//             Core Features
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             {[
//               {
//                 icon: (
//                   <LockClosedIcon className="h-10 w-10 mx-auto text-gray-800" />
//                 ),
//                 title: "Zero-Knowledge Encryption",
//                 desc: "Only you hold the keys. Your data is unreadable to us.",
//               },
//               {
//                 icon: (
//                   <ArrowsRightLeftIcon className="h-10 w-10 mx-auto text-gray-800" />
//                 ),
//                 title: "Cross-Platform Sync",
//                 desc: "Access your vault anywhere, anytime, on any device.",
//               },
//             ].map((feat, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.3 }}
//                 className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
//               >
//                 {feat.icon}
//                 <h3 className="text-xl font-semibold mt-4 mb-2">
//                   {feat.title}
//                 </h3>
//                 <p className="text-gray-600">{feat.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-bold mb-4">About VaultX</h2>
//             <p className="text-gray-600 mb-4">
//               Founded on principles of privacy and innovation, VaultX empowers
//               users to take control of their digital identities. With
//               zero-knowledge architecture, your master key never leaves your
//               device.
//             </p>
//             <p className="text-gray-600">
//               Our mission is to blend military-grade security with a
//               user-centric interface, delivering a product that’s as intuitive
//               as it is impenetrable.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative w-full h-64 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-3xl shadow-lg"
//           >
//             {/* Placeholder for hero imagery */}
//             <div className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-40">
//               🔐
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-gray-100 border-t border-gray-200 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} VaultX. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   LockClosedIcon,
//   ArrowsRightLeftIcon,
// } from "@heroicons/react/24/outline";

// export default function LandingPage() {
//   const orbStyles = [
//     {
//       top: "15%",
//       left: "80%",
//       className: "bg-gradient-to-tr from-pink-300 to-red-400",
//     },
//     {
//       top: "75%",
//       left: "25%",
//       className: "bg-gradient-to-tr from-green-300 to-blue-400",
//     },
//     {
//       top: "45%",
//       left: "90%",
//       className: "bg-gradient-to-tr from-yellow-300 to-orange-400",
//     },
//   ];
//   return (
//     <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
//       {/* Hero Section */}
//       <motion.header
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative flex flex-col items-center justify-center flex-1 px-6 py-16 md:py-32 overflow-hidden bg-white text-center"
//       >
//         {/* Decorative Background Elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Rotating gradient ring */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[700px] h-[700px] bg-gradient-to-r from-blue-200 to-purple-500 opacity-10 rounded-full top-[-250px] left-[-250px] border border-gray-100"
//           />
//           {/* Floating neon orbs */}
//           {orbStyles.map((orb, i) => (
//             <motion.div
//               key={i}
//               animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
//               transition={{
//                 duration: 10 + i * 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className={`absolute w-36 h-36 ${orb.className} opacity-20 rounded-full`}
//               style={{ top: orb.top, left: orb.left }}
//             />
//           ))}
//         </div>

//         <motion.h1
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="relative text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl"
//         >
//           VaultX: The Future of Password Security
//         </motion.h1>
//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//           className="relative mt-6 text-lg md:text-xl max-w-2xl text-gray-600"
//         >
//           Automated encryption and seamless access, powered by tomorrow’s
//           technology.
//         </motion.p>
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1.0, duration: 0.6 }}
//           className="relative mt-10 flex space-x-6"
//         >
//           <Link
//             href="/sign-up"
//             className="px-8 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-gray-900 transition"
//           >
//             Get Started
//           </Link>
//           <Link
//             href="/sign-in"
//             className="px-8 py-3 border-2 border-black text-black rounded-full text-base font-medium hover:bg-gray-100 transition"
//           >
//             Sign In
//           </Link>
//         </motion.div>
//       </motion.header>

//       {/* Features Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-4xl font-bold mb-16"
//           >
//             Core Features
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//             {[
//               {
//                 icon: (
//                   <LockClosedIcon className="h-12 w-12 mx-auto text-gray-900" />
//                 ),
//                 title: "Zero-Knowledge Encryption",
//                 desc: "Only you hold the keys. Your data is unreadable to us.",
//               },
//               {
//                 icon: (
//                   <ArrowsRightLeftIcon className="h-12 w-12 mx-auto text-gray-900" />
//                 ),
//                 title: "Cross-Platform Sync",
//                 desc: "Access your vault anywhere, anytime, on any device.",
//               },
//             ].map((feat, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.3, duration: 0.6 }}
//                 className="p-8 bg-white rounded-3xl shadow-md hover:shadow-lg transition"
//               >
//                 {feat.icon}
//                 <h3 className="text-2xl font-semibold mt-6 mb-3">
//                   {feat.title}
//                 </h3>
//                 <p className="text-gray-600 text-base">{feat.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ scale: 0.85, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               About VaultX
//             </h2>
//             <p className="text-gray-600 mb-4">
//               Founded on principles of privacy and innovation, VaultX empowers
//               users to take control of their digital identities. With
//               zero-knowledge architecture, your master key never leaves your
//               device.
//             </p>
//             <p className="text-gray-600">
//               Our mission is to blend military-grade security with a
//               user-centric interface, delivering a product that’s as intuitive
//               as it is impenetrable.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative w-full h-80 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-3xl shadow-xl"
//           >
//             {/* Placeholder for hero imagery */}
//             <div className="absolute inset-0 flex items-center justify-center text-white text-5xl opacity-30">
//               🔐
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-gray-100 border-t border-gray-200 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} VaultX. All rights reserved.
//       </footer>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LockClosedIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  const orbStyles = [
    {
      top: "15%",
      left: "80%",
      className: "bg-gradient-to-tr from-pink-400 to-red-500",
    },
    {
      top: "75%",
      left: "25%",
      className: "bg-gradient-to-tr from-green-400 to-blue-500",
    },
    {
      top: "45%",
      left: "90%",
      className: "bg-gradient-to-tr from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white font-sans">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center flex-1 px-6 py-16 md:py-32 overflow-hidden text-center"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[700px] h-[700px] bg-gradient-to-r from-purple-500 to-blue-400 opacity-10 rounded-full top-[-250px] left-[-250px] border border-gray-700"
          />
          {/* Floating neon orbs */}
          {orbStyles.map((orb, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
              transition={{
                duration: 10 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute w-36 h-36 ${orb.className} opacity-30 blur-2xl rounded-full`}
              style={{ top: orb.top, left: orb.left }}
            />
          ))}
        </div>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl text-white"
        >
          VaultX: The Future of Password Security
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative mt-6 text-lg md:text-xl max-w-2xl text-purple-200"
        >
          Automated encryption and seamless access, powered by tomorrow’s
          technology.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="relative mt-10 flex space-x-6"
        >
          <Link
            href="/sign-up"
            className="px-8 py-3 bg-purple-600 text-white rounded-full text-base font-medium hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/sign-in"
            className="px-8 py-3 border-2 border-purple-400 text-purple-300 rounded-full text-base font-medium hover:bg-purple-800 hover:text-white transition"
          >
            Sign In
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-white"
          >
            Core Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                icon: (
                  <LockClosedIcon className="h-12 w-12 mx-auto text-purple-400" />
                ),
                title: "Zero-Knowledge Encryption",
                desc: "Only you hold the keys. Your data is unreadable to us.",
              },
              {
                icon: (
                  <ArrowsRightLeftIcon className="h-12 w-12 mx-auto text-purple-400" />
                ),
                title: "Cross-Platform Sync",
                desc: "Access your vault anywhere, anytime, on any device.",
              },
            ].map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3, duration: 0.6 }}
                className="p-8 bg-gray-800 rounded-3xl shadow-lg hover:shadow-purple-700 transition"
              >
                {feat.icon}
                <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">
                  {feat.title}
                </h3>
                <p className="text-purple-200 text-base">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About VaultX
            </h2>
            <p className="text-purple-200 mb-4 text-justify">
              Founded on principles of privacy and innovation, VaultX empowers
              users to take control of their digital identities. With
              zero-knowledge architecture, your master key never leaves your
              device.
            </p>
            <p className="text-purple-200 text-justify">
              Our mission is to blend military-grade security with a
              user-centric interface, delivering a product that’s as intuitive
              as it is impenetrable.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-80 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-3xl shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-30">
              🔐
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800 text-center text-sm text-purple-400">
        © 2025 VaultX. All rights reserved.
      </footer>
    </div>
  );
}
