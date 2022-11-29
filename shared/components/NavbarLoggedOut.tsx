require("server-only");

// components
import Link from "next/link";

interface NavbarLoggedOutProps {
  onboarding: boolean;
}

const NavbarLoggedOut = ({ onboarding }: NavbarLoggedOutProps): JSX.Element => {
  return (
    <header className="flex justify-between items-center h-10 mx-auto mb-3 px-4 border-b-2">
      <Link href="/" className="font-medium text-xl" data-test="logo-link">
        Happy Brain
      </Link>
      {!onboarding && (
        <Link href="/auth" className="">
          Log In/Sign Up
        </Link>
      )}
    </header>
  );
};

export default NavbarLoggedOut;
