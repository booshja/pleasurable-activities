import type { OnboardingPages } from "./page";

interface ProgressDisplayProps {
  currentPage: OnboardingPages;
}

const ProgressDisplay = ({
  currentPage,
}: ProgressDisplayProps): JSX.Element => {
  return (
    <div>
      <p>{currentPage > 0 ? "1" : ""}</p>
      <span></span>
      <p>{currentPage > 1 ? "2" : ""}</p>
      <span></span>
      <p>{currentPage > 2 ? "3" : ""}</p>
    </div>
  );
};

export default ProgressDisplay;
