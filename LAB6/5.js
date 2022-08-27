function even(a) {
    if(a%2==0){
       return true;
        // console.log("number is even");
    }
    else{
        return  false;
        //console.log("number is odd");
    }
}

function odd(a) {
    if(a%2==0){
       return false;
        // console.log("number is even");
    }
    else{
        return  true;
        //console.log("number is odd");
    }
}

var x=false;
function isPrime(a) {
    for(var i=2;i<a;i++){
        if(a%i==0) {
         x=true;
         break;
        }
    }
    if(x==true)
    return true;
    else
    
    return false;
    ///console.log(a+" is a prime number");
}

function numbfact(c,b) {
    console.log(b(c));
}

numbfact(59,even);
numbfact(59,odd);
numbfact(59,isPrime);