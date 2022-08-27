function findIndex(array,func)
{
  return  array.findIndex(func)
}
console.log(findIndex([8,11,4,27], function(val){return val >= 20}))