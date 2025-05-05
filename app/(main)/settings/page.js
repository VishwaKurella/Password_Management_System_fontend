"use client";
import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    theme: "light",
    notifications: true,
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update settings securely
    console.log("Updated settings:", form);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Theme
          </label>
          <select
            value={form.theme}
            onChange={(e) => handleChange("theme", e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={form.notifications}
            onChange={(e) => handleChange("notifications", e.target.checked)}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Enable notifications
          </label>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
