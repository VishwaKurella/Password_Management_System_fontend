"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  // const pathName = usePathname();
  // let verify;
  // const router = useRouter();
  // if (pathName.endsWith("/verify-otp?id={id}")) {
  //   const verify = checkOtp();
  // } else if (pathName.endsWith("/reset-password?id={id}")) {
  //   const verify = checresetpassword();
  // } else if (pathName.endsWith("/set-masterkey?id={id}")) {
  //   const verify = chechmasterseyp();
  // } else {
  //   verify = true;
  // }
  // if (!verify) {
  //   router.back();
  // }
  return { children };
}
