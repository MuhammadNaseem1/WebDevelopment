function vowelCount(someString){
  let count=0;
//  let a=someString.split();
  for(let i=0;i<someString.length;i++){
      if(someString.charAt(i)==='a'||someString.charAt(i)==='e'||someString.charAt(i)==='i'||someString.charAt(i)==='o'||someString.charAt(i)==='u')
      {
          count++;
      }
    }
  console.log( count);
}



vowelCount('noumann');