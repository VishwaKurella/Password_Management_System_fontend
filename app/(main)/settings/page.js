// "use client";
// import { useState } from "react";

// export default function Settings() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     theme: "light",
//     notifications: true,
//   });

//   const handleChange = (key, value) => {
//     setForm({ ...form, [key]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call API to update settings securely
//     console.log("Updated settings:", form);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">Settings</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             type="text"
//             value={form.name}
//             onChange={(e) => handleChange("name", e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             value={form.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Theme
//           </label>
//           <select
//             value={form.theme}
//             onChange={(e) => handleChange("theme", e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
//           >
//             <option value="light">Light</option>
//             <option value="dark">Dark</option>
//           </select>
//         </div>

//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={form.notifications}
//             onChange={(e) => handleChange("notifications", e.target.checked)}
//             className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//           />
//           <label className="ml-2 block text-sm text-gray-700">
//             Enable notifications
//           </label>
//         </div>

//         <div className="pt-4">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   updateName,
//   updateEmail,
//   updatePassword,
//   deleteAccount,
// } from "@/lib/api/user_api";

// export default function SettingsPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     currentPassword: "",
//     newPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//     setErrors((e) => ({ ...e, [name]: "" }));
//     setMessage("");
//   };

//   const handleSubmit = async (action) => {
//     setLoading(true);
//     setErrors({});
//     setMessage("");

//     try {
//       let response;
//       switch (action) {
//         case "name":
//           response = await updateName({ name: form.name });
//           break;
//         case "email":
//           response = await updateEmail({ email: form.email });
//           break;
//         case "password":
//           response = await updatePassword({
//             currentPassword: form.currentPassword,
//             newPassword: form.newPassword,
//           });
//           break;
//         case "delete":
//           response = await deleteAccount();
//           break;
//       }

//       if (!response.success) throw new Error(response.message);
//       setMessage("✅ Changes saved successfully.");
//     } catch (err) {
//       setErrors({ general: err.message });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fadeCard = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" },
//   };

//   return (
//     <div className="relative h-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-8">
//       {/* Background grid animation */}
//       <motion.div
//         animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//         className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] [background-size:20px_20px] z-0"
//       />

//       <motion.div
//         className="z-10 w-full max-w-2xl bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-2xl p-8 space-y-10"
//         {...fadeCard}
//       >
//         <h2 className="text-3xl text-white font-bold text-center mb-4">
//           Settings
//         </h2>

//         {errors.general && (
//           <div className="bg-red-700 text-red-100 p-3 rounded-md text-center">
//             {errors.general}
//           </div>
//         )}

//         {message && (
//           <div className="bg-green-700 text-green-100 p-3 rounded-md text-center">
//             {message}
//           </div>
//         )}

//         {/* Update Name */}
//         <section>
//           <h3 className="text-purple-300 mb-2 text-lg font-semibold">
//             Update Name
//           </h3>
//           <div className="space-y-4">
//             <InputField
//               label="Name"
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your new name"
//               error={errors.name}
//             />
//             <button
//               onClick={() => handleSubmit("name")}
//               className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//               disabled={loading}
//             >
//               Save Name
//             </button>
//           </div>
//         </section>

//         {/* Update Email */}
//         <section>
//           <h3 className="text-purple-300 mb-2 text-lg font-semibold">
//             Change Email
//           </h3>
//           <div className="space-y-4">
//             <InputField
//               label="Email"
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="new@email.com"
//               error={errors.email}
//             />
//             <button
//               onClick={() => handleSubmit("email")}
//               className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//               disabled={loading}
//             >
//               Update Email
//             </button>
//           </div>
//         </section>

