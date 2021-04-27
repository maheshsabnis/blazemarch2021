const fs =  require('fs');

// create a directory
// fs.mkdir('tempdir', (error)=>{
//     if(error){
//         return `Error ${error.message}`
//     }
//     console.log(`Directory Created....`);
// });

// read all files from directory
// use 'fs.stat' to check if the current entry in directory is file or subdirectory


fs.readdir('./tempdir', (error,files)=>{
    if(error){
        return `Error ${error.message}`
    }
    if(files.length > 0) {
        files.forEach((file,idx)=>{
            fs.stat(`./tempdir/${file}`, (err,stat)=>{
                if(err){
                    return `Error in stat ${err.message}`
                }
                if(stat.isFile()){
                    // display file
                    console.log(file);
                    console.log(fs.readFileSync(`./tempdir/${file}`,{encoding:'ascii'}));
                }
            });
        });
    } 
});
