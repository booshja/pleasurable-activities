"use client";

// dependencies
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// components
import Link from "next/link";

const Navbar = (): JSX.Element => {
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="container flex items-center justify-between h-16 max-w-full px-5 border-b-2 lg:px-8"
      data-test="header-container"
    >
      <Link href="/" className="font-bold text-xl" data-test="logo-link">
        Happy Brain
      </Link>
      <nav
        className="hidden items-center justify-between md:flex md:gap-4"
        role="navigation"
        data-test="desktop-nav"
      >
        <Link
          href="/home"
          className={pathname === "/home" ? "font-bold" : ""}
          data-test="home-nav-link"
        >
          Home
        </Link>
        <Link
          href="/selector"
          className={pathname === "/selector" ? "font-bold" : ""}
          data-test="selectors-nav-link"
        >
          Selectors
        </Link>
        <Link
          href="/account"
          className={pathname === "/account" ? "font-bold" : ""}
          data-test="account-nav-link"
        >
          Account
        </Link>
        <p className="">Log Out</p>
      </nav>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="inline-flex items-center p2 ml-3 text-2xl md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="mobile-menu"
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((curr) => !curr)}
        data-test="mobile-menu-button"
      >
        🧠
      </button>
      <div
        className={`${
          open ? "absolute" : "hidden"
        } flex flex-col items-center top-0 left-0 w-full h-screen p-5 bg-slate-300`}
        id="mobile-menu"
        data-test="mobile-menu"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-3xl self-end hover:cursor-pointer"
          data-test="closing-x"
        >
          X
        </button>
        <Link
          href="/"
          className="font-bold text-3xl my-3"
          data-test="mobile-logo-link"
        >
          Happy Brain
        </Link>
        <nav
          className="mt-8 flex flex-col items-center gap-5"
          role="navigation"
          data-test="mobile-nav"
        >
          <Link
            href="/home"
            className={`text-3xl ${pathname === "/home" ? "font-bold" : ""}`}
            data-test="home-mobile-nav-link"
          >
            Home
          </Link>
          <Link
            href="/selector"
            className={`text-3xl ${
              pathname === "/selector" ? "font-bold" : ""
            }`}
            data-test="selectors-mobile-nav-link"
          >
            Selectors
          </Link>
          <Link
            href="/account"
            className={`text-3xl ${pathname === "/account" ? "font-bold" : ""}`}
            data-test="account-mobile-nav-link"
          >
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
