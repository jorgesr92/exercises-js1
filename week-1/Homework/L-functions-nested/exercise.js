var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function per_calc(num_mentors, num_students){
    return (num_mentors/(num_mentors+num_students))*100;
    
}

function message_result(a, b){
    var per_mentors = Math.round(per_calc(a, b));
    var message = "Percentage students: "+ (100-per_mentors) +"% \ Percentage mentors: "+ per_mentors +"%";
    return message;
}

var message = message_result(5, 12);

console.log(message);