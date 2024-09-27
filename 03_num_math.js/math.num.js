const score = 549000;
console.log(score);
const score2 = new Number(1900);
// console.log(score2);
// console.log(typeof score);
// console.log(score2.toString().length);
console.log(score.toFixed(1));
const otherNum = 345.89;
console.log(otherNum.toPrecision(1));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

// ###############      MATH                        ##################
// Math is one of JavaScript's global or standard built-in objects, and can be used anywhere you can use JavaScript. It contains useful constants like π and Euler's constant and functions such as floor() , round() , and ceil()

// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method

// console.log(Math);
// console.log(Math.abs(-34));
// console.log(Math.round(4.5));
// console.log(Math.ceil(6.7));
// console.log(Math.floor(9.12));
// console.log(Math.min(3, 45, 65, 76, 3, 87, 90));
// console.log(Math.max(2, 343, 5656, 232327, 7454, 342, 2, 9000));
// console.log(Math.random());
//  the value of math.random is 0 to 1 always;
console.log(Math.random() * 10 + 1);
console.log(Math.ceil(3.14));
