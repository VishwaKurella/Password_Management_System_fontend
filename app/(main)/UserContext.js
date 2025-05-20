// "use client";

// import { useRouter } from "next/navigation";
// import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import SessionExpired from "@/components/SessionExpired";

// const UserContext = createContext(null);

// export function UserProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [isSessionExpired, setIsSessionExpired] = useState(false);
//   const [masterKeySet, setMasterKeySet] = useState(false);
//   const [key, setKey] = useState(false);
//   const [salt, setSalt] = useState();
//   const [entries, setEntries] = useState();
//   const router = useRouter();

//   // useEffect(() => {
//   //   const getUserDetails = async () => {
//   //     try {
//   //       const res = await fetch("http://localhost:8080/api/request/me", {
//   //         method: "GET",
//   //         credentials: "include",
//   //         cache: "no-store",
//   //       });

//   //       if (!res.ok) {
//   //         router.replace("/sign-in");
//   //         return;
//   //       }

//   //       const data = await res.json();
//   //       console.log(data);

//   //       if (data.is_expired) {
//   //         setIsSessionExpired(true);
//   //         setTimeout(() => {
//   //           router.replace("/sign-in");
//   //         }, 5000);
//   //         return;
//   //       }

//   //       if (!data.is_master_key_set) {
//   //         setMasterKeySet(false);
//   //       } else {
//   //         setMasterKeySet(true);
//   //       }

//   //       setUser({
//   //         name: data.name,
//   //         email: data.email,
//   //         salt: data.salt,
//   //         id: data.id,
//   //       });
//   //     } catch (error) {
//   //       console.error("User fetch failed:", error);
//   //       router.replace("/sign-in");
//   //     }
//   //   };

//   //   getUserDetails();
//   // }, [router]);

//   useEffect(() => {
//     const getUserDetails = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/request/me", {
//           method: "GET",
//           credentials: "include",
//           cache: "no-store",
//         });

//         const data = await res.json();
//         console.log(data);

//         if (data.is_expired) {
//           setIsSessionExpired(true);
//           setTimeout(() => {
//             router.replace("/sign-in");
//           }, 5000);
//           return;
//         }

//         if (!data.success) {
//           router.replace("/sign-in");
//           return;
//         }

//         setMasterKeySet(data.is_master_key_set);
//         setSalt(data.salt);
//         setUser({
//           name: data.name,
//           email: data.email,
//           id: data.id,
//         });
//       } catch (error) {
//         console.error("User fetch failed:", error);
//         router.replace("/sign-in");
//       }
//     };

//     getUserDetails();
//   }, []);

//   const value = useMemo(
//     () => ({
//       user,
//       setMasterKeySet,
//       masterKeySet,
//       key,
//       setKey,
//       setSalt,
//       salt,
//       entries,
//       setEntries,
//       isSessionExpired,
//       setIsSessionExpired,
//     }),
//     [user, masterKeySet, key, salt, entries, isSessionExpired]
//   );

//   return (
//     <UserContext.Provider value={value}>
//       {isSessionExpired ? <SessionExpired /> : children}
//     </UserContext.Provider>
//   );
// }

// export function useUser() {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// }

"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [salt, setSalt] = useState(null);
  const [key, setKey] = useState(null);
  const [masterKeySet, setMasterKeySet] = useState(false);
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const [loadingMe, setLoadingMe] = useState(true);

  // Centralized fetch wrapper
  const secureFetch = useCallback(async (url, options = {}) => {
    const res = await fetch(url, {
      credentials: "include",
      ...options,
    });
    let json;
    try {
      json = await res.json();
    } catch (_) {
      return { res };
    }
    if (res.status === 401 || json.is_expired) {
      setIsSessionExpired(true);
      throw new Error(json.message || "Session expired");
    }
    return { res, json };
  }, []);

  // Fetch initial user metadata (salt, masterKeySet, user info)
  useEffect(() => {
    secureFetch(`${BACKEND_BASE}/api/request/me`, { method: "GET" })
      .then(({ json }) => {
        if (json.is_expired) {
          setIsSessionExpired(true);
          return;
        }
        setUser({ name: json.name, email: json.email } || null);
        setSalt(json.salt || null);
        setMasterKeySet(json.is_master_key_set);
      })
      .catch((err) => {
        console.warn("Me fetch failed:", err);
      })
      .finally(() => setLoadingMe(false));
  }, [secureFetch]);

  // Redirect on session expiry
  useEffect(() => {
    if (isSessionExpired) {
      handleSessionExpire();
      router.push("/sign-in");
    }
  }, [isSessionExpired, router]);

  return (
    <UserContext.Provider
      value={{
        user,
        salt,
        key,
        masterKeySet,
        isSessionExpired,
        loadingMe,
        setSalt,
        setKey,
        setMasterKeySet,
        setIsSessionExpired,
        secureFetch,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within UserProvider");
  }
  return ctx;
}

const handleSessionExpire = async () => {
  try {
    const res = await fetch("/api/auth/logout", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    if (data.success) {
      router.replace("/");
    } else {
      console.error("Logout failed:", data);
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
