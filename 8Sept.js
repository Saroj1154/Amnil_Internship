// Closures use lexical scoping and can inherit the variable from its parent function.
// closure example with anonymous function...
const x = 10;
function add(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + x;
            };
        };
    };
};
console.log(add(1)(2)(3)(4)); // output:20



//closure example with named function....
// global scope
const e = 10;
function sum(a) {
    return function sum2(b) {
        return function sum3(c) {
            // outer functions scope
            return function sum4(d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); //output: 20


