function specialMultiple(n1,n2)
{
    if(arguments.length === 1){
        return function(number){
            return n1*number;
        }
    }
    else{
        return n1*n2;
    }
}

console.log(specialMultiple(12,6))