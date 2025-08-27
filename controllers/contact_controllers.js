const getContacts=(req,res)=>
{
    res.status(200).json({message: "Get all contacts"});
};
const createContacts=(req,res)=>
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
};
const getContact=(req,res)=>
{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};
const updateContact=(req,res)=>
{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
};
const deleteContact=(req,res)=>
{
    res.status(200).json({message: `Delete account for ${req.params.id}`});
};
module.exports={getContacts,createContacts,getContact,updateContact,deleteContact};