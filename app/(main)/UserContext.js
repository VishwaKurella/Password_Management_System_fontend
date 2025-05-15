"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import SessionExpired from "@/components/SessionExpired";
import SetMasterKeyModel from "@/components/SetMasterKeyModel";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const [masterKeySet, setMasterKeySet] = useState(false);
  const [key, setKey] = useState(false);
  const [salt, setSalt] = useState();
  const [entries, setEntries] = useState();
  const router = useRouter();

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8080/api/request/me", {
  //         method: "GET",
  //         credentials: "include",
  //         cache: "no-store",
  //       });

  //       if (!res.ok) {
  //         router.replace("/sign-in");
  //         return;
  //       }

  //       const data = await res.json();
  //       console.log(data);

  //       if (data.is_expired) {
  //         setIsSessionExpired(true);
  //         setTimeout(() => {
  //           router.replace("/sign-in");
  //         }, 5000);
  //         return;
  //       }

  //       if (!data.is_master_key_set) {
  //         setMasterKeySet(false);
  //       } else {
  //         setMasterKeySet(true);
  //       }

  //       setUser({
  //         name: data.name,
  //         email: data.email,
  //         salt: data.salt,
  //         id: data.id,
  //       });
  //     } catch (error) {
  //       console.error("User fetch failed:", error);
  //       router.replace("/sign-in");
  //     }
  //   };

  //   getUserDetails();
  // }, [router]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/request/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const data = await res.json();
        console.log(data);

        if (data.is_expired) {
          setIsSessionExpired(true);
          setTimeout(() => {
            router.replace("/sign-in");
          }, 5000);
          return;
        }

        if (!data.success) {
          router.replace("/sign-in");
          return;
        }

        setMasterKeySet(data.is_master_key_set);
        setSalt(data.salt);
        setUser({
          name: data.name,
          email: data.email,
          id: data.id,
        });
      } catch (error) {
        console.error("User fetch failed:", error);
        router.replace("/sign-in");
      }
    };

    getUserDetails();
  }, []);

  const value = useMemo(
    () => ({
      user,
      setMasterKeySet,
      masterKeySet,
      key,
      setKey,
      setSalt,
      salt,
      entries,
      setEntries,
      isSessionExpired,
      setIsSessionExpired,
    }),
    [user, masterKeySet, key, salt, entries, isSessionExpired]
  );

  return (
    <UserContext.Provider value={value}>
      {isSessionExpired ? <SessionExpired /> : children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
