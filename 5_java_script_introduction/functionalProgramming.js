// functional programming
function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('Hello')

function getTotal(a, b) {
    return a+b
}
var num1 = 2;
var num2 = 3;
var total = getTotal(num1, num2)

// objective-oriented programming - methods update properties stored in the object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy)
virtualPet.nap()
console.log(virtualPet.sleepy)

// return values from one function inside another function
function doubleIt(num) {
    return num * 2
}
function objectMaker(val) {
    return {
        prop: val
    }
}
console.log(objectMaker(20))
console.log(doubleIt(10).toString())
console.log(objectMaker(doubleIt(100)))

// Function calling and recursion
let counter = 3;
function example() {
    console.log(counter);
    counter = counter - 1;
    if(counter === 0) return;
    example();
}
example()

// Function is first-class citizen in JS - can be assigned to variable names and passed around
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

// Higher-order functions
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
addTwoNums(specificNum, randomNum)

// Pure function should not have side-effects

// test1
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);
// test2
function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
// meal(dog);

console.log(dog.food);