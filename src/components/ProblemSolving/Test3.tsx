import { fTest3 } from "@/utils/ProblemSolvingFunction";
import React from "react";

const Test3 = () => {
  // Example Current Time
  // const dateTime:any = new Date().toLocaleTimeString('en-US', {
  //   hour: '2-digit', minute: '2-digit', second:"2-digit", hour12: true
  // })

  // Example
  const dateTime: any = "09:34:20 PM";
  const hasilTest3 = fTest3(dateTime);

  return (
    <div>
      <h2 className="text-2xl text-secondary font-bold mb-12">
        Problem Solving Test 3
      </h2>
      <p>Example: {dateTime}</p>
      <p>Sample Output: {hasilTest3}</p>
    </div>
  );
};

export default Test3;
