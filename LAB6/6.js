
function find(a,fun)
{
 console.log(fun(a));
}    

  


find([8,11,4,27],function(value){
  for(var i=0;i<value.length;i++){
  if(value[i]>=10){
    return value[i];
  }
  }
}); 
find([8,11,4,27], function(value){
   for(var i=0;i<value.length;i++){
  if(value[i]==5){
    return value[i];}
  }}); 