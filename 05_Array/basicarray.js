const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const myHero = ["superman", "shaktiman", "batman", "hitman"];
// console.log(myArray[5]);
// console.log(myHero[2]);

//   second method to define array  //
// const myArr2 = new Array(
//   "shivam",
//   "tripathi",
//   420,
//   "keshvatripathi517@gmail,com"
// );
// console.log(myArr2[3]);
//Array method //
//Array.push//
// Array.pop//

// myArray.push(12);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.unshift(5);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
// console.log(myArray.includes("10"));
// console.log(myHero.indexOf("batman"));
// const newarr = myArray.join();
// console.log(newarr);
// console.log(typeof newarr);

console.log("A", myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log("B", myArray);
// console.log(myArray);

const nyn2 = myArray.splice(1, 3);
console.log("C", myArray);
console.log(nyn2);
