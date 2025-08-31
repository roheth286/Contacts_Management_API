const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config(); 
const app=express(); 
const port=process.env.PORT; 
connectDb();
app.use(express.json());
app.use("/api/contacts",require("./routes/contact_routes"))
app.use("/api/users",require("./routes/user_routes"))
app.use(require("./middleware/error_handling"))
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})