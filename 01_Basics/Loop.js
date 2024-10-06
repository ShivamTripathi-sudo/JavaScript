// in js there are 4 type of loop written below
// 1- for loop
// 2- for forEach
// 3- for of
// 4- for in
// %%%%%%%%%%%%%%%%%%%%%%% for loop %%%%%%%%%%%%%%%%%%%%%%
var newrr = [10, 12, 23, 334];
for (var i = 0; i < newrr.length; i++) {
  console.log(newrr[i]);
}
// %%%%%%%%%%%%%%%%%%%%%%%  forEach %%%%%%%%%%%%%%%%%%%%%%
var new3 = [12, 100, 1000, 2300, 7600];
new3.forEach(function (value, index, fullArray) {
  console.log(value);
});
// %%%%%%%%%%%%%%%%%%%%%%% for of %%%%%%%%%%%%%%%%%%%%%% like as java enhance/for each loop;

var string = ["shivam", "shiva", "jitu", "rizwan", "tiwari"];
for (var ts of string) {
  console.log(ts);
}

// %%%%%%%%%%%%%%%%%%%%%   for in   %%%%%%%%%%%%%%%%%%%%%%
var sub = ["jitu", "mohit", "varun", "anapad", "golu"];
for (var i in sub) {
  console.log(sub[i]);
}

//  %%%%%%%%%%%%%%%%%%%%%%%           Object                   %%%%%%%%%%%%%%%%%%%%%%

var details = {
  name: "shivam",
  age: 24,
  color: "black",
  height: "172",

  shivam: {
    name1: "Jack",
    age: 35,
    color: "black",
  },
};

// console.log(details.shivam.name1);
// for in  :- is always use with objects
// for (var i in details) {
//   console.log("Key is " + i + ", value is " + details[i]);
// }
// for (var i in details.shivam) {
//   console.log("Key is " + i + ", value is " + details.shivam[i]);
// }
