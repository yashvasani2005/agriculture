const express=require("express");
const router=express.Router();
  
 const{seeddata}=require('../controller/createseeddata')
 const{fertilizerdata}=require('../controller/createfertilizerdata')
 const{pesticidedata}=require('../controller/createpesticidedata')
 const{tooldata}=require('../controller/createtooldata')
 const{animalfeeddata}=require('../controller/createanimalfeeddata')



router.post("/createseeddata",seeddata);
router.post("/createfertilizerdata",fertilizerdata);
router.post("/createpesticidedata",pesticidedata)
router.post("/createtooldata",tooldata)
router.post("/createanimalfeeddata",animalfeeddata)


const {getseeddata}=require('../controller/getseeddata')
router.get("/getseeddata",getseeddata);

const {getfertilizerdata}=require('../controller/getfertilizerdata')
router.get("/getfertilizerdata",getfertilizerdata);

const {getpesticidedata}=require('../controller/getpesticidedata')
router.get("/getpesticidedata",getpesticidedata);


const {gettooldata}=require('../controller/gettooldata')
router.get("/gettooldata",gettooldata);

const {getanimaldata}=require('../controller/getanimaldata')
router.get("/getanimaldata",getanimaldata);


module.exports = router; 