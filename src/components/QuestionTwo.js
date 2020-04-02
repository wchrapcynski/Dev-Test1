import React from "react";

function QuestionTwo() {
  const originalArray = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10];

  const meanOfArray = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let mean = sum / array.length;
    return mean;
  };

  return (
    <div className="question-two">
      <p>
        2. Find the mean of the following number set: "22, 14, 3, 4, 37, 6, 7,
        81, 9, 10".
      </p>
      <p>Mean of set:&nbsp;{meanOfArray(originalArray)}</p>
    </div>
  );
}

export default QuestionTwo;
