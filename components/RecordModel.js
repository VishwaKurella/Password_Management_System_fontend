"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputField from "@/components/InputField";
import {
  XMarkIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "@/app/(main)/UserContext";

// Base64URL helpers
const toBase64Url = (buffer) =>
  btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

const fromBase64Url = (str) => {
  const pad = str.length % 4 === 0 ? 0 : 4 - (str.length % 4);
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(pad);
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr;
};

export default function EditOrDeleteModal({ record, onClose, onUpdate, onDelete }) {
  const { key, setKey, setMasterKeySet } = useUser();
  const [form, setForm] = useState({
    name: record.name,
    email: record.email,
    password: record.password,
    url: record.url,
    notes: record.notes || "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((errs) => ({ ...errs, [e.target.name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Valid email is required";
    if (form.password.length < 8) errs.password = "Minimum 8 characters";
    if (!/^https?:\/\//.test(form.url)) errs.url = "Must start with http:// or https://";
    return errs;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    if (!key) {
      setMasterKeySet(false);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const rawKey = fromBase64Url(key);
      const cryptoKey = await window.crypto.subtle.importKey(
        "raw",
        rawKey,
        { name: "AES-GCM" },
        false,
        ["encrypt"]
      );

      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const plaintext = new TextEncoder().encode(JSON.stringify(form));
      const cipherBuffer = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        cryptoKey,
        plaintext
      );

      const res = await fetch("http://localhost:8080/api/request/update_entries", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: record.id,
          data: toBase64Url(cipherBuffer),
          nonce: toBase64Url(iv),
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Update failed");

      setStatus("success");
      setMessage("Record updated!");
      onUpdate({ ...form, id: record.id });
      setTimeout(onClose, 1200);
    } catch (err) {
      console.error("Update failed:", err);
      setStatus("error");
      setMessage(err.message || "Failed to update");
      setTimeout(() => setStatus("idle"), 1500);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    setStatus("submitting");
    setMessage("Deleting…");

    try {
      const res = await fetch("http://localhost:8080/api/request/delete_entries", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: record.id }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Delete failed");

      setStatus("success");
      setMessage("Record deleted!");
      onDelete(record.id);
      setTimeout(onClose, 1200);
    } catch (err) {
      console.error("Delete failed:", err);
      setStatus("error");
      setMessage(err.message || "Failed to delete");
      setTimeout(() => setStatus("idle"), 1500);
    }
  };

  const StatusBanner = () => {
    const icons = {
      submitting: <Cog6ToothIcon className="h-5 w-5 animate-spin inline-block mr-2" />,
      success: <CheckCircleIcon className="h-5 w-5 text-green-400 inline-block mr-2" />,
      error: <ExclamationTriangleIcon className="h-5 w-5 text-red-400 inline-block mr-2" />,
    };
    const colors = {
      submitting: "bg-yellow-800 text-yellow-200",
      success: "bg-green-800 text-green-200",
      error: "bg-red-800 text-red-200",
    };
    return (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className={`mb-4 p-3 rounded-md text-center text-sm font-medium ${colors[status]}`}
      >
        {icons[status]}
        {status === "submitting" ? "Saving…" : message}
      </motion.div>
    );
  };

  return (
    <motion.div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl text-white relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
          aria-label="Close"
          type="button"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-semibold text-purple-400 mb-6">Edit Record</h2>

        <AnimatePresence>{status !== "idle" && <StatusBanner />}</AnimatePresence>

        <form className="space-y-4" onSubmit={handleUpdate}>
          <InputField
            label="Record Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. GitHub"
            error={errors.name}
          />
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
            placeholder="New password"
            error={errors.password}
          />
          <InputField
            label="Website URL"
            name="url"
            type="url"
            value={form.url}
            onChange={handleChange}
            placeholder="https://example.com"
            error={errors.url}
          />
          <div className="flex flex-col">
            <label htmlFor="notes" className="mb-1 text-sm text-purple-300 tracking-wider">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="px-4 py-2 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
              placeholder="Additional context (optional)"
            />
          </div>
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50"
            >
              Update Record
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={status === "submitting"}
              className="w-full py-2 bg-red-700 hover:bg-red-600 rounded-full font-semibold text-white transition duration-200 disabled:opacity-50 flex items-center justify-center"
            >
              <TrashIcon className="h-5 w-5 mr-2" />
              Delete
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
