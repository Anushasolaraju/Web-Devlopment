
function isfreezing(temp){
    if(temp<=0){
        return"freezing or below freezing point";
    }
    else{
        return "above freezing point";
    }
}
console.log(isfreezing(43));