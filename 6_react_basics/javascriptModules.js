// default export
export default function addTwo(a,b) {
    console.log(a + b);
}

// alternative
function addTwo(a, b) {
    console.log(a + b);
}
export default addTwo;

// named exports
function addTwo(a, b) {
    console.log(a + b);
}
function addThree(a, b, c) {
    console.log(a + b + c);
}
export {addTwo, addThree};

// import modules
import addTwo from "./addTwo";

// alternative
import {addTwo} from "./addTwo"