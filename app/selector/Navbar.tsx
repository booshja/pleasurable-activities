"use client";

// dependencies
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// components
import Link from "next/link";

const Navbar = (): JSX.Element => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  const handleMenuOpen = (): void => {
    setOpen(true);
  };

  return (
    <header data-test="header-container">
      <Link href="/" data-test="logo-link">
        Pleasurable Activities
      </Link>
      <nav role="navigation" data-test="desktop-nav">
        <Link href="/" data-test="home-nav-link">
          Home
        </Link>
        <Link href="/selectors" data-test="selectors-nav-link">
          Selectors
        </Link>
        <Link href="/account" data-test="account-nav-link">
          Account
        </Link>
      </nav>
      <button
        type="button"
        onClick={handleMenuOpen}
        data-test="mobile-menu-button"
        aria-expanded={open ? "true" : "false"}
        aria-controls="mobile-menu"
      >
        🍔
      </button>
      <div id="mobile-menu" data-test="mobile-menu">
        <button
          type="button"
          onClick={() => setOpen(false)}
          data-test="closing-x"
        >
          X
        </button>
        <Link href="/" data-test="mobile-logo-link">
          Pleasurable Activities
        </Link>
        <nav role="navigation" data-test="mobile-nav">
          <Link href="/" data-test="home-mobile-nav-link">
            Home
          </Link>
          <Link href="/selectors" data-test="selectors-mobile-nav-link">
            Selectors
          </Link>
          <Link href="/account" data-test="account-mobile-nav-link">
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
