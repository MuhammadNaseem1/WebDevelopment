function valTimesIndex(array){
    for(let i=0; i<array.length; i++){
        array[i] = array[i]*i;
    }
    return array;
}


console.log(valTimesIndex([5,10,15]));