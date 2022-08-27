function isEven(number){
    return (number%2===0);
}

function isOdd(number){
    return number%2!==0;
}

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

function numberFact(number,func)
{
    console.log(func(number))
}

numberFact(59,isEven)
numberFact(59,isOdd)
numberFact(59,isPrime)