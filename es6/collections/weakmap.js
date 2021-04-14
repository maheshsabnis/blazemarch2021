let wm = new WeakMap();

let d1 = {dno:10,dname:'IT'};
let d2 = {dno:20,dname:'HR'};
let d3 = {dno:10,dname:'IT'};

wm.set(d1, [{eno:101,ename:'mahesh',sal:10000},{eno:102,ename:'nilesh',sal:14000}]);
wm.set(d2, [{eno:201,ename:'ajay',sal:10000},{eno:202,ename:'akash',sal:14000}]);
wm.set(d3, [{eno:301,ename:'amit',sal:10000},{eno:302,ename:'amey',sal:14000}]);
wm.set({dno:30,dname:'SL'},[{eno:501,ename:'amit',sal:10000},{eno:502,ename:'amey',sal:14000}]);

console.log(`Has teh record ${wm.has(d1)}`);
// although d3 = {dno:30,dname:'SL'}, the following expression with wm.has({dno:30,dname:'SL'}) refers to the different reference so the result is false 
console.log(`Has the record with dno:30 and dname:'SL' ${wm.has({dno:30,dname:'SL'})}`); // check if the object avaialble

console.log(`The value for d2 ${JSON.stringify(wm.get(d2))}`);

console.log(`The value for d3 ${JSON.stringify(wm.get(d3))}`);
d3 = {dno:40,dname:'AC'}; // overwrite the d3 (objuect mutation)
wm.set(d3, [{eno:401,ename:'amit',sal:10000},{eno:402,ename:'amey',sal:14000}]);
console.log(`The value for d3 ${JSON.stringify(wm.get(d3))}`); // overwrite
d3 = null; // overwrite with null so browser has garbage collected it so the curresponding entry from weakmap is removed
console.log(`The value for d3 ${JSON.stringify(wm.get(d3))}`);

