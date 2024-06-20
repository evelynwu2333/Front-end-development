const Nav = function Nav(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

<Nav first="Home" />

// The arrow itself can be thought of as the replacement for the function keyword. 
// The parameters that this arrow function accepts are listed before the arrow itself. 
const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// example
const example = function() {}
const example = () => {}
// using the parentheses is optional if there's a 
// single parameter that a function accepts
const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// implicit return works if your entire component 
// is a single line of code.
const Nav = () => <ul><li>Home</li></ul>

// Using arrow functions in other situations
[10, 20, 30].forEach(item => item * 10) 
// same as
[10, 20, 30].forEach(function(item) {
        return item * 10
    }
)

// embedded JSX expressions
function formatName(firstName, surname) {
    return firstName + " " + surname;
}
const result = <p>{formatName("Jane", "Wilson")}</p>
// in HTML: <p>Jane Wilson</p>

// another example
const url = "photo.png"
const result = <img src={url}></img>

//Ternary operators and functions in JSX
let name = "Bob";
if (name == "Bob") {
    console.log("Hello, Bob");
} else {
    console.log("Hello, Friend")
}
// the same as
let name = "Bob";
name == "Bob" ? console.log("Hello, Bob") : console.log("Hello, Friend");
// comparison ? true : false

//Using function calls in JSX
function example2() {
    return (
        <div className = "heading">
            <h1>Here's a random number from 0 to 10: 
                {Math.floor(Math.random() * 10) + 1}
            </h1>
        </div>
    );
};
// the same as 
function example3() {
    const getRandomNum = () => Math.floor(Math.random() * 10) + 1
    
    return (
        <div className="heading">
            <h1>Here's a random humber from 0 to 10: { getRandomNum() }</h1>
        </div>
    );
};

// function expression:
const getRandomNum = function() {
    return Math.floor(Math.random() * 10) + 1
};

// function declaration:
function getRandomNum() {
    return Math.floor(Math.random() * 10) + 1
};

// expressions as props
const bool = false;

function Example(props) {
    return (
        <h2>The value of prop is: {props.toggleBoolean.toString()}</h2>
    );
};

export default function App() {
    return (
        <div className = "App">
            <Example toggleBoolean = {!bool} />
        </div>
    )
}

// several props bassed to the Example component and randering each of these props's values to the screen
const bool = false; 
const str1 = "just";

function Example(props) {
    return ( 
        <div>
            <h2>
                The value of the prop is: {props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str props is: <em>{props.str}</em></p>
        </div>
    );
};

export default function App() {
    return (
        <div className = "App">
            <Example
                toggleBoolean = {!bool}
                math = {(10 + 20) / 3}
                str = {str1 + ' another ' + 'string'}
            />
        </div>
    );
};