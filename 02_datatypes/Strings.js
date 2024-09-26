const name1 = "keshav tripathi";
let age = 23;
const color = "fair";
console.log(name1 + " " + age);
console.log(
  `hello my name is ${name1} and my age is ${age} and color is ${color} `
  // #####  (``)  ###backtick used for String interpulation inside direct inject variable
);
const sirname = new String("shivamtripathi");

// console.log(sirname[6]);
// console.log(sirname.__proto__.__proto__);
// console.log(sirname.length);
// console.log(sirname.toUpperCase());
// console.log(sirname.charAt(2));
// console.log(sirname.lastIndexOf("t"));
// console.log(sirname.indexOf("v"));
// console.log(sirname.slice(8, 0));
// const anotherString = sirname.slice(-8, 4);
// console.log(anotherString);
// const hum = "keshavtripathi";
// const surname = hum.slice(8, 12);
// console.log(surname);
// Trim is work on white spaces and line terminations//

const TrimString = "     once upon a time   ";
console.log(TrimString);
console.log(TrimString.trim());

// Replace method//
const replaceString = "https://www.google.com/%20search?";
console.log(replaceString);
console.log(replaceString.replace("%20", "__"));
console.log(replaceString.includes("google"));
console.log(replaceString.includes("hello"));
console.log(TrimString.split("_"));
