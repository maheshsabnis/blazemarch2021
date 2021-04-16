console.log('This is a.js');
var x = 100;
function display(str){
    return str.toUpperCase();
}
console.log('This is b.js');
console.log(`in b.js x = ${x}`);
console.log(`In b.js upper case = ${display('js modules')}`);

function add(x,y){
    return x +y;
}

console.log(add(100,200));