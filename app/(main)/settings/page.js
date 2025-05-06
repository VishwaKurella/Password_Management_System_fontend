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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InputField from "@/components/InputField";
import {
  updateName,
  updateEmail,
  updatePassword,
  deleteAccount,
} from "@/lib/api/user_api";

export default function Home() {
  // Master form state
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
  });
  const [editProfile, setEditProfile] = useState(false);
  const [settingsForm, setSettingsForm] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle profile field change
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: "" }));
    setMessage("");
  };

  // Handle settings password change
  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettingsForm((f) => ({ ...f, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: "" }));
    setMessage("");
  };

  // Submit profile (name/email)
  const submitProfile = async () => {
    setLoading(true);
    setErrors({});
    setMessage("");
    try {
      // First update name...
      let res = await updateName({ name: profile.name });
      if (!res.success) throw new Error(res.message);
      // Then update email...
      res = await updateEmail({ email: profile.email });
      if (!res.success) throw new Error(res.message);

      setMessage("✅ Profile updated.");
      setEditProfile(false);
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  // Submit password change
  const submitPassword = async () => {
    setLoading(true);
    setErrors({});
    setMessage("");
    try {
      const res = await updatePassword(settingsForm);
      if (!res.success) throw new Error(res.message);
      setMessage("✅ Password changed.");
      setSettingsForm({ currentPassword: "", newPassword: "" });
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  // Delete account
  const handleDelete = async () => {
    if (!confirm("Really delete your account?")) return;
    setLoading(true);
    try {
      const res = await deleteAccount();
      if (!res.success) throw new Error(res.message);
      // redirect or show message
      setMessage("✅ Account deleted.");
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="relative h-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-8">
      <motion.div
        className="z-10 w-full max-w-2xl bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-2xl p-8 space-y-10"
        {...fadeIn}
      >
        {/* Profile Overview */}
        {errors.general && (
          <div className="bg-red-800 text-red-200 p-3 rounded-md text-center">
            {errors.general}
          </div>
        )}
        {message && (
          <div className="bg-green-800 text-green-200 p-3 rounded-md text-center">
            {message}
          </div>
        )}

        <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h2 className="text-xl font-semibold text-white">Profile Overview</h2>
          {editProfile ? (
            <div className="space-y-4">
              <InputField
                label="Name"
                name="name"
                type="text"
                value={profile.name}
                onChange={handleProfileChange}
                placeholder="Your name"
                error={errors.name}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleProfileChange}
                placeholder="you@example.com"
                error={errors.email}
              />
              <button
                onClick={submitProfile}
                disabled={loading}
                className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
              >
                Save Profile
              </button>
              <button
                onClick={() => setEditProfile(false)}
                className="w-full py-2 text-purple-400 rounded-full hover:underline transition"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">{profile.name}</p>
                <p className="text-purple-300 text-sm">{profile.email}</p>
              </div>
              <button
                onClick={() => setEditProfile(true)}
                className="py-1 px-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
              >
                Edit
              </button>
            </div>
          )}
        </section>

        {/* Change Password */}
        <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h2 className="text-xl font-semibold text-white">Change Password</h2>
          <InputField
            label="Current Password"
            name="currentPassword"
            type="password"
            value={settingsForm.currentPassword}
            onChange={handleSettingsChange}
            placeholder="••••••••"
            error={errors.currentPassword}
          />
          <InputField
            label="New Password"
            name="newPassword"
            type="password"
            value={settingsForm.newPassword}
            onChange={handleSettingsChange}
            placeholder="••••••••"
            error={errors.newPassword}
          />
          <button
            onClick={submitPassword}
            disabled={loading}
            className="w-full py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition"
          >
            Update Password
          </button>
        </section>

        {/* Delete Account */}
        <section className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
          <p className="text-red-300 text-sm">
            Deleting your account is permanent. All your data will be lost.
          </p>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="w-full py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition"
          >
            Delete Account
          </button>
        </section>
      </motion.div>
    </div>
  );
}
