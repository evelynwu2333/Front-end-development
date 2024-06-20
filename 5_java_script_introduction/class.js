// inheritance
class Animal {}
class Bird extends Animal {}
class Eagle extends Bird {}

var bird = {
    hasWings: true,
    canFly: true,
    hasFeatures: true
}
var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);
console.log(eagle1.hasWings)

var eagle2 = Object.create(bird);
console.log(eagle2.hasFeatures);

var penguin1 = Object.create(bird);
penguin1.canFly = false; // override 
console.log(penguin1.canFly)
console.log(penguin1.hasFeatures)

//// example
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain);

var mySecondTrain = new Train('blue', false);

var train3 = new Train('red', false);
train3.toggleLights();
train3.lightsStatus();
train3.getSelf();
train3.getPrototype();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
var train4 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train4.toggleLights();
train4.lightsStatus();
train4.getPrototype();
highSpeed1.getPrototype()


// encapsulation - not to worry about what is inside of the method
// abstraction
// polymorphism - method behaves differently based on the context
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const  door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
bicycle.bell();
door.bell();

function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(door); // "Ring, ring! Come here, please!"

'abc'.concat('def'); // 'abcdef
['abc'].concat(['def']); // ['abc', 'def'] 

// example
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings() 
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();

// constructors
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`)
    }
}
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple")
kiwiIcecream;
appleIcecream;

let apple = new String("apple");
apple;
let pear = "pear"; // more performant than apple
pear; // --> "pear"

//// use new RegExp or /x/ to match a string
"abcd".match(/d/);
"abcd".match(/a/);
//// use Array or []; Function or () {} to match 

//// other built-in types
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();

