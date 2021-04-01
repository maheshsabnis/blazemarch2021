// the code must be executed in the strict mode 

// "use strict";
function printValue(x){
    var y = 0;
    if(x){
       y = 10;
        console.log('In If Statement y = ' + y);
    }
    
    console.log('Out of If Statement y = ' + y);
}

// the for loop

for(var i=0;i<10;i++) {
    console.log('Inside loop i = ' + i);
} 
i++; // dangerous
i =0; // or undefined
console.log('Outside of the  loop i = ' + i);
