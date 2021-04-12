let values = [1,2,3,4,5,6,7,8,9];

let res1 = values.forEach((v,i)=>{
     let c = v * 2;
     console.log(`In side forEach c = ${c}`);
     return c;
});

console.log(`Values with forEach = ${values}`);
console.log(`Res 1  = ${res1}`);

console.log();

let res2 = values.map((v,i)=>{
    if(v%2===0){
    let c = v * 2;
    console.log(`In side map c = ${c}`);
    return c;
}
});
console.log(`Values with map = ${values}`);
console.log(`Res 2  = ${res2} and ${typeof(res2)} and length of res2 = ${res2.length}`);
