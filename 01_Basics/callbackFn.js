// function add(a, b) {
//   // paramts - passed during function declaration
//   return a + b;
// }

// console.log(add(3, 6)); // args - that are passed during function call

//callback fn - A fn that is passed as an argument to another fn is called as callback fn.
//            -
// function name1(callback) {
//   console.log("in fn 1");
//   callback();
// }

// function name2() {
//   console.log("in fn 2");
// }

// name1(name2);

// var newArr = [10, 12, 23, 334];

// newArr.forEach(function (value) {
//   console.log(value);
// });

// .forEach(), .filter(), .map(), .reduce(),etc - alwyas used with arrays
//                                              - these are arrays methods

// .forEach() - can recieve 3 callbacks
// .filter() - can recieve only 1 callback -
//           - filters the array based on some condition then returns a new array

// .map() - can recieve only 2 callback
//        - modify the array based on some condition then returns a same array

// .reduce() -  it recieve only 2 callback,
//           - accumulator + cureentValue
// var arr = [
//   {
//     name: "Shivam",
//     age: 50,
//     gender: "male",
//     color: "fair",
//   },
//   {
//     name: "Shivam",
//     age: 55,
//     gender: "male",
//     color: "Kariya",
//   },
//   {
//     name: "Sonam",
//     age: 19,
//     gender: "female",
//     color: "Gora",
//   },
// ];

// var result = arr.filter(function (value) {
//   return value.name === "Shivam" && value.age > 18;
// });
// console.log(result);
// console.log("******************************************");

// var newResult = arr.map(function (value) {
//   return (value.age = 50);
// });
// console.log(newResult);
// arr.forEach(function (val) {
//   console.log(val);
// });
console.log("%%%%%%%%%%%%%%%%%%#################%%%%%%%");
let parivar = [
  { name: "keshav", age: 25, height: 172 },
  { name: "shivam", age: 21, height: 162 },
  { name: "shashank", age: 23, height: 176 },
  { name: "Krishna", age: 45, height: 160 },
];

var sec = parivar.filter(function (value) {
  return value.name === "keshav" || value.name === "shivam";
});
console.log(sec);
console.log("%%%%%%%%%%%%%%%%%##################%%%%%%%%%%%%%%");
var third = parivar.map(function (value) {
  return (value.age = 20);
});
console.log(third);
console.log(parivar);
console.log("%%%%%%%%%%%%%%%%%##################%%%%%%%%%%%%%%");

parivar.filter(function (value) {
  console.log(value);
});
