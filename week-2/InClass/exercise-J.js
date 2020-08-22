function secondMatchesAmy(array) {
  if (array[2].toLowerCase() === "amy") {
    return "Second index matched!";
  }else {
    return "Second index not matched";
  }
}
const arr = ['banana', 'strawberry', 'Amy', 'kiwi', 'fig', 'orange'];
const arr2 = ['banana', 'hola', 'strawberry', 'kiwi', 'fig', 'orange'];
const arr3 = ['banana', 'strawberry', 'amy', 'kiwi', 'fig', 'orange'];

console.log(secondMatchesAmy(arr));
console.log(secondMatchesAmy(arr2));
console.log(secondMatchesAmy(arr3));