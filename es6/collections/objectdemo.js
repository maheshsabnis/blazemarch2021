// the browser will allocate a space with reference as 'obj'
// store a name with value as 'Ajay' in it
let obj = {name: 'Ajay'};
console.log(`Name = ${obj.name}`); // name is reachable property
let obj1 = obj;
console.log(`Name = ${obj1.name}`); // name is reachable property
// overwite the reference
obj = null; // remove object from the browser memory (Garbage Collected)
console.log('After Null');
// console.log(`Name = ${obj.name}`); // 
// console.log(`Name = ${obj1.name}`); // name is reachable property

let o1 = {name:"Ajay"};
console.log(`o1 = ${o1.name}`);
let arr = [o1]; // object is already stored in other object,s making object null will no be garbage collected
o1 = null; // overwrite the reference 
console.log(`Print Array ${JSON.stringify(arr)}`);
// console.log(`Print with o1 ${o1.name}`); // error of undefined
o1 = {name:'Kumar'}; // overwrite of o1 (rebirth)
console.log(`Print with o1 ${o1.name}`);
arr.push(o1);
console.log(`New Print Array ${JSON.stringify(arr)}`); // array will have new values for o1
