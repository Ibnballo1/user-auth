import { authClient } from "./auth-client";

const { data, error } = await authClient.signIn.email(
  {
    /**
     * The user email
     */
    email: "admin@osischool.com",
    /**
     * The user password
     */
    password: "password123",
    /**
     * A URL to redirect to after the user verifies their email (optional)
     */
    callbackURL: "/dashboard",
    /**
     * remember the user session after the browser is closed.
     * @default true
     */
    rememberMe: false,
  },
  {
    //callbacks
  }
);
