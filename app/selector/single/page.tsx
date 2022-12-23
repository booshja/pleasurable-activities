"use client";

// dependencies
import { useState } from "react";
// components
import CategoryGrid from "@shared/components/selector/CategoryGrid";
import DurationGrid from "@shared/components/selector/DurationGrid";
import SelectorResult from "@shared/components/selector/SelectorResult";
// utilities
import { activityLengths } from "@utilities/constants";
// types/enums
import { SavedActivity, SavedPopulatedCategory } from "@shared/types/types";
// todo: remove next line when adding fetching
import categoriesList from "../../../fixtures/categoriesList.json";

enum SingleSelectorSteps {
  CATEGORY,
  DURATION,
  RESULT,
}

export default function SingleSelector() {
  // todo: replace this with fetching categories
  const categories = categoriesList.categories as SavedPopulatedCategory[];

  const [step, setStep] = useState<SingleSelectorSteps>(
    SingleSelectorSteps.CATEGORY
  );
  const [category, setCategory] = useState<SavedPopulatedCategory | null>(null);
  const [activity, setActivity] = useState<number | null>(null);

  const handleCatSelection = (cat: SavedPopulatedCategory): void => {
    setCategory(cat);
    setStep(SingleSelectorSteps.DURATION);
  };

  const handleDurSelection = (durKey: string): void => {
    if (category === null) {
      setStep(SingleSelectorSteps.CATEGORY);
    } else {
      const acts = category.activities.filter((act) => {
        act.time === durKey;
      });
      setActivity(Math.floor(Math.random() * acts.length));
      setStep(SingleSelectorSteps.RESULT);
    }
  };

  return (
    <section className="p-5 max-w-screen-lg xl:mx-auto">
      <h1 className="font-bold text-2xl mb-2">Single Activity Selector</h1>
      <p className="text-lg ml-2 mb-4">
        {step === SingleSelectorSteps.CATEGORY &&
          "What type of activity would you like to do?"}
        {step === SingleSelectorSteps.DURATION && "How long do you have?"}
        {step === SingleSelectorSteps.RESULT && "Here's your activity!"}
      </p>
      {step === SingleSelectorSteps.CATEGORY && (
        <CategoryGrid
          categories={categories}
          handleCatSelection={handleCatSelection}
        />
      )}
      {step === SingleSelectorSteps.DURATION && (
        <DurationGrid handleDurSelection={handleDurSelection} />
      )}
      {step === SingleSelectorSteps.RESULT && (
        <SelectorResult
          type="single"
          activityIdx={activity}
          category={category}
        />
      )}
    </section>
  );
}
