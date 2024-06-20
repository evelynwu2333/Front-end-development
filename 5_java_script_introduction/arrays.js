var fruits = [];
// add new items to an array
fruits.push("apple"); // ['apple']
fruits.push("pear");
// remove the last item from an array
fruits.pop();
console.log(fruits);


function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
// arrayBuilder('apple', 'pear','plum');

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);