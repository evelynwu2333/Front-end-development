// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (i in dairy) {
        console.log(dairy[i])
    }
}
logDairy()

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key, ": ", bird[key])
    }
}
birdCan()

// Task 3
function animalCan() {
    for (prop in bird) {
        for (value in Object.getPrototypeOf(bird)) {
            console.log(prop, ": ", bird[value])
        }
    }
}
animalCan()
