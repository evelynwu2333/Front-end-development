// error is saved and program still running
try {
    throw new Error();
} catch(err){
    console.log(err)
}
console.log('This line is never reached')

// throw an error
throw new ReferenceError();

// an example
try {
    console.log(a + b)
} catch(err) {
    console.log('There was an error')
    console.log('The error was saved in the error log')
}
console.log('My program does not stop')

// exercise 1
function addTwoNums(a, b){
    try {
        if(typeof(a) != 'number'){
            throw ReferenceError();
            console.log('the first argument is not a number');
        } else if(typeof(b) != 'number'){
            throw ReferenceError();
            console.log('the second argument is not a number')
        } else console.log(a + b)
    } catch(err){
        console.log("Error!", err);
    }
};
addTwoNums(5, "5")
console.log('It still works')

// exercise 2
function letterFinder(word, match) {
    var condition1 = typeof(word) == "string" && word.length >= 2;
    var condition2 = typeof(match) == "string" && match.length == 1;
    if(condition1 && condition2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log('Please pass correct argument to the function')
    }
}
// letterFinder(2,3); // failing test
letterFinder("cat", "c") 