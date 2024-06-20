var car = {};
car.color = 'red';
car.mileage = 98765;
// add a method to the car object so that it can be called as car.turnkey()
car.turnkey = function(){
    console.log('engine running');
}
car.lightsOn = function(){
    console.log("The lights are on.")
}
console.log(car);
car.turnkey();
car.lightsOn();

var test = typeof("what is this?");
var test = typeof(1 < 2);
var test = typeof([1,2,3]); // arrays are objects

console.log(test);

// use other property value in a function; shorter version of function property: bio() == longer version bio: function()
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
}
console.log(person)
console.log(person.bio())

// object property itself can be an object
const person2 = {
    name: {
        first: 'Bob',
        last: 'Smith',
    },
};
console.log(person2.name.first)
console.log(person2["name"]["first"])

// object property is called in a function
const person3 = {
    name: ['Bob', 'Smith'],
    age: 32,
};
function logProperty(propertyName) {
    console.log(person3[propertyName]);
}
// dot notation is not working when object property name is held in a variable and you want to access the value
// function logProperty(propertyName) {
//     console.log(person3.propertyName);
// }
logProperty('name')
logProperty('age')

const myDataName = 'height';
const myDataValue = 1.75;
person3[myDataName] = myDataValue;
// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;
// person3[myDataName] = myDataValue;
console.log(person3.height)