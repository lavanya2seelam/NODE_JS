const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/login.html")
})

app.use(express.static(__dirname + '/public'));


app.listen(8000,()=>{
    console.log("SErver is running");
})
