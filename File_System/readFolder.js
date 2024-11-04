const fs=require('fs');

// it read data from  the folder 

fs.readdir('../NODE JS/File_System/TEST',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.readFile('../NODE JS/File_System/TEST/index.txt',(err,subdata)=>{
            console.log(subdata.toString());
        })
        console.log(data);
    }
})