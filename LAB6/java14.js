function filterKey(arrayOfObj,keyy){
    
    let list = [];
    arrayOfObj.find(obj => {
            // console.log(obj);
         if((obj[keyy]) == true)
            list.push(obj)
            })
    return list;
}




console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious:
false},{name: "Tim", isInstructor:true, isHilarious: true},{name:
"Matt", isInstructor:true}], "isHilarious"))
