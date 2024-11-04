const fs=require('fs');

// it add  the content in the file at last it not arise all the content

fs.appendFile('../NODE JS/File_System/test.txt',"MY Name is lavanya",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("writing into the file successfully");
    }
})