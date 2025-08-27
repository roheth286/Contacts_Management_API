const asyncHandler = require("express-async-handler");
const getContacts=asyncHandler(async(req,res)=>
{
    res.status(200).json({message: "Get all contacts"});
});
const createContacts=asyncHandler(async(req,res)=>
{
    const {name,email,phone}=req.body; //object deconstructing name=req.body.name
    if(name==undefined||email==undefined||phone==undefined)
    {
        res.status(400);
        throw new Error("All fields are mandatory"); ///
    }
    else
    {
        console.log(req.body);
        res.status(200).json({message: "Create contacts"});
    }
});
const getContact=asyncHandler(async(req,res)=>
{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});
const updateContact=asyncHandler(async(req,res)=>
{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});
const deleteContact=asyncHandler(async(req,res)=>
{
    res.status(200).json({message: `Delete account for ${req.params.id}`});
});
module.exports={getContacts,createContacts,getContact,updateContact,deleteContact};