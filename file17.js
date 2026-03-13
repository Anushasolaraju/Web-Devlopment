
function getgrade(marks){
    if(marks>=90&&marks>=80){
        return "A";
    }
    else if(marks>=70){
        return "B";
    } 
    else if(marks>=60){
        return "C";
    }
    else if(marks>=50){
        return "D";

    }
    else if(marks>=40){
        return "E";

    }
    else{
        return "fail";
    }
}
console.log(getgrade(32));