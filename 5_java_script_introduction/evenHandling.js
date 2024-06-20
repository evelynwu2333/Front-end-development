// handle event in webpage
const target = document.querySelector('body')
function handleClick() {
    console.log('clicked the body')
}
target.addEventListener('click', handleClick)

function handleClick2() {
    console.log('clicked the heading')
}
// edit Elements - selected heading line e.g.
// <h1 onclick="handleClick2()">Heading title</h1>
// then click the heading, it will trigger both 
// events "clicked the body" and "clicked the heading"

// Exercise
let answer = prompt('What is your name?')
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

//// better solution
var h1 = document.createElement('h1')
h1.innerText = 'Type into the input to make this text change'

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1)
document.body.appendChild(input)

input.addEventListener('change', function() {
    h1.innerText = input.value
})

document.createElement('h2').innerText = "Heading Level 2"