require("server-only");

// components
// import Image from "next/image";
import Link from "next/link";

export default function Landing(): JSX.Element {
  return (
    <>
      <header data-test="header-container">
        <Link href="/" data-test="logo-link">
          Pleasurable Activities
        </Link>
        <Link href="/auth">Log In/Sign Up</Link>
      </header>
      <main data-test="page-container">
        <section data-test="landing-hero">
          <h1 data-test="landing-hero-title">Pleasurable Activities</h1>
          <p data-test="landing-hero-text">
            An app to help you choose a pleasurable activity to do!
          </p>
        </section>
        <section data-test="landing-steps">
          <div data-test="landing-step-single">
            <h3 data-test="landing-step-title">1:</h3>
            <p data-test="landing-step-text">Choose a category</p>
          </div>
          <div data-test="landing-step-single">
            <h3 data-test="landing-step-title">2:</h3>
            <p data-test="landing-step-text">Pick how much time you have</p>
          </div>
          <div data-test="landing-step-single">
            <h3 data-test="landing-step-title">3:</h3>
            <p data-test="landing-step-text">
              Get your results and go enjoy yourself!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
