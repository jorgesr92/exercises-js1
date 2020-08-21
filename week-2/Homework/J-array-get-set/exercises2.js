/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

var numbers = [1, 2, 3]; // Don't change this array literal declaration

function addValues(valueToAdd, arr){
  arr[arr.length]=valueToAdd;
  return arr;
}

numbers = addValues(4,numbers)

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/
