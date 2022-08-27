function findIndex(a,fun)
{
 console.log(fun(a));
}    

  


findIndex([8,11,4,27],function(value){
  for(var i=0;i<value.length;i++){
  if(value[i]>=10){
    return i;
  }
  }
}); 
findIndex([8,11,4,27], function(val){for(var i=0;i<value.length;i++){
    if(value[i]==7){
      return i;
    }}}); 