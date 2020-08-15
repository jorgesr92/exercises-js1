let numberOfMentors = 8;
let numberOfStudents = 15;
let totalClass = numberOfMentors + numberOfStudents;

let perMentors = Math.round((numberOfMentors/totalClass)*100);
let perStudents = 100 - perMentors;

console.log(`Percentage students: ${ perStudents }%`);
console.log(`Percentage mentors: ${ perMentors }%`);