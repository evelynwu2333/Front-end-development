// Spread operator
let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
]

function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3);
}
showItinerary(top3[0], top3[1], top3[2])
// Same as:
showItinerary(...top3)

//// use push() to add new members to arrays
let veggies = ['onion', 'parsley']
veggies = [...veggies, 'carrot', 'beetroot']
console.log(veggies)

//// convert string to array
const greeting = 'hello'
const arrayOfChars = [...greting];
console.log(arrayOfChars)

//// copy object/array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1)
console.log(fruits2)

// Rest operator
let top7 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City",
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City",
    "Trevi Fountain"
]

const[] = top7;
const[first, second, third, ...secondVisit] = top7;

function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79)
console.log(shoppingCart)

//// join arrays
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries)
//// join objects
const flying = {wings: 2}
const car = {wheels: 4}
const flyingCar = {...flying, ...car}
console.log(flyingCar)