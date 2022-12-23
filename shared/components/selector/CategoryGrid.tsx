"use client";

// dependencies
// import {} from '';
// components
// import {} from '';
// types/enums
import { SavedPopulatedCategory } from "@shared/types/types";

interface CategoryGridProps {
  categories: SavedPopulatedCategory[];
  handleCatSelection: (catId: SavedPopulatedCategory) => void;
}

const CategoryGrid = ({
  categories,
  handleCatSelection,
}: CategoryGridProps): JSX.Element => {
  return (
    <ul className=" md:w-3/4 md:mx-auto lg:w-1/2" id="grid">
      {categories.map((cat) => (
        <li
          className="flex items-center justify-center border-2 border-slate-400 p-12 font-bold text-xl bg-slate-200 rounded-sm hover:cursor-pointer"
          onClick={() => handleCatSelection(cat)}
          key={cat._id}
        >
          {cat.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryGrid;
