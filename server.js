const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config(); // dotenv is a npm package that allows you to read envrionment variables from a file.
const app=express(); //// .config() immediately reads the .env file
const port=process.env.PORT; /// process.env (Stores the contents of the file it is a special global object in node.) 
connectDb();
app.use(express.json());
app.use("/api/contacts",require("./routes/contact_routes"))
app.use(require("./middleware/error_handling"))
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})