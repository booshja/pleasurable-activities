require("server-only");

// components
import Link from "next/link";

const NavbarLoggedOut = (): JSX.Element => {
  return (
    <header className="">
      <Link href="/" className="" data-test="logo-link">
        Pleasurable Activities
      </Link>
      <Link href="/auth" className="">
        Log In/Sign Up
      </Link>
    </header>
  );
};

export default NavbarLoggedOut;
