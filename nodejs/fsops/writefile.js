// Writing file Synchronously
// 1. load the fs module

const fs = require('fs');

// write the file synchronously

fs.writeFileSync("./myfile.txt", "The file is Written using Node.js fs module");

console.log('File is written Successfuly');

// write file asynchronously
// if file is already exist it will be replaced
fs.writeFile('mynewfile.txt', "Data Written Asynchronously", (error)=>{
    // always check for errors
    if(error){
        // possible stop the execution
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`File is Successfully Created Asynchronously`);
});

// Appending the file
// the file will be created if not exist else the data will be appended
fs.appendFile('mynewfile1.txt', "New Data in file", (error)=>{
    // always check for errors
    if(error){
        // possible stop the execution
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`File is Successfully appended Asynchronously`);
});

// opening the file with the flag
// w is OpenMode for opening file , if it does not exist
// then it will be created as empty file
fs.open('myfile2.txt', 'w', (error, file)=>{
    if(error){
        // possible stop the execution
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`Opened the File ${file}`);
});

// renaming file
// using the rename function

fs.rename('myfile.txt', 'myfile3.txt',(error)=>{
    if(error){
        // possible stop the execution
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`File is Renamed`);
});

// delete the file
// using 'unlink' method

fs.unlink('myfile3.txt', (error)=>{
    if(error){
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`File is deleted Successfully`);
});
