require("server-only");

// components
// import Image from "next/image";
import NavbarLoggedOut from "@shared/components/NavbarLoggedOut";

export default function Landing(): JSX.Element {
  return (
    <>
      <NavbarLoggedOut />
      <main className="" data-test="page-container">
        <section className="" data-test="landing-hero">
          <h1 className="" data-test="landing-hero-title">
            Pleasurable Activities
          </h1>
          <p className="" data-test="landing-hero-text">
            An app to help you choose a pleasurable activity to do!
          </p>
        </section>
        <section className="" data-test="landing-steps">
          <div className="" data-test="landing-step-single">
            <h3 className="" data-test="landing-step-title">
              1:
            </h3>
            <p className="" data-test="landing-step-text">
              Choose a category
            </p>
          </div>
          <div className="" data-test="landing-step-single">
            <h3 className="" data-test="landing-step-title">
              2:
            </h3>
            <p className="" data-test="landing-step-text">
              Pick how much time you have
            </p>
          </div>
          <div className="" data-test="landing-step-single">
            <h3 className="" data-test="landing-step-title">
              3:
            </h3>
            <p className="" data-test="landing-step-text">
              Get your results and go enjoy yourself!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
