// Task 1: Code a Person class
class Person {
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    };
    sleep() {
        this.energy += 10
        console.log(this.energy)
    };
    doSomethingFun() {
        this.energy -= 10
        console.log(this.energy)
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    };
    sleep() {
        super.sleep()
    };
    doSomethingFun() {
        super.doSomethingFun()
    };
    goToWork() {
        this.xp += 10
        console.log(this.xp)
    }    
}
var intern = new Worker('Rob', 21, 110, 0, 10);
intern.goToWork()
intern
// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker('Rob', 21, 110, 0, 10);
    intern.goToWork();
    return intern
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker('Alice', 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager
}



/////
class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);


class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);
