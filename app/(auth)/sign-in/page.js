// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { signInGitHub, signInGoogle } from "@/lib/api/oauth_api";
// import { login } from "@/lib/api/auth_api";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [apiError, setApiError] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
//       newErrors.email = "Invalid email format.";
//     }
//     if (!form.password) {
//       newErrors.password = "Password is required.";
//     }
//     return newErrors;
//   };

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     try {
//       setSubmitting(true);
//       setApiError(false);
//       const trimmedForm = {
//         email: form.email.trim(),
//         password: form.password.trim(),
//       };
//       const result = await login({ formData: trimmedForm });

//       if (result.success) {
//         setSuccess(true);
//         setForm({
//           email: "",
//           password: "",
//         });
//         router.push("/");
//       } else {
//         setApiError(result.message || "Unknown error occurred.");
//         setTimeout(() => setApiError(false), 4000);
//       }
//     } catch (err) {
//       setApiError(err.message || "Unexpected error. Please try again.");
//       setTimeout(() => setApiError(false), 4000);
//     } finally {
//       setSubmitting(false);
//     }
//   };
//   return (
//     <div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-gray-800">
//       <AnimatePresence>
//         {apiError && (
//           <motion.div
//             key="api-error"
//             initial={{ opacity: 0, y: -20, x: "-50%" }}
//             animate={{ opacity: 1, y: 0, x: "-50%" }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.35, ease: "easeOut" }}
//             className="absolute top-6 left-1/2 bg-zinc-900/80 border border-red-500/50 text-red-400 px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(255,0,90,0.25)] backdrop-blur-md z-50"
//           >
//             <p className="text-lg tracking-wide font-medium">{apiError}</p>
//           </motion.div>
//         )}
//         {success ? (
//           <motion.div
//             key="success"
//             initial={{ opacity: 0, scale: 0.95, y: 10 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 10 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="mt-8 w-full max-w-lg mx-auto bg-gradient-to-br from-green-900/40 to-green-700/10 border border-green-500/30 text-green-300 px-6 py-5 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.25)] backdrop-blur-md text-center space-y-2"
//           >
//             <h3 className="text-xl font-semibold tracking-wide">
//               ✅ Login Successful
//             </h3>
//             <p className="text-sm tracking-wide text-green-400">
//               Redirecting you to your dashboard...
//             </p>
//           </motion.div>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col space-y-4 p-6 bg-zinc-950/70 backdrop-blur-md border border-zinc-700 rounded-2xl w-2/3 md:3/4 lg:3/5 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
//           >
//             <h2 className="text-center text-2xl font-bold text-purple-400 tracking-wide mb-2">
//               Welcome Back
//             </h2>

//             <InputField
//               label="Email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleFormChange}
//               placeholder="you@futuremail.com"
//               error={errors.email}
//             />

//             <InputField
//               label="Password"
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleFormChange}
//               placeholder="••••••••"
//               error={errors.password}
//             />

//             <button
//               type="submit"
//               disabled={submitting}
//               aria-busy={submitting ? "true" : "false"}
//               aria-live="assertive"
//               className={`mt-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white rounded-md text-sm font-medium tracking-widest transition-all duration-300 ${
//                 submitting
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:brightness-110 hover:shadow-[0_0_10px_rgba(236,72,153,0.6)]"
//               }`}
//             >
//               {submitting ? (
//                 <div className="flex justify-center items-center">
//                   <Image
//                     src="spin_logo.svg"
//                     width={10}
//                     height={10}
//                     alt="spin logo"
//                     className="size-6 animate-spin mr-3"
//                   />
//                   <span>Signing In...</span>
//                 </div>
//               ) : (
//                 "SIGN IN"
//               )}
//             </button>
//             <div className="flex items-center my-3">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="px-4 text-white font-medium">
//                 Sign In using your account
//               </span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>

