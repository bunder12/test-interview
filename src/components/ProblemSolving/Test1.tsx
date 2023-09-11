import { fTest1 } from "@/utils/ProblemSolvingFunction";
import React from "react";

const Test1 = () => {
  // Example
  const arr = [10, 20, 30, 40, 50];
  const hasilTest1 = fTest1(arr);

  return (
    <div className="mb-24">
      <h2 className="text-2xl text-secondary font-bold mb-12">
        Problem Solving Test 1
      </h2>
      <p>Example: [10, 20, 30, 40, 50]</p>
      <p>{hasilTest1}</p>
    </div>
  );
};

export default Test1;
