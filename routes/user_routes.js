const express= require("express");
const {registerUser,loginUser,currentUser} = require("../controllers/user_controllers");
const validateToken=require("../middleware/validate_token_handler")
const router=express.Router();
router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/current",validateToken,currentUser);
module.exports=router;
