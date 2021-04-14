let obj = [10,20];

console.log(`initial State for obj = ${obj}`);
function addObj(x){
    // return obj.push(x);
   let obj1 = [...obj,x];
   return obj1;
}

obj = addObj([30,40,50]);
console.log(`New State after Add = ${obj}`);

function removeFromObj(){
    obj.pop();
    return obj;
}

removeFromObj();
console.log(`New State after Remove = ${obj}`);