require("server-only");

// components
import Link from "next/link";
// types/enums
import { SavedCategory } from "@shared/types/types";

interface CategoryListProps {
  category: SavedCategory;
  forKey: string;
}

const CategoryList = ({ category, forKey }: CategoryListProps): JSX.Element => {
  return (
    <article className="" key={forKey}>
      <h3 className="font-bold text-xl">
        <Link href={`/categories/${category._id}`}>{category.name}</Link>
      </h3>
      <h3 className="font-bold text-lg">Activities:</h3>
      <ul className="flex flex-col gap-1">
        {category.activities.map((act) => (
          <li key={act._id} className="border-2 rounded-lg p-2 w-11/12 mx-auto">
            <p className="">{act.activity}</p>
            <p className="ml-2">{act.time}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CategoryList;
