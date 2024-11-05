const express=require('express');
const app=express();
const port=4200;

app.get('/getting',(req,res)=>{
    res.send("This is Get request");
})

app.get('/getting1',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname})
})

app.post('/posting',(req,res)=>{
    res.send('This is post request')
})

app.put('/putting',(req,res)=>{
    res.send('This is put request')
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})