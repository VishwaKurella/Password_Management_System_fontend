"use server";

import { signIn, signOut } from "../../auth.js";

export const signInGitHub = async () => {
  await signIn("github", { redirectTo: "/api/auth/verify-session" });
};

export const signOutGitHub = async () => {
  await signOut("github");
};

export const signInGoogle = async () => {
  await signIn("google", { redirectTo: "/api/auth/verify-session" });
};

export const signOutGoogle = async () => {
  await signOut("google");
};
