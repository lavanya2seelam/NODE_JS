const fs=require('fs');

// it Delete the content in the file 

fs.unlink('../NODE JS/File_System/test.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(" file Deleted successfully");
    }
})