const fs = require('fs');

// synchronous read
// if error occured in sync operations then try..catch block is best practice (mandatory)
// parameter 1: tyhe file path
// parameter 2: tyhe file encding for reading
try{
let data = fs.readFileSync('myfile20.txt', {encoding:'ascii'});
    console.log(`Data Read from file ${data}`);
} catch(e){
    console.log(`Exception Occured ${e.message}`);
}

// async read

fs.readFile('myfile20.txt', {encoding:'ascii'}, (error,data)=>{
    if(error) {
        console.log(`Error in reading file ${error.message}`);
        return;
    }
    console.log(`Data Read from file Asynchronously ${data}`);
});
for(let i=0;i<100;i++){
    console.log(`i = ${i}`);
}