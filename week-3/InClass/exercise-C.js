/*let nombres = ["Jorge", "Antonio", "Marc", "Daniel", "Marta"];

function formatUpper(newString){
    return newString.toUpperCase();
}

for (x in nombres){
    nombres[x] = formatUpper(nombres[x]);
}

console.log(nombres);


let nombresMay = nombres.map(formatUpper);

console.log(`Con map es asi: ${ nombresMay }`);

*/

function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }

/*function yourFunc(arr){
    return arr.map((element) => element.toUpperCase());
}

console.log(abracaFunction(yourFunc));*/

console.log(abracaFunction((arr) => arr.map((element) => element.toUpperCase())));

console.log(abracaFunction((arr) => arr.sort()));
