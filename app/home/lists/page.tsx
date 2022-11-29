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
    <section className="">
      {Object.keys(userList).map((key: string) => {
        const category = lists[key];
        return <CategoryList category={category} key={key} />;
      })}
    </section>
  );
};

export default UserLists;