//         {/* Change Password */}
//         <section>
//           <h3 className="text-purple-300 mb-2 text-lg font-semibold">
//             Change Password
//           </h3>
//           <div className="space-y-4">
//             <InputField
//               label="Current Password"
//               name="currentPassword"
//               type="password"
//               value={form.currentPassword}
//               onChange={handleChange}
//               placeholder="Current password"
//               error={errors.currentPassword}
//             />
//             <InputField
//               label="New Password"
//               name="newPassword"
//               type="password"
//               value={form.newPassword}
//               onChange={handleChange}
//               placeholder="New password"
//               error={errors.newPassword}
//             />
//             <button
//               onClick={() => handleSubmit("password")}
//               className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//               disabled={loading}
//             >
//               Change Password
//             </button>
//           </div>
//         </section>

//         {/* Delete Account */}
//         <section>
//           <h3 className="text-red-400 mb-2 text-lg font-semibold">
//             Delete Account
//           </h3>
//           <p className="text-sm text-red-300 mb-4">
//             This action is irreversible. All your data will be permanently
//             deleted.
//           </p>
//           <button
//             onClick={() => handleSubmit("delete")}
//             className="w-full py-2 bg-red-700 hover:bg-red-600 text-white rounded-full transition"
//             disabled={loading}
//           >
//             Delete Account
//           </button>
//         </section>
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   updateName,
//   updateEmail,
//   updatePassword,
//   deleteAccount,
// } from "@/lib/api/user_api";

// export default function Home() {
//   // Master form state
//   const [profile, setProfile] = useState({
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//   });
//   const [editProfile, setEditProfile] = useState(false);
//   const [settingsForm, setSettingsForm] = useState({
//     currentPassword: "",
//     newPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Handle profile field change
//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((p) => ({ ...p, [name]: value }));
//     setErrors((errs) => ({ ...errs, [name]: "" }));
//     setMessage("");
//   };

//   // Handle settings password change
//   const handleSettingsChange = (e) => {
//     const { name, value } = e.target;
//     setSettingsForm((f) => ({ ...f, [name]: value }));
//     setErrors((errs) => ({ ...errs, [name]: "" }));
//     setMessage("");
//   };

//   // Submit profile (name/email)
//   const submitProfile = async () => {
//     setLoading(true);
//     setErrors({});
//     setMessage("");
//     try {
//       // First update name...
//       let res = await updateName({ name: profile.name });
//       if (!res.success) throw new Error(res.message);
//       // Then update email...
//       res = await updateEmail({ email: profile.email });
//       if (!res.success) throw new Error(res.message);

//       setMessage("✅ Profile updated.");
//       setEditProfile(false);
//     } catch (err) {
//       setErrors({ general: err.message });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Submit password change
//   const submitPassword = async () => {
//     setLoading(true);
//     setErrors({});
//     setMessage("");
//     try {
//       const res = await updatePassword(settingsForm);
//       if (!res.success) throw new Error(res.message);
//       setMessage("✅ Password changed.");
//       setSettingsForm({ currentPassword: "", newPassword: "" });
//     } catch (err) {
//       setErrors({ general: err.message });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete account
//   const handleDelete = async () => {
//     if (!confirm("Really delete your account?")) return;
//     setLoading(true);
//     try {
//       const res = await deleteAccount();
//       if (!res.success) throw new Error(res.message);
//       // redirect or show message
//       setMessage("✅ Account deleted.");
//     } catch (err) {
//       setErrors({ general: err.message });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.5, ease: "easeOut" },
//   };

//   return (
//     <div className="relative h-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-8 flex-1 overflow-auto">
//       <motion.div
//         className="z-10 w-full max-w-2xl bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-2xl p-8 space-y-10"
//         {...fadeIn}
//       >
//         {/* Profile Overview */}
//         {errors.general && (
//           <div className="bg-red-800 text-red-200 p-3 rounded-md text-center">
//             {errors.general}
//           </div>
//         )}
//         {message && (
//           <div className="bg-green-800 text-green-200 p-3 rounded-md text-center">
//             {message}
//           </div>
//         )}

