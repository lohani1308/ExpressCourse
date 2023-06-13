const express=require('express');
const cors=require('cors');

const app=express();
const PORT=process.env.PORT || 3000;

const apiData=require("./apiData.json");

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Home Page");
});

app.get('/service',(req,res)=>{
    res.send(apiData);
})


app.listen(PORT,()=>{
    console.log("Server is running................!");
})
