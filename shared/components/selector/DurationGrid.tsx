"use client";

// dependencies
// import {} from '';
// components
// import {} from '';
// utilities
import { activityLengths } from "@utilities/constants";

interface DurationGridProps {
  handleDurSelection: (dur: string) => void;
}

const DurationGrid = ({
  handleDurSelection,
}: DurationGridProps): JSX.Element => {
  return (
    <ul className="">
      {Object.keys(activityLengths).map((timeKey) => (
        <li
          className="flex items-center justify-center border-2 border-slate-400 p-10 font-bold text-xl bg-slate-200 rounded-sm hover:cursor-pointer"
          onClick={() => handleDurSelection(timeKey)}
          key={timeKey}
        >
          {activityLengths[timeKey]}
        </li>
      ))}
    </ul>
  );
};

export default DurationGrid;