//             <div className="flex flex-row items-center justify-around space-x-4">
//               <button
//                 type="button"
//                 className="rounded-full bg-white p-3 px-6 border border-zinc-600 text-gray-600 flex flex-row justify-center items-center shadow-md hover:shadow-lg hover:bg-zinc-100 transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:cursor-pointer"
//                 onClick={() => signInGoogle()}
//               >
//                 <Image
//                   src="google_logo.svg"
//                   width={24}
//                   height={24}
//                   alt="google logo"
//                   className="mr-2"
//                 />
//                 <span className="text-lg tracking-tight">Google</span>
//               </button>
//               <button
//                 type="button"
//                 className="rounded-full bg-white p-3 px-6 border border-zinc-600 text-gray-600 flex flex-row justify-center items-center shadow-md hover:shadow-lg hover:bg-zinc-100 transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:cursor-pointer"
//                 onClick={() => signInGitHub()}
//               >
//                 <Image
//                   src="github_logo.svg"
//                   width={24}
//                   height={24}
//                   alt="github logo"
//                   className="mr-2"
//                 />
//                 <span className="text-lg tracking-tight">GitHub</span>
//               </button>
//             </div>
//             <div className="flex justify-center items-center text-white space-x-2">
//               <span>Dont have an account ?</span>
//               <Link
//                 href="/sign-up"
//                 className="text-gray-600 hover:text-blue-500 hover:underline hover:underline-offset-4"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </form>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function InputField({
//   label,
//   name,
//   type,
//   value,
//   onChange,
//   placeholder,
//   error,
// }) {
//   const inputHints = {
//     email: "Enter a valid email address",
//     password: "Enter your password",
//   };

//   return (
//     <div className="flex flex-col space-y-1 group">
//       <label htmlFor={name} className="text-zinc-300 text-sm tracking-wider">
//         {label}:
//       </label>
//       <input
//         id={name}
//         name={name}
//         value={value}
//         type={type}
//         onChange={onChange}
//         placeholder={placeholder}
//         title={inputHints[name]}
//         aria-invalid={!!error}
//         aria-describedby={error ? `${name}-error` : undefined}
//         className={`px-3 py-2 rounded-md bg-zinc-800 text-purple-300 border ${
//           error ? "border-red-500" : "border-zinc-600"
//         } focus:outline-none focus:ring-2 ${
//           error ? "focus:ring-red-500" : "focus:ring-purple-500"
//         } focus:bg-zinc-900 transition-all duration-200 placeholder:text-zinc-500`}
//       />
//       {error && (
//         <span
//           id={`${name}-error`}
//           className="text-red-500 text-xs font-medium mt-1"
//           role="alert"
//         >
//           {error}
//         </span>
//       )}
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { signInGitHub, signInGoogle } from "@/lib/api/oauth_api";
// import { login } from "@/lib/api/auth_api";
// import { useRouter } from "next/navigation";
// import { LockClosedIcon } from "@heroicons/react/24/outline";

// export default function SignInPage() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [apiError, setApiError] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const router = useRouter();

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//     setErrors((errs) => ({ ...errs, [name]: "" }));
//   };

//   const validate = () => {
//     const errs = {};
//     if (!form.email.trim()) errs.email = "Email is required.";
//     else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
//       errs.email = "Invalid email.";
//     if (!form.password) errs.password = "Password is required.";
//     return errs;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length) return setErrors(errs);

//     try {
//       setSubmitting(true);
//       setApiError("");
//       const res = await login({ formData: form });
//       if (res.success) {
//         setSuccess(true);
//         setTimeout(() => router.push("/dashboard"), 1500);
//       } else throw new Error(res.message);
//     } catch (err) {
//       setApiError(err.message || "Server error.");
//       setTimeout(() => setApiError(""), 4000);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const orbStyles = [
//     { top: "60%", left: "15%", className: "from-pink-400 to-red-500" },
//     { top: "80%", left: "80%", className: "from-green-400 to-blue-500" },
//     { top: "75%", left: "40%", className: "from-yellow-400 to-orange-500" },
//   ];

//   return (
//     <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
//       {/* Neon spheres, behind the form */}
//       {orbStyles.map((orb, i) => (
//         <motion.div
//           key={i}
//           animate={{ y: [0, 50, 0], x: [0, -50, 0] }}
//           transition={{
//             duration: 10 + i * 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className={`absolute w-48 h-48 bg-gradient-to-tr ${orb.className} opacity-30 blur-2xl rounded-full z-10`}
//           style={{ top: orb.top, left: orb.left }}
//         />
//       ))}

//       {/* Rotating ring behind as well */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-purple-500 to-blue-400 opacity-20 rounded-full z-10"
//       />

//       {/* Form container */}
//       <div className="relative z-20 w-full max-w-md p-8 bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-700">
//         <div className="mb-6 text-center">
//           <h1 className="inline-flex items-center text-3xl font-extrabold text-white">
//             <LockClosedIcon className="h-8 w-8 mr-2 text-purple-400" />
//             Sign In
//           </h1>
//           <p className="mt-1 text-purple-300">
//             Welcome back—enter your credentials.
//           </p>
//         </div>

