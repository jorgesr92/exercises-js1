/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function stringWithT(arr){
  let arr2 = [];
  index = 0;
  for (x in arr){
    if (arr[x].charAt(0).toUpperCase() === "T"){
      arr2[index] = arr[x];
      index = index + 1;
    }
  }
  return arr2;
}

console.log(stringWithT(daysOfWeek));