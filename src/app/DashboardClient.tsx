"use client";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function DashboardClient() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    authClient.getSession().then((session) => {
      if (!session) window.location.href = "/signin";
      else setUser(session.data?.user);
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return <h1>Hello {user.name}</h1>;
}
