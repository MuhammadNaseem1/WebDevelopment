function printFirstAndLast(array){
    array.forEach(element => {
        console.log(""+element.charAt(0)+element.charAt(element.length-1))
    });
}


printFirstAndLast(['awesome','example','of','forEach']);

