var greet = 'Hello ';
var user = 'Lisa';

//  join strings
console.log(greet + user);
console.log(greet.concat(user));
console.log("Wo".concat("rl").concat("d"));

// length of a string
greet.length; // 7

// read character at a specific index in a string
greet.charAt(0); // 'H'

// location of the first position that matches a character
"ho-ho-ho".indexOf('h'); // 0

// location of the last position that matches a character
"ho-ho-ho".lastIndexOf('h'); // 6

// split a string into an array of sub-strings
console.log("ho-ho-ho".split('-')); 

greet.toUpperCase();
greet.toLowerCase();