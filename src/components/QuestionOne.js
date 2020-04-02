import React from "react";

function QuestionOne() {
  const originalArray = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]

  const shuffle = (array) => {
    var counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
  }

  return (
    <div className="question-one">
      <p>
        1. Randomize the order of the following number set: "22, 14, 3, 4, 37,
        6, 7, 81, 9, 10".
      </p>
      <p>
        {shuffle(originalArray).map((item, key) => {
          return(<span key={key}>
            {item + " "}   
          </span>)
        })}
      </p>
    </div>
  );
}

export default QuestionOne;
