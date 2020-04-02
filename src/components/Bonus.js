import React from "react";

function Bonus() {
  const originalString =
    "Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence.";
  const smiley = ":)";

  const insertSmiley = string => {
    let vowlList = "aeiouAEIOU";
    let array = string.split(" ");
    for(let i = 0; i < array.length; i++) {
      if(array[i][array[i].length - 1] === "." || array[i][array[i].length - 1] === ",") {
        if(vowlList.indexOf(array[i][array[i].length - 2]) !== -1) {
          array[i] = array[i].slice(0,[array[i].length - 1]) + smiley + array[i][array[i].length - 1] ;
        }
      } else if(vowlList.indexOf(array[i][array[i].length - 1]) !== -1) {
        array[i] += smiley;
      }
    }
    let output = array.join(" ");
    return output
  };

  return (
    <div>
      <p>
        <strong>Bonus:</strong>
      </p>
      <p>
          {insertSmiley(originalString)}
      </p>
    </div>
  );
}
export default Bonus;
