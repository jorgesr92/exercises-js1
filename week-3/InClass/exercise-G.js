const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const date = new Date().getFullYear();

let canDrive = years.filter(element => element <= date - 17);
console.log(`These are the birth years of people who can drive: ${ canDrive } `);