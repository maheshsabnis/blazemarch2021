let userObj={};

// setting value

Reflect.set(userObj, 'UserName', 'Mahesh');

let val =  Reflect.get(userObj, 'UserName');
console.log(
   val
);