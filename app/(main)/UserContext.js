"use client";
import { userDetails } from "@/lib/api/user_api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import SessionExpired from "@/components/SessionExpired"; // new component

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const data = await userDetails();
        if (!data || !data.success) {
          router.replace("/sign-in");
          return;
        }

        if (data.is_expired) {
          setIsSessionExpired(true);
          setTimeout(() => {
            router.replace("/sign-in");
          }, 10000);
        }

        setUser(data.user);
      } catch (error) {
        console.error("User fetch failed:", error);
        router.replace("/sign-in");
      }
    };

    getUserDetails();
  }, [router]);

  const value = useMemo(() => ({ user }), [user]);

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
