"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="">
      <p className="">Something went wrong!</p>
      <button className="" onClick={() => reset()}>
        Reset error boundary
      </button>
    </div>
  );
}
