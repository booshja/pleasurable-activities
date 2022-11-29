"use client";

// dependencies
import { useForm } from "react-hook-form";
// types/enums
import type { SubmitHandler } from "react-hook-form";
import type { Dispatch, SetStateAction } from "react";
import type { UserData } from "@shared/types/types";

type FormValues = {
  userName: string;
};

interface NameProps {
  nextPage: () => void;
  setUserData: Dispatch<SetStateAction<UserData>>;
}

const Name = ({ nextPage, setUserData }: NameProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = ({ userName }: FormValues) => {
    setUserData({ name: userName });
    nextPage();
  };

  return (
    <section className="">
      <h1 className="">First up&hellip;</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <label className="" htmlFor="userName">
          What should we call you?
        </label>
        <input
          type="text"
          id="userName"
          placeholder="Namey McNameysonn"
          className=""
          {...register("userName", {
            required: true,
            maxLength: 200,
            minLength: 1,
          })}
          aria-invalid={errors.userName ? "true" : "false"}
        />
        {errors.userName && <p role="alert">{errors.userName.message}</p>}
        <button className="" type="submit">
          Next -&gt;
        </button>
      </form>
    </section>
  );
};

export default Name;
