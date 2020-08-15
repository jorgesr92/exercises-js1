
let mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];

function greeting(name){
    // let newName = name.toUpperCase();
    return `HELLO ${ name.toUpperCase() }`;
}
for (x in mentors){
    console.log(greeting(mentors[x]));
}
