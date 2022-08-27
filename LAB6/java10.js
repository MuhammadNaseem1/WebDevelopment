function addKeyAndValue(array,key,val){
    let everyObj;
    for(let i=0; i<array.length; i++){
        everyObj = array[i];
        everyObj[key] = val;
   }
    return array
}



console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}],"isInstructor", true));