let users = [
    {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
    city: 'San Francisco',
    state: 'CA'
    }
    },
    {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
    city: 'New York',
    state: 'NY'}
    },
    {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
    city: 'Fargo',
    state: 'SD'
    }
    },
    {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
    city: 'Albany',
    state: 'NY'
    }
    },
    {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
    city: 'Los Angeles',
    state: 'CA'
    }
    }
   ];


function printEmails(){
    users.forEach(element => {
        console.log(element.email)
    });
}

function printHobbies(){
    users.forEach(element => {
        console.log(element.hobbies)
    });
}


function findHometownByState(passedHomeTownOfTheState){
    let firstUser;
    for (let index = 0; index < users.length; index++) {
        if(users[index].hometown.state === passedHomeTownOfTheState){
            firstUser = users[index];
            break;
        }
    }
    return firstUser;
}


function allLanguages(){
    let arrayOfAllLanguages = [];
    let allLanguages = [];
    users.forEach(singleObject => {
        arrayOfAllLanguages.push(singleObject.favoriteLanguages);
    })
    let singleArray = [];
    for (let index = 0; index < arrayOfAllLanguages.length; index++) {    
        singleArray = arrayOfAllLanguages[index]
        singleArray.forEach(element => {
            allLanguages.push(element);
        });
    }
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const uniqueLangs = allLanguages.filter(unique)
    console.log(uniqueLangs);
}


function hasFavoriteEditor(someEditorHere){
    let flag = false;
    users.forEach(singleEditor => {
        if(singleEditor.favoriteEditor === someEditorHere)
            flag = true;
    })
    return flag
}


function findByUsername(username){
    let user;
    users.forEach(element => {
        if(username == element.username)
            user = element
    });
    return user;
}



//printEmails();
//printHobbies();
//console.log(findHometownByState('CA'));

//allLanguages();


// console.log(hasFavoriteEditor('Emacs'));
console.log(findByUsername('sam'));