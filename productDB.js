require("dotenv").config();
const connectDB = require("./config/connectDB")
const product = require("./models/product")
const productJSON = require("./product.json")

const start = async ()=>{
    try {
        await connectDB(process.env.MANGODB-URL);
        await product.deleteMany()
        await product.create(productJSON);
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

start();