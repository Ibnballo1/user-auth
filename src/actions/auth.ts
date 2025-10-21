"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function serverSignIn(email: string, password: string) {
  const response = await auth.api.signInEmail({
    body: { email, password },
    asResponse: true,
  });

  if (!response.ok) {
    throw new Error("Invalid email or password");
  }

  return response;
}

export async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

export async function signOutServerAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/auth/signin");
}
