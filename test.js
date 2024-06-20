const meal = ["soup", "steak", "ice cream"]
let [a] = meal
// let [starter] = meal;
console.log(a);


function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();

class Animal {

}

class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());

const [a,b] = [1,2,3,4]
console.log(b)

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);

var x
console.log(x)
x =7