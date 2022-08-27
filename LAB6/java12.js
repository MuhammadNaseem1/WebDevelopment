function extractKey(array,specificKey){
    let index = 0;
    array.find(obj=>{
        array[index] = obj[specificKey];
        index++;
    })
    return array
}



console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim",
isInstructor:true},{name: "Matt", isInstructor:true}], "name"));