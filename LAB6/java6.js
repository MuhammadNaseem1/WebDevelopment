

function find(array,func)
{
    return array.find(func)
}
console.log(find([8,11,4,27], function(val){return val >= 10}))