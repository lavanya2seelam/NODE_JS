
const db = require('./dbs');  // Import the pool from your db file

const express=require('express');
const app=express();
app.use(express.json()); // Middleware to parse JSON bodies

app.listen(8002,()=>{
    console.log("server running on port 8002");
})

app.get('/api/create',(req,res)=>{
    db.create(req.body.tablename)
    .then(()=>{
        res.send("table created sucessfully");
        console.log("table created successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.post('/api/insert',(req,res)=>{
    const {name,email,fee}=req.body;
    db.insert(name,email,fee)
    .then((data)=>{
    res.send(req.body);
    })
   .catch((err)=>{
    console.log(err);
   })
})
app.put('/api/update',(req,res)=>{
   const {id,name}=req.body;
    db.update(id,name)
    .then((data)=>{
    res.send(req.body);
    })
   .catch((err)=>{
    console.log(err);
   })
})

app.delete('/api/delete',(req,res)=>{
    db.delete1(req.body.id).then((data)=>{
    res.send(`row deleted successfully`);
    })
   .catch((err)=>{
    console.log(err);
   })
})

app.get('/api/select', (req, res) => {
    db.select()
        .then((data) => {
            res.send(data);
            console.log("data fetched successfully");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error retrieving data");
        });
});












