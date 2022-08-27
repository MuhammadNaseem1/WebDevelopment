var x=false;
function isPrime(a) {
    for(var i=2;i<a;i++){
        if(a%i==0) {
         x=true;
         break;
        }
    }
    if(x==true)
    console.log(a+" is not a prime number");
    else
    console.log(a+" is a prime number");
}
console.log(isPrime(29));
console.log(isPrime(4));