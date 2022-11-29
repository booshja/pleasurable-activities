require("server-only");

// components
import Link from "next/link";

export default function AllSelectors() {
  return (
    <section className="">
      <h1 className="">Activity Selectors</h1>
      <h2 className="">Which type of selector would you like to use?</h2>
      <ul className="">
        <li className="">
          <Link href="/selector/single">Get an Activity</Link>
        </li>
        <li>
          <Link href="/selector/list">Get a list of Activities</Link>
        </li>
        <li>
          <Link href="/selector/random">Get a random Activity</Link>
        </li>
      </ul>
    </section>
  );
}
