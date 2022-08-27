function valTimesIndex(arr) {
    let a=[];
    for(var i=0;i<arr.length;i++){
a[i]=(arr[i]*i);
    }
    return a;
}




console.log(valTimesIndex([1,2,3])); // [0,2,6]
console.log(valTimesIndex([5,10,15]));