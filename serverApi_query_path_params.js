const express=require('express');
const app=express();
const port=4300;

//accessing query params
app.get('/queryparams',(req,res)=>{
    const {id,name}=req.query;
        res.send(`The query params id is ${id} and name is ${name}`);
})

//accessing path params
//in bellow api url ':' means after colon it accepts any path and this service will execute 
app.get('/:name/:city',(req,res)=>{
    const {name,city}=req.params;
    res.send(`The path parametre name is ${name} and city is ${city}`)
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})