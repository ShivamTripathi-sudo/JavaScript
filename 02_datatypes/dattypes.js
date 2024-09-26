// ######   primitive datatypes // this datatypes store in stack memory #######
//  7 types : string ,undefined, null,number,boolean ,symbol, bigint
//  const score= 100;
//  console.log(score);
//  const score2= 10212919397676736483748343n;// big int
//  console.log(score2);
//  let ludo= false
//  console.log(ludo);
//  let ludo2= null
//   console.log(ludo2)

// const id1= Symbol('shivam');// use of symbol
// const id2= Symbol('shivam');
// let check=  id1===id2;
// console.log(check)
// const id4= ('shivam');
// const id3= ('shivam')
// let check2=  id3==id4;
// console.log(check2)

// #### Referrence (non primitive) store in heap memory  ########//
// Array, Object, Function /////

let array = ["shivam", "shiva", "mustak miyan", "jitendra"]; //Array
// console.log(array);
// console.log(array[2])
// console.log(array[3]);
let objectofshivam = {
  //object
  name: "keshav",
  age: 25,
  color: "fair",
  height: 172,
  qualification: "notdefine",
};
console.log(objectofshivam.qualification);
//  console.table([penut ,ot, dob ,gender,accountId,notChange]) ## print multiple value in once time//
console.table([
  objectofshivam.name,
  objectofshivam.color,
  objectofshivam.age,
  objectofshivam.height,
  objectofshivam.qualification,
]);

// ### finction ###
// ## please understand to heap memory this memory provide direct referance of dattypes
const fun = function () {
  console.log("hello dean how are you");
};

let userone = {
  email: "shiv@gmail.com",
  name: "shivam",
};
let usertwo = userone;
console.log(usertwo == userone);

usertwo.email = "keshav@gmail.com";
console.log(userone.email);
console.log(userone.email);
// #####   primitive data type store in stack memory undersatand  ##########

var name1 = "kudan kumar mishra";
var name2 = name1;
name2 = "shivamtripathi";

console.log(name1);
console.log(name2);
