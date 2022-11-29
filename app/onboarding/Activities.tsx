"use client";

// dependencies
import { useState } from "react";
import { useForm } from "react-hook-form";
// utilities
import { activityLengths } from "@utilities/constants";
// types/enums
import type { SubmitHandler } from "react-hook-form";
import type { Dispatch, SetStateAction, FormEvent } from "react";
import type { ActivitiesData, CategoriesData } from "@shared/types/types";

type FormValues = {
  activityInput: string;
  activityLength: string;
};

interface ActivitiesProps {
  categoriesData: CategoriesData;
  activitiesData: ActivitiesData;
  setActivitiesData: Dispatch<SetStateAction<ActivitiesData>>;
  handleSaveData: () => void;
}

const stepStrings: { [keyof: number]: string } = {
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
};

const Activities = ({
  categoriesData,
  activitiesData,
  setActivitiesData,
  handleSaveData,
}: ActivitiesProps): JSX.Element => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [actsFull, setActsFull] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const onSubmit: SubmitHandler<FormValues> = ({
    activityInput,
    activityLength,
  }: FormValues): void => {
    const idx = Object.values(activitiesData).findIndex(
      (act) => act.activity.length === 0
    );

    console.log("idx", idx);

    if (idx === -1) {
      setActsFull(true);
    } else {
      setActivitiesData((prevActs) => {
        const actsKey = Object.keys(activitiesData)[
          idx
        ] as keyof ActivitiesData;
        const newActs = { ...prevActs };
        newActs[actsKey] = {
          activity: activityInput,
          time: activityLength,
        };
        console.log(JSON.stringify(newActs));
        return newActs;
      });
      if (idx === 3) setActsFull(true);
      setStep((prev) => prev + 1);
    }
    reset();
  };

  const stepKey = stepStrings[step] as keyof ActivitiesData;

  return (
    <section className="">
      <h1 className="">Last step, almost there!</h1>
      <p className="">
        Let&apos;s add one activity for each category to get you fully set up.
      </p>
      <p className="">{step === 4 ? "lastly" : stepStrings[step]}&hellip;</p>
      <p className="">{categoriesData[stepKey]}:</p>
      {!actsFull && (
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <label></label>
          <input
            {...register("activityInput", {
              required: true,
              maxLength: 200,
              minLength: 1,
            })}
          />
          {errors.activityInput && (
            <p className="">{errors.activityInput.message}</p>
          )}
          <select
            className=""
            id="activityLength"
            {...register("activityLength", {
              required: true,
            })}
          >
            <option value="COUPLE">A couple minutes</option>
            <option value="FIVE">5-10 minutes</option>
            <option value="TEN">10-15 minutes</option>
            <option value="HALF-HOUR">A half hour</option>
            <option value="HOUR">An hour</option>
            <option value="HOURS">A couple hours</option>
            <option value="HALF">A half day</option>
            <option value="WHOLE">A whole day</option>
            <option value="WHOLE-PLUS">More than a day</option>
          </select>
          {errors.activityLength && (
            <p className="">{errors.activityLength.message}</p>
          )}
          <button type="submit" className="">
            Add
          </button>
        </form>
      )}
      <div className="">
        <ul className="">
          {(step > 1 || actsFull) && (
            <li className="">
              <h3 className="">{categoriesData.first}</h3>
              <p className="">
                {activitiesData.first.activity} - (
                {activityLengths[activitiesData.first.time]})
              </p>
            </li>
          )}
          {(step > 2 || actsFull) && (
            <li className="">
              <h3 className="">{categoriesData.second}</h3>
              <p className="">
                {activitiesData.second.activity} - (
                {activityLengths[activitiesData.second.time]})
              </p>
            </li>
          )}
          {(step > 3 || actsFull) && (
            <li className="">
              <h3 className="">{categoriesData.third}</h3>
              <p className="">
                {activitiesData.third.activity} - (
                {activityLengths[activitiesData.third.time]})
              </p>
            </li>
          )}
          {step > 3 && actsFull && (
            <li className="">
              <h3 className="">{categoriesData.fourth}</h3>
              <p className="">
                {activitiesData.fourth.activity} - (
                {activityLengths[activitiesData.fourth.time]})
              </p>
            </li>
          )}
        </ul>
      </div>
      <div className="">
        {actsFull && (
          <button
            type="button"
            id="finish-up"
            onClick={handleSaveData}
            className=""
          >
            Finish up -&gt;
          </button>
        )}
      </div>
    </section>
  );
};

export default Activities;
