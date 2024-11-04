const fs=require('fs');

// it create the folder 

fs.mkdir('../NODE JS/File_System/TEST',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder is created successfully");
    }
})