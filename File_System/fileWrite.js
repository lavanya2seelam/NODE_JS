const fs=require('fs');

// it arises all the content in the file write only the content which is given in the method

fs.writeFile('../NODE JS/File_System/test.txt',"",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("writing into the file successfully");
    }
})