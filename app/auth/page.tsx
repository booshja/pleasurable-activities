require("server-only");

// components
import Link from "next/link";

const Auth = (): JSX.Element => {
  return (
    <section className="">
      <h1 className="">Pleasurable Activities</h1>
      <p className="">Log In or Sign Up</p>
      <div className="">
        <Link className="" href="/auth/login">
          Log In
        </Link>
        <Link className="" href="/auth/signup">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default Auth;
