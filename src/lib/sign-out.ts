import { authClient } from "./auth-client";
import { useRouter } from "next/navigation";

const router = useRouter();

await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login"); // redirect to login page
    },
  },
});
