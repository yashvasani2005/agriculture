const express=require("express");
const router=express.Router();

const {createseedSell}=require("../controller/createseedSell")

router.post("/sellingform",createseedSell);

module.exports=router; 