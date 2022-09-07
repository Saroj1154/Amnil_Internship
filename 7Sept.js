console.log(`Hello to the console`);

// creating an object
const person = {
    personName: "Saroj",
    age: 27,
    email: "pandeysarojofficial@gmail.com"
}

//iterating using for..in loop 
console.log(`This is using for..in loop`);
for (const key in person) {
    console.log(` ${key}: ${person[key]}`);
}

//to check explicitly if person is inheriting from its prototypes
console.log(`This is using for..in loop with hasOwnProperty`);
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

//iterating using Object.keys() method
console.log(`This is using Object.keys() method`);
var first = Object.keys(person) //returns array of keys
console.log(first);
// Now we can use array methods
first.forEach(key => {
    console.log(`${key}:${person[key]}`);
})
first.map(key => {
    console.log(`${key}`)
})

//iterating using Object.values() method
console.log(`This is using Object.values() method`); // Object.values() returns array of values 
Object.values(person).forEach(values => console.log(`${values}`));
Object.values(person).map((values) => {
    console.log(`${values}`);

})

//iterating using Object.entries() method
console.log(`This is using Object.entries() method`);
var entries = Object.entries(person); // returns array of key-value pairs
console.log(entries);
//Now we can use normal array functions like for..of, forEach, map, etc
console.log(`using for..of loop here`);
for (const [key, value] of entries) {
    console.log(` ${key}: ${value}`);
}
console.log(`using forEach here`);
entries.forEach(([key, value]) => {
    console.log(`${key}=${value}`);
})

console.log(`using map here`);
entries.map(([key, value]) => {
    console.log(`${key}===${value}`);
})

// ---------------------------------------------------------------------------------------------------------------------

//1) Named function example ===>
question() // hoisting in named functions
function question() {
    console.log(`What is your name? I am named function!`);
}


//2) Unnamed or Anonymous function example ===>
var anonymous = function () {
    console.log(`I am an anonymous function!`);
}
anonymous();


//3)Function with argument ===>
addition(3, 2); //hoisting
function addition(number1, number2) {
    console.log(`Named function with arguments so hoisting is possible`)
    console.log(number1 + number2);
}
var add = function (number1, number2) {
    console.log(`Unnamed function with arguments so hoisting not possible`)
    console.log(number1 + number2);
}
add(5, 5) // Hoisting not possible


//4) Function with return type ===> 
var product1 = multiply(3, 2); //hoisting and using another variable to print demo
console.log(product1);
function multiply(number1, number2) {
    console.log(`Named function so hoisting is possible`)
    return number1 * number2
}
var mul = function (number1, number2) {
    console.log(`Unnamed function so hoisting not possible`)
    return number1 * number2
}
console.log(mul(5, 5)); // Hoisting not possible and print directly demo



//5) IIFE or Immediately Invoked Function Expressions ===>
(function () {
    console.log(`I am an IIFE and I am executed instantly.`)
})();



//DAI HELP YO UNARY OPERATOR WITH IIFE KO OUTPUT EXPECTED AAUDAI CHAINA
-function () {
    return 3// printing 3 but it will be -3 in output because we have '-' in front of our function 
    // and it is executed immediately afterwards.
}();