let date = new Date();

function getYearOfBirth(age){
    return date.getFullYear() - age;
}

function getNameAndYear(name){
    return `Name: ${ name } \nYear of birth: ${ getYearOfBirth(34) }`;
}

console.log(getNameAndYear("Jorge"));