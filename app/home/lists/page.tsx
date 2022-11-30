require("server-only");

// components
import CategoryList from "./CategoryList";
// types/enums
import { SavedCategory } from "@shared/types/types";

// todo: remove next line after fetching implemented
import userList from "../../../fixtures/userList.json";

type Lists = {
  [keyof: string]: SavedCategory;
};

const UserLists = (): JSX.Element => {
  // todo: fetch user's lists here
  const lists: Lists = userList;

  return (
    <section className="p-5 flex flex-col gap-5 lg:mx-auto lg:w-3/4 max-w-7xl">
      {Object.keys(userList).map((key: string) => {
        const category = lists[key];
        return <CategoryList category={category} forKey={key} />;
      })}
    </section>
  );
};

export default UserLists;
