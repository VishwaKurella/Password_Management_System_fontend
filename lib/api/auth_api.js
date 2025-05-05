"use server";

import { auth } from "@/auth";

const BACKEND_URI = process.env.BACKEND_URI;

export async function createUser({ formData }) {
  try {
    const res = await fetch(`${BACKEND_URI}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
      cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.message || "Failed to create user");
    }
    return parseStringify(result);
  } catch (error) {
    console.error(error);
    return new Error("Server error, please try again.");
  }
}

function parseStringify(data) {
  return JSON.parse(JSON.stringify(data));
}

export async function login({ formData }) {
  console.log(formData);
  try {
    let res = await fetch(`http://localhost:8080/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
      cache: "no-store",
    });
    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.message || "Failed to sign in user");
    }
    return parseStringify(result);
  } catch (err) {
    console.log(err);
    return new Error("Server error, please try again.");
  }
}

export async function authenticate() {
  try {
    const user_data = (await auth()).user;
    delete user_data.image;
    console.log(user_data);
    if (!user_data) {
      throw new Error("Unable to login user. Please try again.");
    }
    const res = await fetch(`${BACKEND_URI}/auth/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
      credentials: "include",
      cache: "no-store",
    });
    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(
        result.message || "Unable to login user. Please try again."
      );
    }
    return parseStringify(result);
  } catch (err) {
    console.log(err);
    return new Error("Server error, please try again.");
  }
}
