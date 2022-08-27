function specialMultiply(a,b) {

    if(arguments.length===1){
        return function(b2){
           return a*b2;
        };
    }
    return a*b;
}

console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));
specialMultiply(3);