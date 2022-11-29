require("server-only");

// dependencies
// import axios from "axios";
// components
import Link from "next/link";

const UserHome = (): JSX.Element => {
  // todo: replace with fetching user
  const user = "Jacob";

  return (
    <section className="p-5 max-w-screen-xl mx-auto">
      <h2 className="font-bold text-3xl">Hey there, {user}!</h2>
      <div className="py-4 border-b-2 border-b-slate-600 md:w-2/3 mx-auto">
        <h1 className="font-bold text-3xl mb-2 underline">
          Choose an Activity
        </h1>
        <h4 className="font-bold text-2xl mb-2 ml-2">Use the Selectors:</h4>
        <div className="flex flex-col gap-2 ml-5">
          <Link href="/selector/single" className="text-xl">
            Get an activity -&gt;
          </Link>
          <Link href="/selector/list" className="text-xl">
            Get a list -&gt;
          </Link>
          <Link href="/selector/random" className="text-xl">
            Get a random activity -&gt;
          </Link>
          <Link href="/home/lists" className="text-xl">
            Peruse your Lists -&gt;
          </Link>
        </div>
      </div>
      <div className="pt-4 md:w-2/3 mx-auto">
        <h3 className="font-bold text-3xl mb-2 underline">View/Edit</h3>
        <h4 className="font-bold text-2xl mb-2 ml-2">
          Categories &amp; Activities:
        </h4>
        <div className="flex flex-col gap-2 ml-5">
          <Link href="/selector/activities/new" className="text-xl">
            Add an Activity -&gt;
          </Link>
          <Link href="/selector/activities" className="text-xl">
            View/Edit your Activities -&gt;
          </Link>
          <Link href="/selector/categories" className="text-xl">
            View/Edit your Categories -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserHome;
