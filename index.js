// Put, Patch & Delete http method: Using "POSTMAN":

// import express
const express = require('express');

// create server instance
const app = express();

// Parse data from json to js object:
app.use(express.json()); // POST data will show now as an obj

// Firstly need to POST some data:
app.post('/about', (req,res)=>{
    console.log(req.body);
    res.send("Data saved successfully"); 
})

// Changed entire data or complete fields: PUT http request
app.put('/about',(req,res)=>{
    console.log(req.body);
    res.send("Big data updated successfully");
})

// Changed some filed data : PATCH http request
app.patch('/about', (req,res)=>{
    console.log(req.body);
    res.send("Small data updated successfully");
})

// Delete http request : (Delete age filed from the data)
app.delete('/about',(req,res)=>{
    console.log(req.body);
    res.send("Deleted some data successfully");
})

// Listen at a port no.
app.listen(3000,()=>{
    console.log("Listening at a port no. 3000");
})