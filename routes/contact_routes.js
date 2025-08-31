const express=require("express");
const router=express.Router();
const {getContacts,createContacts,getContact,updateContact,deleteContact}=require("../controllers/contact_controllers");
const validateToken = require("../middleware/validate_token_handler");
router.use(validateToken);
router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
module.exports=router;