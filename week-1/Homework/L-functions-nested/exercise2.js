
let mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];

function greeting(name){
    let newName = name.toUpperCase();
    return `HELLO ${ newName }`;
}
for (x in mentors){
    console.log(greeting(mentors[x]));
}
