import Test1 from "@/components/ProblemSolving/Test1";
import Test2 from "@/components/ProblemSolving/Test2";
import Test3 from "@/components/ProblemSolving/Test3";
import React from "react";

const ProblemSolving = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 h-screen flex flex-col items-center pt-12">
      <Test1 />
      <Test2 />
      <Test3 />
    </div>
  );
};

export default ProblemSolving;
