function numOperators(numA, numB){
    //esta función nos da la multiplicación y la división entre los dos numeros dados
    let mult = (numA * numB).toFixed(2);
    let div = (numA / numB).toFixed(2);
    let message = `La multiplicación de `.concat(numA, " y ", numB, " es: ", mult);
    let message2 = `La división de `.concat(numA, " y ", numB, " es: ", div);
    return `${ message } \n${ message2 }`;
}

console.log(numOperators(20,4.5))