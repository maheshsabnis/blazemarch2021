"use strict";

var names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Nandu", "Abhay", "Anil", "Vivek", "Satish", "Mukesh", "Vinay", "Kaustubh", "Rahul", "Vikram", "Krushna", "Sameer", "Abhishek", "Piyush"];
var resWithLength6 = [];
names.forEach(function (n, i) {
  if (n.length === 6) {
    resWithLength6.push(n);
  }
});
console.log(resWithLength6); // instead use filter() method

var res = names.filter(function (n, i) {
  return n.length === 6;
});
console.log("NAmes with Length as  6 = ".concat(res)); // search the string with its first occureance

var occur = names.find(function (n) {
  return n === "Mahesh Sabnis";
});
console.log("Occure = ".concat(occur));

function insert(values) {
  return names.push(values);
}

insert(["Prashant", "Suhas", "Suresh", "Gajanan", "Raju"]);
console.log(names);

function remove(index, count) {
  return names.splice(index, count);
}

remove(18, 1);
console.log(names); // reducer(), the method used execute a reducer() function, i.e. the function used to update the state of the array by scanning or iterative over each element of the array

var myarray = [10, 20, 30, 40, 50, 60]; // create a reducer function, the function that contains the state update logic

var reducer = function reducer(finalValue, currentValue) {
  return finalValue + currentValue;
}; // sum of all elemenets in array


console.log(myarray.reduce(reducer)); // modify the state of the array by defining additioal value to be added in the result

console.log("With Additional Value = ".concat(myarray.reduce(reducer, 90)));
