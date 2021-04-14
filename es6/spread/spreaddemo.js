// JS parser uses 'arguments' array to findout
// length of parameters passed ti method
function summation(x,y){
    return x+y;
   // return parseInt( x)+ parseInt( y);
}

console.log(`Add 2 = ${summation(20,30)}`);
console.log(`Add 2 = ${summation(20)}`);
console.log(`Add 2 = ${summation()}`);


function summationarr(values){
    let sum = 0;
    if(values.length > 0){
        values.forEach((v,i)=>{
            sum += v;
        });
    }
    return sum;
}

console.log(`Add 2 = ${summationarr([20,30])}`); // array mutation for 2 in length
console.log(`Add 3 = ${summationarr([20,30,40])}`); // array mutation for 3 in length
console.log(`Add 4 = ${summationarr([20,30,40,50])}`); // array mutation for 4 in length

function summationspread(...values){
    let sum = 0;
    if(values.length > 0){
        values.forEach((v,i)=>{
            sum += v;
        });
    }
    return sum;
}

console.log(`Add 2 = ${summationspread(20,30)}`); // array mutation for 2 in length
console.log(`Add 3 = ${summationspread(20,30,40)}`); // array mutation for 3 in length
console.log(`Add 4 = ${summationspread(20,30,40,50)}`); // array mutation for 4 in length

let obj = {a:10};
console.log(JSON.stringify(obj));
obj = {...obj, b:20}; // creating an Immutable Object

console.log(JSON.stringify(obj));