//         <AnimatePresence>
//           {apiError && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="mb-4 p-3 bg-red-800 text-red-200 rounded-md text-center"
//             >
//               {apiError}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {success ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="p-6 bg-green-800 text-green-200 rounded-xl text-center"
//           >
//             <p className="font-semibold">✅ Login Successful</p>
//             <p>Redirecting to your dashboard…</p>
//           </motion.div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <InputField
//               label="Email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleFormChange}
//               placeholder="you@example.com"
//               error={errors.email}
//             />
//             <InputField
//               label="Password"
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleFormChange}
//               placeholder="••••••••"
//               error={errors.password}
//             />

//             <button
//               type="submit"
//               disabled={submitting}
//               className={`w-full py-3 mt-4 text-white rounded-full font-medium transition ${
//                 submitting
//                   ? "bg-purple-700 opacity-60 cursor-not-allowed"
//                   : "bg-purple-600 hover:bg-purple-500"
//               }`}
//             >
//               {submitting ? "Signing in…" : "Sign In"}
//             </button>

//             <div className="flex items-center my-4 text-purple-400">
//               <div className="flex-grow h-px bg-purple-700" />
//               <span className="px-2 text-sm">Or</span>
//               <div className="flex-grow h-px bg-purple-700" />
//             </div>

//             <div className="flex gap-4">
//               <OAuthBtn
//                 label="Google"
//                 logo="/google_logo.svg"
//                 onClick={signInGoogle}
//               />
//               <OAuthBtn
//                 label="GitHub"
//                 logo="/github_logo.svg"
//                 onClick={signInGitHub}
//               />
//             </div>

//             <p className="mt-6 text-center text-purple-300">
//               Don’t have an account?{" "}
//               <Link
//                 href="/sign-up"
//                 className="text-white hover:underline hover:text-purple-200"
//               >
//                 Sign Up
//               </Link>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// function InputField({
//   label,
//   name,
//   type,
//   value,
//   onChange,
//   placeholder,
//   error,
// }) {
//   return (
//     <div className="flex flex-col">
//       <label htmlFor={name} className="mb-1 text-sm text-purple-300">
//         {label}
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         aria-invalid={!!error}
//         className={`px-4 py-2 rounded-full bg-gray-700 text-white border ${
//           error ? "border-red-500" : "border-gray-600"
//         } focus:outline-none focus:ring-2 focus:ring-purple-600`}
//       />
//       {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
//     </div>
//   );
// }

// function OAuthBtn({ label, logo, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 transition"
//     >
//       <Image src={logo} alt={`${label} logo`} width={20} height={20} />
//       <span className="text-sm text-white">{label}</span>
//     </button>
//   );
// }

// app/sign-in/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { login } from "@/lib/api/auth_api";
import { signInGoogle, signInGitHub } from "@/lib/api/oauth_api";
import { useRouter } from "next/navigation";
import OAuthBtn from "@/components/OAuthBtn";
import Divider from "@/components/Divider";
import InputField from "@/components/InputField";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      errs.email = "Invalid email.";
    if (!form.password) errs.password = "Password is required.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    try {
      setSubmitting(true);
      setApiError("");
      const res = await login({ formData: form });
      if (res.success) {
        setSuccess(true);
        setTimeout(() => router.push("/dashboard"), 1500);
      } else {
        throw new Error(res.message);
      }
    } catch (err) {
      setApiError(err.message || "Server error.");
      setTimeout(() => setApiError(""), 4000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="inline-flex items-center text-3xl font-extrabold text-white">
          <LockClosedIcon className="h-8 w-8 mr-2 text-purple-400" />
          Sign In
        </h1>
        <p className="mt-1 text-purple-300">
          Welcome back—enter your credentials.
        </p>
      </div>

      <AnimatePresence>
        {apiError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-3 bg-red-800 text-red-200 rounded-md text-center"
          >
            {apiError}
          </motion.div>
        )}
      </AnimatePresence>

      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-green-800 text-green-200 rounded-xl text-center"
        >
          <p className="font-semibold">✅ Login Successful</p>
          <p>Redirecting to your dashboard…</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            error={errors.email}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            error={errors.password}
          />

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 mt-4 text-white rounded-full font-medium transition ${
              submitting
                ? "bg-purple-700 opacity-60 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-500"
            }`}
          >
            {submitting ? "Signing in…" : "Sign In"}
          </button>

          <Divider text="Or continue with" />

          <div className="flex gap-4">
            <OAuthBtn
              label="Google"
              logo="/google_logo.svg"
              onClick={signInGoogle}
            />
            <OAuthBtn
              label="GitHub"
              logo="/github_logo.svg"
              onClick={signInGitHub}
            />
          </div>

          <p className="mt-6 text-center text-purple-300">
            Don’t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-white hover:underline hover:text-blue-500 hover:underline-offset-2"
            >
              Sign Up
            </Link>
          </p>
        </form>
      )}
    </>
  );
}
