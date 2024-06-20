// Object

// Array
// forEach() 
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex)

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggie, index) {
    console.log(`${index}. ${veggie}`)
})

// filter
const nums = [0,10,20,30,40,50];
nums.filter(function(num) {
    return num > 20;
}) // [30,40,50]

// map
nums.map(function(num) {
    return num / 10
}) // [0,1,2,3,4,5]


// working with objects - convert object to array
const result = [];
const drone = {
    speed: 100, 
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key) {
    result.push(key, drone[key])
})
console.log(result)

// Map
new Map();
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up")
bestBoxers.set(3, "The third place")
console.log(bestBoxers)
console.log(bestBoxers.get(1))

// Set
new Set();
const repetitiveFruits = ['apple', 'pear', 'apple']
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits)