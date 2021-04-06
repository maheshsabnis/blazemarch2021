// MyObject will be parsed as constructor function and accepted as class
var MyObjct = function(){
    this.data =[10,20,30];
    this.add= function(x,y){
        printMessage();
        return (x*x) + 2*x*y + y*y;
    };
    this.mult = function(x,y){
        printMessage();
        return (x*x) * 2*x*y * y*y;
    };
    // not prefixed by 'this' so its is parsed as Private member
    function printMessage(){
        console.log('I am Print Messsage w/o this prefix');
    }
};

// // adding prototype
// MyObjct.prototype.raiseTo = function(x,y){
//     return Math.pow(x,y);
// };