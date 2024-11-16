const express = require('express');
const cors=require('cors');
const app = express();
const multer=require('multer');

app.use(cors({origin:'*'}))

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
})

const upload=multer({storage:storage})

app.post('/upload',upload.single('lavanya'),(req,res)=>{
    res.send("image uploaded");
})

app.listen(8100,()=>{
    console.log("server is running at port 8100");
})

