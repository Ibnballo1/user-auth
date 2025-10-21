// app/components/SignOutButton.tsx
"use client";

import { useTransition } from "react";
import { signOutServerAction } from "@/actions/auth";

export default function SignOutButton() {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => signOutServerAction())}
      disabled={pending}
      className="bg-red-600 text-white px-4 py-2 rounded-xl"
    >
      {pending ? "Signing Out..." : "Sign Out"}
    </button>
  );
}
