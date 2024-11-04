const fs=require('fs');

// it delete the folder 

fs.rmdir('../NODE JS/File_System/TEST1',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder is created successfully");
    }
})