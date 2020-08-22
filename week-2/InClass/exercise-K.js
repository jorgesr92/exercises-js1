let arrStudent = ["Juan", "Daniel", "Carlos", "Jorge", "Antonio"];

function getNameStudent(arr){
    for (x in arr){
        console.log(`El nombre del estudiante ${ parseInt(x) + 1 } es: ${ arr[x] }`);
    }
}

getNameStudent(arrStudent);