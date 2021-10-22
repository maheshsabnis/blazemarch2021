import {MyClass} from './provider.js';

let obj  =new MyClass();

console.log(`Upper Case ${obj.changeCase('Es6 Modules', "U")}`);
console.log(`Lower Case ${obj.changeCase('Es6 Modules', "L")}`);