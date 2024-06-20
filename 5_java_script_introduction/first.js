console.log('Hello world')
// this is a comment!
/* 
this
is
a
multi-line
comment
*/
console.log("Hello World");

console.log("%cHello, World", "color: blue; front-size: 40px");

console.log("Hello " + "there, " + "World");

var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is", petDog);
console.log("My pet cat's name is", petCat);
var catSound = "purr";
var dogSound = 'woof';
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);
catSound = 'meow';
console.log(petCat, "now says", catSound);

// Null: absence of a value
// Undefined: a variable not yet assigned a value
// BigInt data type: extra large box that can accommodate 
// a much greater range of numbers than the number data type

// && is "AND", || is "OR"
// ** is power

console.log(2 + 2);

console.log(100 == "100") // true - not check type
console.log(100 === "100") // false - checks type 
console.log(365 + " days")
console.log(1 + "2")


5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), 
// then true > 3 is evaluated to `false`, 
// because the `true` value is coerced to `1`

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0
var result2 = test2 == 0
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)