function isPrime(number)
{
     flag=true;
    for(let i=2; i<number/2; i++)
    {
        if(number%i===0)
        {
            flag = false
        }
        
    }
   return flag
}

console.log(isPrime(8))
