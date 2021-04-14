let setValues = new Set();
// working with simple values
setValues.add(10);
setValues.add(20);
setValues.add(30);
setValues.add(40);
setValues.add(50);
setValues.add("10");
setValues.add(30); // will be ignored because 30 is already exist
console.log(`Size of Set = ${setValues.size}`);

setValues.forEach((v,i)=>{
    console.log(`v = ${v} and i= ${i} and typeof(v) = ${typeof(v)}`);
});
console.log(` is 30 present ${setValues.has(30)}`);
console.log(` remove 30 ${setValues.delete(30)}`);
console.log(` is 30 present ${setValues.has(30)}`);

console.log(`Keys = ${setValues.keys()}`);
for(let k of setValues.keys()){
    console.log(`Key = ${k}`);
}
for(let v of setValues.values()){
    console.log(`Value = ${v}`);
}
