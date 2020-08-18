function userValid(name, type){
    let firstLetter = name.charAt(0);
    let nameLength = name.length;
    if ((firstLetter === firstLetter.toUpperCase() && nameLength >= 5 && nameLength <= 10) ||
     (type.toLowerCase() === "admin" || type.toLowerCase() === "manager")) {
        return "Username valid";
    } else {
        return "Username invalid";
    }
}

console.log(userValid("jorge", "admin")); // valid
console.log(userValid("jorge", "manager")); // valid
console.log(userValid("jorge", "junior")); // invalid
console.log(userValid("Jorge", "junior")); // valid
console.log(userValid("Jorge", "Admin")); // valid
console.log(userValid("jorge", "Admin")); // valid
console.log(userValid("Li", "admin")); // valid
console.log(userValid("Li", "junior")); // invalid
console.log(userValid("Schweinsteiger", "junior")); // invalid
console.log(userValid("Schweinsteiger", "admin")); // valid
