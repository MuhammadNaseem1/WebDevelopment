function filterLetters(letters){
    let numberOfAccurences = [];
    let sameLetter;
    let count = 0;
    for (let index = 0; index < letters.length; index++) {
        sameLetter = letters[index];
        for (let matchindex = 0; matchindex < letters.length; matchindex++) {
            if(sameLetter === letters[matchindex])
                count++;
            numberOfAccurences[index] = count;
        }
        count = 0;
    }
    return numberOfAccurences;
}


console.log(filterLetters(['i','i','i','i','i','i','i','u']));



