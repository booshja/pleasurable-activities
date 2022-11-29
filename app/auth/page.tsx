require("server-only");

// components
import Link from "next/link";

const Auth = (): JSX.Element => {
  return (
    <section className="container mx-auto px-6">
      <h1 className="font-bold text-3xl text-center mt-5 mb-2">Happy Brain</h1>
      <p className="text-center">Log In or Sign Up</p>
      <div className="container flex justify-around w-48 mx-auto my-6">
        <Link
          className="border-2 border-black rounded-sm py-1 px-2"
          href="/auth/login"
        >
          Log In
        </Link>
        <Link
          className="border-2 border-black rounded-sm py-1 px-2"
          href="/auth/signup"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default Auth;
