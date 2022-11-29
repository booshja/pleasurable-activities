import type { OnboardingPages } from "@shared/types/enums";

interface ProgressDisplayProps {
  currentPage: OnboardingPages;
}

const ProgressDisplay = ({
  currentPage,
}: ProgressDisplayProps): JSX.Element => {
  return (
    <div className="flex w-fit mx-auto">
      <div className="flex justify-center items-center p-2 border-2 border-black rounded-full h-10 w-10 mr-4">
        <p className="text-xl">{currentPage > 0 ? "1" : "1"}</p>
      </div>
      <div className="flex justify-center items-center p-2 border-2 border-black rounded-full h-10 w-10 mr-4">
        <p className="text-xl">{currentPage > 1 ? "2" : ""}</p>
      </div>
      <div className="flex justify-center items-center p-2 border-2 border-black rounded-full h-10 w-10">
        <p className="text-xl">{currentPage > 2 ? "3" : ""}</p>
      </div>
    </div>
  );
};

export default ProgressDisplay;
