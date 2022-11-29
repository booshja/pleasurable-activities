"use client";

// dependencies
import { useState } from "react";
import { useForm } from "react-hook-form";
// types/enums
import type { Dispatch, SetStateAction } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { CategoriesData } from "./page";

type FormValues = {
  categoryInput: string;
};

interface CategoriesProps {
  nextPage: () => void;
  categoriesData: CategoriesData;
  setCategoriesData: Dispatch<SetStateAction<CategoriesData>>;
  name: string;
}

const Categories = ({
  nextPage,
  categoriesData,
  setCategoriesData,
  name,
}: CategoriesProps): JSX.Element => {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [catsFull, setCatsFull] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = ({
    categoryInput,
  }: FormValues): void => {
    const idx = Object.values(categoriesData).findIndex(
      (val) => val.length === 0
    );

    if (idx === -1) {
      setCatsFull(true);
    } else {
      setCategoriesData((prevCats) => {
        const catsKey = Object.keys(categoriesData)[
          idx
        ] as keyof CategoriesData;
        const newCats = { ...prevCats };
        newCats[catsKey] = categoryInput;
        return newCats;
      });
      if (idx === 3) setCatsFull(true);
    }
    resetField("categoryInput");
  };

  return (
    <section className="">
      <h1 className="">Great! Thanks, {name}!</h1>
      {!catsFull && (
        <p className="">
          Next up, let&apos;s choose your categories. We&apos;ll pick 4 to use
          with questions.
        </p>
      )}
      <p className="">
        We&apos;ll use these categories in our selector tool to help you narrow
        down choices of activities.
      </p>
      {!catsFull && (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="categoryInput" className="">
            Go ahead and add those categories here:
          </label>
          <input
            type="text"
            id="categoryInput"
            placeholder="Sports"
            className=""
            {...register("categoryInput", {
              required: true,
              minLength: 1,
              maxLength: 200,
            })}
          />
          {errors.categoryInput && (
            <p className="">{errors.categoryInput.message}</p>
          )}
          <button type="submit" className="">
            Add
          </button>
        </form>
      )}
      <ol>
        {categoriesData.first.length > 0 && (
          <li>
            <p>1: {categoriesData.first}</p>
          </li>
        )}
        {categoriesData.second.length > 0 && (
          <li>
            <p>2: {categoriesData.second}</p>
          </li>
        )}
        {categoriesData.third.length > 0 && (
          <li>
            <p>3: {categoriesData.third}</p>
          </li>
        )}
        {catsFull && (
          <li>
            <p>4: {categoriesData.fourth}</p>
          </li>
        )}
      </ol>
      {catsFull && (
        <div>
          <button type="button" className="" onClick={() => nextPage()}>
            Awesome! Last step -&gt;
          </button>
        </div>
      )}
    </section>
  );
};

export default Categories;
