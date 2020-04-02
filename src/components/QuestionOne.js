import React from "react";

function QuestionOne() {
  const originalArray = [22, 14, 3, 4, 37, 6, 7, 81, 9, 10]

  // Fisher - Yates Shuffle
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
      <p>Randomized set:&nbsp;
        {shuffle(originalArray).map((item, key, array) => {
          return(<span key={key}>
            {item + (key === array.length -1 ? "": ", ")}   
          </span>)
        })}
      </p>
    </div>
  );
}

export default QuestionOne;