//         <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
//           <h2 className="text-xl font-semibold text-white">Profile Overview</h2>
//           {editProfile ? (
//             <div className="space-y-4">
//               <InputField
//                 label="Name"
//                 name="name"
//                 type="text"
//                 value={profile.name}
//                 onChange={handleProfileChange}
//                 placeholder="Your name"
//                 error={errors.name}
//               />
//               <InputField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={profile.email}
//                 onChange={handleProfileChange}
//                 placeholder="you@example.com"
//                 error={errors.email}
//               />
//               <button
//                 onClick={submitProfile}
//                 disabled={loading}
//                 className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//               >
//                 Save Profile
//               </button>
//               <button
//                 onClick={() => setEditProfile(false)}
//                 className="w-full py-2 text-purple-400 rounded-full hover:underline transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-white font-medium">{profile.name}</p>
//                 <p className="text-purple-300 text-sm">{profile.email}</p>
//               </div>
//               <button
//                 onClick={() => setEditProfile(true)}
//                 className="py-1 px-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//               >
//                 Edit
//               </button>
//             </div>
//           )}
//         </section>

//         {/* Change Password */}
//         <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
//           <h2 className="text-xl font-semibold text-white">Change Password</h2>
//           <InputField
//             label="Current Password"
//             name="currentPassword"
//             type="password"
//             value={settingsForm.currentPassword}
//             onChange={handleSettingsChange}
//             placeholder="••••••••"
//             error={errors.currentPassword}
//           />
//           <InputField
//             label="New Password"
//             name="newPassword"
//             type="password"
//             value={settingsForm.newPassword}
//             onChange={handleSettingsChange}
//             placeholder="••••••••"
//             error={errors.newPassword}
//           />
//           <button
//             onClick={submitPassword}
//             disabled={loading}
//             className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//           >
//             Update Password
//           </button>
//         </section>

//         {/* Delete Account */}
//         <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
//           <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
//           <p className="text-red-300 text-sm">
//             Deleting your account is permanent. All your data will be lost.
//           </p>
//           <button
//             onClick={handleDelete}
//             disabled={loading}
//             className="w-full py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition"
//           >
//             Delete Account
//           </button>
//         </section>
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   updateName,
//   updateEmail,
//   updatePassword,
//   deleteAccount,
// } from "@/lib/api/user_api";

// export default function SettingsPage() {
//   // Profile & form state
//   const [profile, setProfile] = useState({
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//   });
//   const [editProfile, setEditProfile] = useState(false);
//   const [settingsForm, setSettingsForm] = useState({
//     currentPassword: "",
//     newPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Scroll into view on expand
//   const containerRef = useRef(null);
//   useEffect(() => {
//     if (editProfile && containerRef.current) {
//       containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [editProfile]);

//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.4 },
//   };

//   // Helpers
//   const showMessage = (type) => {
//     setMessage({ type, text });
//     setTimeout(() => setMessage(null), 3000);
//   };

