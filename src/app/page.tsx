import Link from "next/link";
import { getServerSession } from "@/actions/auth";
import SignOutButton from "@/components/signOutButton";
// import { useRouter } from "next/navigation";
export default async function Home() {
  // Fetch current user session (BetterAuth helper)
  const session = await getServerSession();
  // const router = useRouter();
  // async function handleSignOut() {
  //   await fetch("/api/auth/sign-out", { method: "POST" });
  //   router.push("/auth/login"); // or homepage
  // }

  return (
    <main className="flex flex-col items-center h-screen justify-center gap-3">
      {session ? (
        <>
          <h1 className="text-2xl font-bold">
            Welcome, {session.user.name} 👋
          </h1>
          <p className="text-gray-600">You’re now logged in!</p>

          {/* <form onSubmit={handleSignOut}> */}
          {/* <button
            onClick={() => signOutServerAction()}
            className="bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            Logout
          </button> */}
          {/* </form> */}
          <SignOutButton />
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
          <p className="text-gray-600">Login or Signup to continue</p>

          <Link
            href="/auth/register"
            className="p-2 bg-green-700 font-bold text-center text-white rounded-2xl"
          >
            Get Started
          </Link>
        </>
      )}
    </main>
  );
}
