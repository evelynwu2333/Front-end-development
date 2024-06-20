// Default parameters

function noDefaultParams(number) {
    console.log('Result:', number * number)
}
noDefaultParams()

function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams()

class noDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.boo1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of boo1 is incorrect"
    }
}
var fail = new noDefaultParams(1,2,3,false);
fail.calculate();

class withDefaultParams {
    constructor(num1 = 1, num2 = 2, 
        num3 = 3, string1 = 'Result:', 
        bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.boo1) {
            console.log(this.string1, 
                this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of boo1 is incorrect"
    }
}
var better = new withDefaultParams();
better.calculate();