let names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Nandu", "Abhay"];

// ES 6 iteration
console.log('ES 6 for..of loop');
for(let n of names){
    console.log(n);
}
// callback syntax changes using Arrow Operators
// explicitely written function passed as callback function 
function printValues(n,i){
    console.log(`Value at ${i}th position is = ${n}`);
}
// passing printValues as callback function
names.forEach(printValues);

console.log();

// using inline Callback function
console.log('Using inline callback function');
names.forEach(function(n,i){
    console.log(`Value at ${i}th position is = ${n}`);
});

// using Arrow operator
console.log('Using Arrow Operator');
names.forEach((n,i)=>{
    console.log(`Value at ${i}th position is = ${n}`);
});

// using map() for iteration
console.log('Using map');
names.map((n,i)=>{
    console.log(`Value at ${i}th position is = ${n}`);
});
