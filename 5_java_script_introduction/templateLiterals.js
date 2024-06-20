//  template literals
`hello world`

let greet = 'Hello';
let place = 'World';
console.log(`${greet} ${place} !`)

//  template literals allow for multi-line strings 
// the syntax allows for expression evaluation
// can interpolate variables

let multiLine = `
    using ES6
    backticks
`
console.log(`${1+1+1} stars!`)