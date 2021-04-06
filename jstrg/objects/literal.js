// The literal object contains all members always public
// SInce the literal overweites the same object attributes
// it will be 'Singleton' per file / block / function
var person = {}; // empty object literal

person.Id = 101; // adding or defining attributes for the luteral
person.Name = "ABC";
console.log(person.Id + ' '  + person.Name);

// define literal with attributes
var emp = {
    EmpNo:102,
    EmpName: 'PQR'
};
console.log(emp.EmpNo + ' ' + emp.EmpName);
// adding new attributes in the existing object 
emp.Salary = 1000;
console.log(emp.EmpNo + ' ' + emp.EmpName + ' ' + emp.Salary);
// modify the object, will overwrite the existing object values
emp.EmpNo  =103;
emp.EmpName = "JDU";
emp.Salary =34500;
console.log(emp.EmpNo + ' ' + emp.EmpName + ' ' + emp.Salary);

// all keys/properties from the Object literal can be read using reflection
// Each Object Literal is an 'Object' type that defines 'Keys' using 'defineProperty()'
// method of the 'Object' type and thats why it is Iteratable 
// approach 1
for(var p in emp) {
    console.log('Propety Name = ' + p + '  Value name = ' + emp[p]);
}

// approach 2: from ES 5, using Objeck.keys() method
// returns array of string containing properties(or keys) from the Literal 
var properties = Object.keys(emp);
console.log(properties);

// also define the behaviors (aka methods) for the object
// the function property
emp.fn = function(){
    console.log('I am a function in Literal');
};
// accessing the function 
emp.fn();
// Literals are also known as the JSON Value Objects or JSON objects
console.log(JSON.stringify(emp));

 properties = Object.keys(emp);
console.log('All Propertie = '+ properties);

// imporantant uses of Literal in Modern JS programming
// 1. use it for storing schema collection  
// complex array of objects OR JSON Array
var emps = [
    {EmpNo:101,EmpName:'A'},
    {EmpNo:102,EmpName:'B'},
    {EmpNo:103,EmpName:'C'}
];

// 2. Used for storing responses from exteranl RSET APIs
// 3. Use it as a local data structure that contains datavrequired by the application

// the object literal can have only Key/Value OR Literal/Value OR Property/Value pairs
// this will not allow any method hiding, property hinding like OOPs
var obj = {
    add:function(x,y){return x+y;},
    sub:function(x,y){return x-y;}
};
