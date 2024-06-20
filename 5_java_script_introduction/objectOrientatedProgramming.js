// example[]
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice()
purchase1.stateTax

// functional programming example
var shoes = 100
var stateTax = 1.2
function totalPrice(shoes, tax) {
    return shoes * tax;
}
var toPay = totalPrice(shoes, stateTax)
console.log(toPay)

// classes
//// class definition
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log('turbo is on!')
    }
}
//// build car object
const car1 = new Car("red", 120)
//// access data
car1.turboOn()