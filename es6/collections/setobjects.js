let setObjects = new Set();
let o1 = {name:'A'};
let o2 = {name:'B'};
let o3 = {name:'C'};
let o4 = {name:'D'};
let o5 = {name:'A'}; // o1 and o5 are different though they have same scehma and values

setObjects.add(o1);
setObjects.add(o2);
setObjects.add(o3);
setObjects.add(o4);
setObjects.add(o5);
setObjects.add(o1); // try to add duplicate entry
console.log(`Size of SetObjects =${setObjects.size}`);

for (const obj of setObjects.keys()) {
    console.log(`Keys = ${obj} and ${JSON.stringify(obj)}`);
}
console.log();
for (const obj of setObjects.values()) {
    console.log(`Values = ${obj} and ${JSON.stringify(obj)}`);
}
o5 = null;
console.log(`Size of SetObjects =${setObjects.size}`);

console.log();
for (const obj of setObjects.keys()) {
    console.log(`Keys = ${obj} and ${JSON.stringify(obj)}`);
}
console.log();
for (const obj of setObjects.values()) {
    console.log(`Values = ${obj} and ${JSON.stringify(obj)}`);
}
console.log(`Is o5b exist = ${setObjects.has(o5)}`);