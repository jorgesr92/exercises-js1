const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const date = new Date().getFullYear();

let drivers = years.map(element => {
    if(date - element >= 17){
        return `Born in ${ element } can drive`;
    } else {
        return `Born in ${ element } can drive in ${ 17 -(date - element) } years`;
    }
});

console.log(drivers);