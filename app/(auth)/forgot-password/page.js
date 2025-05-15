// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import InputField from "@/components/InputField";

// export default function ForgotPasswordPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [otpId, setOtpId] = useState("");

//   const validate = () => {
//     const errs = {};
//     if (!email.trim()) errs.email = "Email is required.";
//     else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
//       errs.email = "Invalid email format.";
//     return errs;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length) {
//       setErrors(validationErrors);
//       return;
//     }
//     setErrors({});
//     setSubmitting(true);
//     try {
//       const res = await fetch(
//         "http://localhost:8080/api/auth/forgot_password",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email: email.trim() }),
//         }
//       );
//       const data = await res.json();
//       if (!res.ok || !data.success) {
//         setErrors({
//           email: data.message || "Failed to send OTP. Please try again.",
//         });
//       } else {
//         setOtpId(data._id);
//         setSubmitted(true);
//         setTimeout(() => router.push(`/verify-otp/${data.id}`), 3000);
//       }
//     } catch (error) {
//       console.error("Error during forgot-password request:", error);
//       setErrors({ email: "Server error, please try again later." });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {!submitted ? (
//         <>
//           <motion.h1
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-3xl md:text-4xl font-extrabold mb-4 text-white"
//           >
//             Forgot Your Password?
//           </motion.h1>
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-purple-200 mb-6 text-center"
//           >
//             Enter your email and we'll send you a secure OTP to reset your
//             password.
//           </motion.p>

//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//             className="space-y-4"
//           >
//             <InputField
//               label="Email Address"
//               name="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               error={errors.email}
//               required
//             />
//             <button
//               type="submit"
//               disabled={submitting}
//               className={`w-full px-6 py-3 bg-purple-600 rounded-full font-medium hover:bg-purple-700 transition ${
//                 submitting ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {submitting ? "Sending OTP..." : "Send OTP"}
//             </button>
//           </motion.form>

//           <p className="mt-4 text-sm text-purple-300 text-center">
//             Remembered?{" "}
//             <Link href="/sign-in" className="hover:underline hover:text-white">
//               Sign In
//             </Link>
//           </p>
//         </>
//       ) : (
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="space-y-4"
//         >
//           <h2 className="text-2xl font-semibold text-white text-center">
//             OTP Sent!
//           </h2>
//           <p className="text-purple-200 text-center">
//             An OTP has been sent to <span className="font-medium">{email}</span>
//             .
//           </p>
//           <p className="text-purple-300 text-sm text-center">
//             Redirecting to verification...
//           </p>
//         </motion.div>
//       )}
//     </>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AtSymbolIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import InputField from "@/components/InputField";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [otpId, setOtpId] = useState("");

  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      errs.email = "Invalid email format.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch(
        "http://localhost:8080/api/auth/forgot_password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim().toLowerCase() }),
        }
      );
      const data = await res.json();
      console.log("hello", data);
      if (!res.ok || !data.success) {
        setErrors({
          email: data.message || "Failed to send OTP. Please try again.",
        });
      } else {
        setOtpId(data._id);
        setSubmitted(true);
        setTimeout(() => router.push(`/verify-otp/${otpId}`), 3000);
      }
    } catch (error) {
      console.error("Error during forgot-password request:", error);
      setErrors({ email: "Server error, please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {!submitted ? (
        <>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold mb-4 text-white flex items-center justify-center gap-2"
          >
            <AtSymbolIcon className="h-8 w-8 text-purple-400" />
            Forgot Your Password?
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-purple-200 mb-6 text-center"
          >
            Enter your email and we'll send you a secure OTP to reset your
            password.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4"
          >
            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              error={errors.email}
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className={`w-full px-6 py-3 text-white bg-purple-600 rounded-full font-medium hover:bg-purple-700 transition flex items-center justify-center gap-2 ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <PaperAirplaneIcon className="h-5 w-5" />
              {submitting ? "Sending OTP..." : "Send OTP"}
            </button>
          </motion.form>

          <p className="mt-4 text-sm text-purple-300 text-center">
            Remembered?{" "}
            <Link href="/sign-in" className="hover:underline hover:text-white">
              Sign In
            </Link>
          </p>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4 text-center"
        >
          <div className="flex justify-center">
            <CheckCircleIcon className="h-10 w-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white">OTP Sent!</h2>
          <p className="text-purple-200">
            An OTP has been sent to <span className="font-medium">{email}</span>
            .
          </p>
          <p className="text-purple-300 text-sm">
            Redirecting to verification...
          </p>
        </motion.div>
      )}
    </>
  );
}
