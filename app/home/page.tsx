require("server-only");

// dependencies
// import axios from "axios";
// components
import Link from "next/link";

interface UserHomeProps {}

const UserHome = ({}: UserHomeProps): JSX.Element => {
  // todo: replace with fetching user
  const user = "Jacob";

  return (
    <section>
      <h2 className="">Hey there, {user}!</h2>
      <div className="">
        <h1 className="">Choose an Activity</h1>
        <h3 className="">Use the Selector:</h3>
        <Link href="/selector/list">Get a list -&gt;</Link>
        <Link href="/selector/single">Get an activity -&gt;</Link>
        <Link href="/selector/random">Get a random activity -&gt;</Link>
        <Link href="/home/lists">Peruse your Lists -&gt;</Link>
      </div>
      <div className="">
        <Link href="/selector/activities/new" className="">
          Add an Activity -&gt;
        </Link>
        <Link href="/selector/activities" className="">
          View/Edit your Activities -&gt;
        </Link>
        <Link href="/selector/categories" className="">
          View/Edit your Categories -&gt;
        </Link>
      </div>
    </section>
  );
};

export default UserHome;
