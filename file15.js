
function ischeckperson(age){
    if(age<18){
        return "minor";
    }
    else{
        return "adult";
    }
}
console.log(ischeckperson(12));