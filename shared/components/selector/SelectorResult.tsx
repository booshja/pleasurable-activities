"use client";

// types/enums
import { SavedActivity, SavedPopulatedCategory } from "@shared/types/types";

interface SelectorResultProps {
  type: "single" | "list" | "random";
  activityIdx: number | null;
  category: SavedPopulatedCategory | null;
}

const SelectorResult = ({
  type,
  category,
  activityIdx,
}: SelectorResultProps): JSX.Element => {
  if (activityIdx === null || category === null) return <p>Error!</p>;

  let activity: SavedActivity;
  let activities: SavedActivity[];

  if (type === "list") {
    activities = category.activities;
  } else {
    activity = category?.activities[activityIdx];
  }

  return (
    <section className="">
      <h1 className="">
        {type === "single" &&
          `A single pleasurable activity from the ${category.name} category, lasting ${category.activities[activityIdx].time}:`}
        {/* {type === "random" &&
          `A random pleasurable activity, lasting ${activity.time}`} */}
        {/* {type === "list" &&
          `A list of activities from the "${category}" category, lasting ${activity.time}:`} */}
      </h1>
      {(type === "single" || type === "random") && (
        <p className="">{category.activities[activityIdx].activity}</p>
      )}
      {/* {type === "list" && <ul className="">{}</ul>} */}
    </section>
  );
};

export default SelectorResult;
