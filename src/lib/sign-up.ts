import { authClient } from "@/lib/auth-client"; //import the auth client

// const email = "user@example.com"; // TODO: Get from form input
// const password = "password123"; // TODO: Get from form input
// const name = "User Name"; // TODO: Get from form input
// const image = ""; // TODO: Get from form input (optional)

const { data, error } = await authClient.signUp.email(
  {
    email: "admin@osischool.com", // user email address
    password: "password123", // user password -> min 8 characters by default
    name: "Admin User", // user display name
    image: "https://example.com/image.png", // User image URL (optional)
    callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
  },
  {
    onRequest: (ctx) => {
      //show loading
      console.log("Signing up...");
    },
    onSuccess: (ctx) => {
      //redirect to the dashboard or sign in page
      console.log("Sign-up successful!", ctx.data);
    },
    onError: (ctx) => {
      // display the error message
      alert(ctx.error.message);
    },
  }
);
