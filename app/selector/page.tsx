require("server-only");

// components
import Link from "next/link";

export default function AllSelectors() {
  return (
    <section className="p-5 flex flex-col gap-2 md:max-w-fit md:mx-auto">
      <h1 className="font-bold text-3xl">Activity Selectors</h1>
      <h2 className="text-xl ml-2">
        Which type of selector would you like to use?
      </h2>
      <ul className="flex flex-col gap-2 border-t-2 p-2">
        <li className="">
          <Link href="/selector/single" className="font-semibold text-lg">
            Single Activity -&gt;
          </Link>
        </li>
        <li>
          <Link href="/selector/list" className="font-semibold text-lg">
            List of Activities -&gt;
          </Link>
        </li>
        <li>
          <Link href="/selector/random" className="font-semibold text-lg">
            Random Single Activity -&gt;
          </Link>
        </li>
      </ul>
    </section>
  );
}
