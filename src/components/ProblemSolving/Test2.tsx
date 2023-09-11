import { fTest2 } from "@/utils/ProblemSolvingFunction";
import React from "react";

const Test2 = () => {
  // Example
  const arr = [-10, -20, 0, 40, 50];
  const hasilTest2 = fTest2(arr);

  return (
    <div className="mb-24">
      <h2 className="text-2xl text-secondary font-bold mb-12">
        Problem Solving Test 2
      </h2>
      <p>Example: [-10, -20, 0, 40, 50]</p>
      {hasilTest2}
    </div>
  );
};

export default Test2;
