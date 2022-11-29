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

  const handleMenuOpen = (): void => {
    setOpen(true);
  };

  return (
    <header className="" data-test="header-container">
      <Link href="/" className="" data-test="logo-link">
        Pleasurable Activities
      </Link>
      <nav className="" role="navigation" data-test="desktop-nav">
        <Link href="/" className="" data-test="home-nav-link">
          Home
        </Link>
        <Link href="/selectors" className="" data-test="selectors-nav-link">
          Selectors
        </Link>
        <Link href="/account" className="" data-test="account-nav-link">
          Account
        </Link>
      </nav>
      <button
        type="button"
        onClick={handleMenuOpen}
        className=""
        data-test="mobile-menu-button"
        aria-expanded={open ? "true" : "false"}
        aria-controls="mobile-menu"
      >
        🍔
      </button>
      <div id="mobile-menu" className="" data-test="mobile-menu">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className=""
          data-test="closing-x"
        >
          X
        </button>
        <Link href="/" className="" data-test="mobile-logo-link">
          Pleasurable Activities
        </Link>
        <nav className="" role="navigation" data-test="mobile-nav">
          <Link href="/" className="" data-test="home-mobile-nav-link">
            Home
          </Link>
          <Link
            href="/selectors"
            className=""
            data-test="selectors-mobile-nav-link"
          >
            Selectors
          </Link>
          <Link
            href="/account"
            className=""
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
