let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let date = new Date().getFullYear();

function birthYear(year){
    return date - year;
}
let edad = years.map(birthYear);
console.log(edad);
console.log(years);
years.forEach(el=>console.log(el));