//   // Submits
//   const submitProfile = async () => {
//     setLoading(true);
//     setErrors({});
//     setMessage(null);
//     try {
//       let res = await updateName({ name: profile.name });
//       if (!res.success) throw new Error(res.message);
//       res = await updateEmail({ email: profile.email });
//       if (!res.success) throw new Error(res.message);
//       showMessage("success", "Profile updated.");
//       setEditProfile(false);
//     } catch (err) {
//       showMessage("error", err.message || "Update failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const submitPassword = async () => {
//     setLoading(true);
//     setErrors({});
//     setMessage(null);
//     try {
//       const res = await updatePassword(settingsForm);
//       if (!res.success) throw new Error(res.message);
//       showMessage("success", "Password changed.");
//       setSettingsForm({ currentPassword: "", newPassword: "" });
//     } catch (err) {
//       showMessage("error", err.message || "Change failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!confirm("Really delete your account?")) return;
//     setLoading(true);
//     setMessage(null);
//     try {
//       const res = await deleteAccount();
//       if (!res.success) throw new Error(res.message);
//       showMessage("success", "Account deleted.");
//       // maybe redirect here...
//     } catch (err) {
//       showMessage("error", err.message || "Delete failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="flex-1 overflow-auto p-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black"
//     >
//       <motion.div
//         className="mx-auto max-w-2xl bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-2xl p-8 space-y-10"
//         {...fadeIn}
//       >
//         {/* global message */}
//         <AnimatePresence>
//           {message && (
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               className={`p-3 rounded-md text-center font-medium ${
//                 message.type === "success"
//                   ? "bg-green-800 text-green-200"
//                   : "bg-red-800 text-red-200"
//               }`}
//             >
//               {message.text}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Profile Overview */}
//         <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
//           <h2 className="text-xl font-semibold text-white">Profile Overview</h2>
//           {editProfile ? (
//             <div className="space-y-4">
//               <InputField
//                 label="Name"
//                 name="name"
//                 type="text"
//                 value={profile.name}
//                 onChange={(e) =>
//                   setProfile({ ...profile, name: e.target.value })
//                 }
//                 placeholder="Your name"
//                 error={errors.name}
//               />
//               <InputField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={profile.email}
//                 onChange={(e) =>
//                   setProfile({ ...profile, email: e.target.value })
//                 }
//                 placeholder="you@example.com"
//                 error={errors.email}
//               />
//               <button
//                 onClick={submitProfile}
//                 disabled={loading}
//                 className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition disabled:opacity-50"
//               >
//                 Save Profile
//               </button>
//               <button
//                 onClick={() => setEditProfile(false)}
//                 className="w-full py-2 text-purple-400 rounded-full hover:underline transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-white font-medium">{profile.name}</p>
//                 <p className="text-purple-300 text-sm">{profile.email}</p>
//               </div>
//               <button
//                 onClick={() => setEditProfile(true)}
//                 className="py-1 px-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//               >
//                 Edit
//               </button>
//             </div>
//           )}
//         </section>

//         {/* Change Password */}
//         <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
//           <h2 className="text-xl font-semibold text-white">Change Password</h2>
//           <InputField
//             label="Current Password"
//             name="currentPassword"
//             type="password"
//             value={settingsForm.currentPassword}
//             onChange={(e) =>
//               setSettingsForm({
//                 ...settingsForm,
//                 currentPassword: e.target.value,
//               })
//             }
//             placeholder="••••••••"
//             error={errors.currentPassword}
//           />
//           <InputField
//             label="New Password"
//             name="newPassword"
//             type="password"
//             value={settingsForm.newPassword}
//             onChange={(e) =>
//               setSettingsForm({ ...settingsForm, newPassword: e.target.value })
//             }
//             placeholder="••••••••"
//             error={errors.newPassword}
//           />
//           <button
//             onClick={submitPassword}
//             disabled={loading}
//             className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition disabled:opacity-50"
//           >
//             Update Password
//           </button>
//         </section>

//         {/* Delete Account */}
//         <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
//           <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
//           <p className="text-red-300 text-sm">
//             Deleting your account is permanent. All your data will be lost.
//           </p>
//           <button
//             onClick={handleDelete}
//             disabled={loading}
//             className="w-full py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition disabled:opacity-50"
//           >
//             Delete Account
//           </button>
//         </section>
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   UserIcon,
//   LockClosedIcon,
//   TrashIcon,
//   CheckCircleIcon,
//   ExclamationTriangleIcon,
// } from "@heroicons/react/24/outline";
// import { useUser } from "../UserContext";

// export default function SettingsPage() {
//   const { user } = useUser(); // { name, email }
//   const [profile, setProfile] = useState(user || { name: "", email: "" });
//   const [editingName, setEditingName] = useState(false);
//   const [form, setForm] = useState({ currentPassword: "", newPassword: "" });
//   const [status, setStatus] = useState({ type: "idle", message: "" });
//   const [loading, setLoading] = useState(false);
//   const containerRef = useRef(null);

//   // Sync profile when user context updates
//   useEffect(() => {
//     if (user) setProfile(user);
//   }, [user]);

//   // Scroll when editing name
//   useEffect(() => {
//     if (editingName && containerRef.current) {
//       containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [editingName]);

