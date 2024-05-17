require("dotenv").config();
const express = require("express");
const app=express();
const products_routes=require("./routes/products")
const connectDB=require("./config/connectDB")

const PORT=process.env.PORT || 8080;


app.get('/',(req,res)=>{
    res.send("hii i am live!!!!!!!");
});

app.use("/api/products",products_routes)

 const start=async()=>{
    try {
        await connectDB(process.env.MANGODB-URL);
        app.listen(PORT,()=>{
        console.log(`${PORT} yess i am in!!`);
        })
    } catch (error) {
        console.log(error);
    }
 }
 start();