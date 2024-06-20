//  For of loops and objects

// an object is not iterable
// arrays are iterable

const colors = ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color);
}

// a for of loop can be run on arrays to loop over objects.

const car2 = {
    speed: 200,
    color: 'red'
}
console.log(Object.keys(car2))

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3))

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4))

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}
for(const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }
    
    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

// compare for-of loop and for-in loop
const car = {
    engine: true,
    steering: true,
    speed: 'slow'
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log('----- for-in is unreliable ------')
for (prop in sportsCar) {
    console.log(prop);
}
console.log("\u1F600", "dd")

// for-of loop interate over object's own properties only
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ': ' + sportsCar[prop])
}


