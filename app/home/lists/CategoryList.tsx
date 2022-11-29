require("server-only");

// types/enums
import { SavedCategory } from "@shared/types/types";

interface CategoryListProps {
  category: SavedCategory;
}

const CategoryList = ({ category }: CategoryListProps): JSX.Element => {
  return (
    <article className="">
      <h3 className="">Category: {category.name}</h3>
      <h3 className="">Activities:</h3>
      <ul className="">
        {category.activities.map((act) => (
          <li key={act._id}>
            <p className="">Activity: {act.activity}</p>
            <p className="">Length: {act.time}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CategoryList;