//   const showMessage = (type, message) => {
//     setStatus({ type, message });
//     setTimeout(() => setStatus({ type: "idle", message: "" }), 4000);
//   };

//   const submitName = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/user/name", {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: profile.name }),
//       });
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message);
//       showMessage("success", "Name updated successfully.");
//       setEditingName(false);
//     } catch (err) {
//       showMessage("error", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const submitPassword = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/user/password", {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message);
//       showMessage("success", "Password changed successfully.");
//       setForm({ currentPassword: "", newPassword: "" });
//     } catch (err) {
//       showMessage("error", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const confirmAndDelete = async () => {
//     if (
//       !confirm(
//         "Are you sure you want to delete your account? This cannot be undone."
//       )
//     )
//       return;
//     setLoading(true);
//     try {
//       const res = await fetch("/api/user", { method: "DELETE" });
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message);
//       showMessage("success", "Account deleted.");
//       window.location.href = "/";
//     } catch (err) {
//       showMessage("error", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="flex-1 overflow-auto bg-gradient-to-br from-gray-900 via-purple-900 to-black p-8 text-gray-100"
//     >
//       <AnimatePresence>
//         {status.type !== "idle" && (
//           <motion.div
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             className={`mb-6 flex items-center gap-2 p-4 rounded-md font-medium ${
//               status.type === "success"
//                 ? "bg-green-800 text-green-200"
//                 : "bg-red-800 text-red-200"
//             }`}
//           >
//             {status.type === "success" ? (
//               <CheckCircleIcon className="h-6 w-6" />
//             ) : (
//               <ExclamationTriangleIcon className="h-6 w-6" />
//             )}
//             <span>{status.message}</span>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="space-y-12 max-w-3xl mx-auto">
//         {/* Profile Section */}
//         <section className="bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex items-start gap-6 shadow-lg">
//           <UserIcon className="h-10 w-10 text-purple-400" />
//           <div className="flex-1 space-y-2">
//             <h2 className="text-xl font-semibold text-white">Profile</h2>
//             {editingName ? (
//               <>
//                 <InputField
//                   label="Name"
//                   name="name"
//                   type="text"
//                   value={profile.name}
//                   onChange={(e) =>
//                     setProfile({ ...profile, name: e.target.value })
//                   }
//                 />
//                 <div className="flex gap-4 mt-2">
//                   <button
//                     onClick={submitName}
//                     disabled={loading}
//                     className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition disabled:opacity-50"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => setEditingName(false)}
//                     className="px-5 py-2 text-purple-400 rounded-full hover:underline transition"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-white font-medium text-lg">
//                     {profile.name}
//                   </p>
//                   <p className="text-purple-300 text-sm">{profile.email}</p>
//                 </div>
//                 <button
//                   onClick={() => setEditingName(true)}
//                   className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//                 >
//                   Edit
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Change Password Section */}
//         <section className="bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex items-start gap-6 shadow-lg">
//           <LockClosedIcon className="h-10 w-10 text-purple-400 mt-1" />
//           <div className="flex-1">
//             <h2 className="text-xl font-semibold text-white mb-3">
//               Change Password
//             </h2>
//             <div className="space-y-4">
//               <InputField
//                 label="Current Password"
//                 name="currentPassword"
//                 type="password"
//                 value={form.currentPassword}
//                 onChange={(e) =>
//                   setForm({ ...form, currentPassword: e.target.value })
//                 }
//               />
//               <InputField
//                 label="New Password"
//                 name="newPassword"
//                 type="password"
//                 value={form.newPassword}
//                 onChange={(e) =>
//                   setForm({ ...form, newPassword: e.target.value })
//                 }
//               />
//               <button
//                 onClick={submitPassword}
//                 disabled={loading}
//                 className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition disabled:opacity-50"
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Delete Account Section */}
//         <section className="bg-gray-800/80 backdrop-blur-md border border-red-700 rounded-2xl p-6 flex items-start gap-6 shadow-lg">
//           <TrashIcon className="h-10 w-10 text-red-400 mt-1" />
//           <div className="flex-1">
//             <h2 className="text-xl font-semibold text-red-400 mb-2">
//               Delete Account
//             </h2>
//             <p className="text-red-300 text-sm mb-4">
//               This action is irreversible. All your data will be permanently
//               deleted.
//             </p>
//             <button
//               onClick={confirmAndDelete}
//               disabled={loading}
//               className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition disabled:opacity-50"
//             >
//               Delete
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import InputField from "@/components/InputField";
// import {
//   UserIcon,
//   LockClosedIcon,
//   TrashIcon,
//   CheckCircleIcon,
//   ExclamationTriangleIcon,
// } from "@heroicons/react/24/outline";
// import { useUser } from "../UserContext";
// import { useRouter } from "next/navigation";

