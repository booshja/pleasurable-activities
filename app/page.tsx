require("server-only");

// components
import NavbarLoggedOut from "@shared/components/NavbarLoggedOut";

export default function Landing(): JSX.Element {
  return (
    <>
      <NavbarLoggedOut />
      <main className="container px-4 mx-auto" data-test="page-container">
        <section className="" data-test="landing-hero">
          <h1
            className="font-bold text-3xl text-center my-5"
            data-test="landing-hero-title"
          >
            Happy Brain
          </h1>
          <p className="text-center mb-4" data-test="landing-hero-text">
            An app to help you choose a pleasurable activity to do!
          </p>
        </section>
        <section
          className="container md:p-2 md:flex md:justify-between md:items-center md:border-2 md:border-black md:bg-slate-500 lg:max-w-screen-md lg:mx-auto"
          data-test="landing-steps"
        >
          <div
            className="border-2 border-black mb-4 p-2 bg-slate-400 md:mb-0"
            data-test="landing-step-single"
          >
            <h3
              className="text-center text-xl font-bold"
              data-test="landing-step-title"
            >
              1
            </h3>
            <p className="text-center" data-test="landing-step-text">
              Choose a category
            </p>
          </div>
          <div
            className="border-2 border-black mb-4 p-2 bg-slate-400 md:mb-0"
            data-test="landing-step-single"
          >
            <h3
              className="text-center text-xl font-bold"
              data-test="landing-step-title"
            >
              2
            </h3>
            <p className="text-center" data-test="landing-step-text">
              Pick how much time you have
            </p>
          </div>
          <div
            className="border-2 border-black p-2 bg-slate-400"
            data-test="landing-step-single"
          >
            <h3
              className="text-center text-xl font-bold"
              data-test="landing-step-title"
            >
              3
            </h3>
            <p className="text-center" data-test="landing-step-text">
              See your activity and go enjoy yourself!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