// export default function SettingsPage() {
//   const { user, setUser } = useUser();
//   const [profileName, setProfileName] = useState(user.name);
//   const [editingName, setEditingName] = useState(false);
//   const [form, setForm] = useState({ currentPassword: "", newPassword: "" });
//   const [status, setStatus] = useState({ type: "idle", message: "" });
//   const [loading, setLoading] = useState(false);
//   const containerRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (editingName && containerRef.current) {
//       containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [editingName]);

//   const showMessage = (type, message) => {
//     setStatus({ type, message });
//     setTimeout(() => setStatus({ type: "idle", message: "" }), 4000);
//   };

//   const submitName = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:8080/api/request/change_name", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: profileName }),
//         credentials: "include",
//         cache: "no-store",
//       });
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message);
//       showMessage("success", "Name updated successfully.");
//       setEditingName(false);
//       setUser({ ...user, name: profileName });
//     } catch (err) {
//       showMessage("error", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const submitPassword = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         "http://localhost:8080/api/request/change_password",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//           credentials: "include",
//           cache: "no-store",
//         }
//       );
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message);
//       showMessage("success", "Password changed successfully.");
//       setForm({ currentPassword: "", newPassword: "" });
//     } catch (err) {
//       showMessage("error", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const confirmAndDelete = async () => {
//     if (
//       !confirm(
//         "Are you sure you want to delete your account? This cannot be undone."
//       )
//     )
//       return;
//     setLoading(true);
//     try {
//       const res = await fetch(
//         "http://localhost:8080/api/request/delete_account",
//         {
//           method: "DELETE",
//           credentials: "include",
//           cache: "no-store",
//         }
//       );
//       const data = await res.json();
//       if (!data.success) throw new Error(data.message);
//       showMessage("success", "Account deleted.");
//       router.replace("/");
//     } catch (err) {
//       showMessage("error", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-64 text-white">
//         <div className="loader" />
//       </div>
//     );
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="flex-1 overflow-auto bg-gradient-to-br from-gray-900 via-purple-900 to-black p-6 sm:p-8 text-gray-100"
//     >
//       <AnimatePresence>
//         {status.type !== "idle" && (
//           <motion.div
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             className={`mb-6 flex items-center gap-2 p-4 rounded-md font-medium ${
//               status.type === "success"
//                 ? "bg-green-800 text-green-200"
//                 : "bg-red-800 text-red-200"
//             }`}
//           >
//             {status.type === "success" ? (
//               <CheckCircleIcon className="h-6 w-6" />
//             ) : (
//               <ExclamationTriangleIcon className="h-6 w-6" />
//             )}
//             <span>{status.message}</span>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="space-y-10 max-w-3xl mx-auto">
//         {/* Profile Section */}
//         <section className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
//           <UserIcon className="h-10 w-10 text-purple-400 shrink-0" />
//           <div className="flex-1">
//             <h2 className="text-xl font-semibold text-white mb-2">Profile</h2>
//             {editingName ? (
//               <div className="space-y-4">
//                 <InputField
//                   label="Name"
//                   name="name"
//                   type="text"
//                   value={profileName}
//                   onChange={(e) => setProfileName(e.target.value)}
//                 />
//                 <div className="flex gap-3">
//                   <button
//                     onClick={submitName}
//                     disabled={loading}
//                     className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition disabled:opacity-50"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => setEditingName(false)}
//                     className="px-5 py-2 text-purple-400 rounded-full hover:underline transition"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                 <div>
//                   <p className="text-white font-medium">{user.name}</p>
//                   <p className="text-purple-300 text-sm">{user.email}</p>
//                 </div>
//                 <button
//                   onClick={() => setEditingName(true)}
//                   className="mt-3 sm:mt-0 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
//                 >
//                   Edit
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Change Password Section */}
//         <section className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
//           <LockClosedIcon className="h-10 w-10 text-purple-400 mt-1 shrink-0" />
//           <div className="flex-1">
//             <h2 className="text-xl font-semibold text-white mb-2">
//               Change Password
//             </h2>
//             <div className="space-y-4">
//               <InputField
//                 label="Current Password"
//                 name="currentPassword"
//                 type="password"
//                 value={form.currentPassword}
//                 onChange={(e) =>
//                   setForm({ ...form, currentPassword: e.target.value })
//                 }
//               />
//               <InputField
//                 label="New Password"
//                 name="newPassword"
//                 type="password"
//                 value={form.newPassword}
//                 onChange={(e) =>
//                   setForm({ ...form, newPassword: e.target.value })
//                 }
//               />
//               <button
//                 onClick={submitPassword}
//                 disabled={loading}
//                 className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition disabled:opacity-50"
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Delete Account Section */}
//         <section className="bg-gray-800/70 backdrop-blur-md border border-red-700 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
//           <TrashIcon className="h-10 w-10 text-red-400 mt-1 shrink-0" />
//           <div className="flex-1">
//             <h2 className="text-xl font-semibold text-red-400 mb-2">
//               Delete Account
//             </h2>
//             <p className="text-red-300 text-sm mb-4">
//               This action is irreversible. All your data will be permanently
//               deleted.
//             </p>
//             <button
//               onClick={confirmAndDelete}
//               disabled={loading}
//               className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition disabled:opacity-50"
//             >
//               Delete
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "@/components/InputField";
import {
  UserIcon,
  LockClosedIcon,
  TrashIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "../UserContext";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const { user, setUser, secureFetch } = useUser();
  // const [profileName, setProfileName] = useState(user?.name);
  const [profileName, setProfileName] = useState(user?.name ?? "");

  const [editingName, setEditingName] = useState(false);
  const [form, setForm] = useState({ currentPassword: "", newPassword: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (editingName && containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [editingName]);

  const showMessage = (type, message) => {
    setStatus({ type, message });
    setTimeout(() => setStatus({ type: "idle", message: "" }), 4000);
  };

  const submitName = async () => {
    setLoading(true);
    try {
      const { json } = await secureFetch(
        "http://localhost:8080/api/request/change_name",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: profileName }),
        }
      );
      if (!json.success) throw new Error(json.message);
      showMessage("success", "Name updated successfully.");
      setEditingName(false);
      setUser({ ...user, name: profileName });
    } catch (err) {
      showMessage("error", err.message);
    } finally {
      setLoading(false);
    }
  };

  const submitPassword = async () => {
    setLoading(true);
    try {
      const { json } = await secureFetch(
        "http://localhost:8080/api/request/change_password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            old_password: form.currentPassword,
            new_password: form.newPassword,
          }),
        }
      );
      if (!json.success) throw new Error(json.message);
      showMessage("success", "Password changed successfully.");
      setForm({ currentPassword: "", newPassword: "" });
    } catch (err) {
      showMessage("error", err.message);
    } finally {
      setLoading(false);
    }
  };

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const confirmAndDelete = async () => {
    setLoading(true);
    try {
      const { json } = await secureFetch(
        "http://localhost:8080/api/request/delete_account",
        {
          method: "DELETE",
        }
      );
      if (!json.success) throw new Error(json.message);
      showMessage("success", "Account deleted.");
      router.replace("/");
    } catch (err) {
      showMessage("error", err.message);
    } finally {
      setLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  // const confirmAndDelete = async () => {
  //   if (
  //     !confirm(
  //       "Are you sure you want to delete your account? This cannot be undone."
  //     )
  //   )
  //     return;
  //   setLoading(true);
  //   try {
  //     const { json } = await secureFetch(
  //       "http://localhost:8080/api/request/delete_account",
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     if (!json.success) throw new Error(json.message);
  //     showMessage("success", "Account deleted.");
  //     router.replace("/");
  //   } catch (err) {
  //     showMessage("error", err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64 text-white">
        <div className="loader" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-auto bg-gradient-to-br from-gray-900 via-purple-900 to-black p-6 sm:p-8 text-gray-100"
    >
      <AnimatePresence>
        {status.type !== "idle" && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className={`mb-6 flex items-center gap-2 p-4 rounded-md font-medium ${
              status.type === "success"
                ? "bg-green-800 text-green-200"
                : "bg-red-800 text-red-200"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircleIcon className="h-6 w-6" />
            ) : (
              <ExclamationTriangleIcon className="h-6 w-6" />
            )}
            <span>{status.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-10 max-w-3xl mx-auto">
        {/* Profile Section */}
        <section className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <UserIcon className="h-10 w-10 text-purple-400 shrink-0" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-2">Profile</h2>
            {editingName ? (
              <div className="space-y-4">
                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                />
                <div className="flex gap-3">
                  <button
                    onClick={submitName}
                    disabled={loading}
                    className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition disabled:opacity-50"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingName(false)}
                    className="px-5 py-2 text-purple-400 rounded-full hover:underline transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <p className="text-white font-medium">{user.name}</p>
                  <p className="text-purple-300 text-sm">{user.email}</p>
                </div>
                <button
                  onClick={() => setEditingName(true)}
                  className="mt-3 sm:mt-0 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Change Password Section */}
        <section className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
          <LockClosedIcon className="h-10 w-10 text-purple-400 mt-1 shrink-0" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-2">
              Change Password
            </h2>
            <div className="space-y-4">
              <InputField
                label="Current Password"
                name="currentPassword"
                type="password"
                value={form.currentPassword}
                onChange={(e) =>
                  setForm({ ...form, currentPassword: e.target.value })
                }
              />
              <InputField
                label="New Password"
                name="newPassword"
                type="password"
                value={form.newPassword}
                onChange={(e) =>
                  setForm({ ...form, newPassword: e.target.value })
                }
              />
              <button
                onClick={submitPassword}
                disabled={loading}
                className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition disabled:opacity-50"
              >
                Update
              </button>
            </div>
          </div>
        </section>

        {/* Delete Account Section */}
        <section className="bg-gray-800/70 backdrop-blur-md border border-red-700 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
          <TrashIcon className="h-10 w-10 text-red-400 mt-1 shrink-0" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Delete Account
            </h2>
            <p className="text-red-300 text-sm mb-4">
              This action is irreversible. All your data will be permanently
              deleted.
            </p>
            {/* <button
              onClick={confirmAndDelete}
              disabled={loading}
              className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition disabled:opacity-50"
            >
              Delete
            </button> */}
            <button
              onClick={() => setShowDeleteConfirm(true)}
              disabled={loading}
              className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition disabled:opacity-50"
            >
              Delete
            </button>
          </div>
        </section>
      </div>
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 border border-red-700 rounded-xl p-6 max-w-sm w-full text-center text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <ExclamationTriangleIcon className="w-10 h-10 text-red-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Delete Account?</h3>
              <p className="text-sm text-red-300 mb-4">
                This action is irreversible. All your data will be permanently
                deleted.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={confirmAndDelete}
                  disabled={loading}
                  className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-500 transition disabled:opacity-50"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 text-red-300 hover:underline transition"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
