const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpModel = require("../model/otp");
const otpGenerator = require("otp-generator");
const userModel = require('../model/userDetails');
const mailSender = require('../transport/mailsender');
const otpTemplate = require("../emailBody/verificatioOtp");
const userDetails = require("../model/userDetails");
require("dotenv").config();


//signUp
const signUp = async (req, res) => {
  const {accountType,  firstName, lastName, email, password, confirmPassword,  otp} = req.body;

  if(!accountType || !firstName || !lastName || !email || !password || !confirmPassword || !otp){
    return res.json({
      success:false,
      msg:"Fill All the Fields"
    })
  }

  const userPresent = await userModel.findOne({email:email});

  if(userPresent){
    return res.json({
      success:false,
      msg:"User Alredy Exist"
    })
  }

  const findOtp = await otpModel.find({email}).sort({createdAt: -1}).limit(1);
  
  if(findOtp[0].otp !== otp){
    return res.json({
      success:false,
      msg:"OTP Does not match"
    })
  }
    const hasedPassword = await bcrypt.hash(password,10);

    const registredUser = await userModel.create({
      firstName,
      lastName,
      email,
      password:hasedPassword,
      role:accountType
    })

  return res.json({
    success:true,
    msg:"User Registred"
  })
};

//Login
const login = async (req, res) => {

  try {
    const {email, password} = req.body;                  //get data from req body
  
    if(!email || !password){                             // validate krlo means all inbox are filled or not;
        return res.json({
            success:false,
            message:'Please Fill up All the Required Fields',
        });
    }
    
    const user = await userModel.findOne({email});          //user check exist or not
    if(!user){
        return res.json({
            success:false,
            message:"User is not registrered, please signup first",
        });
    }
    
    if(await bcrypt.compare(password, user.password)){                    //generate JWT, after password matching/comparing
        const payload = {                                                 // generate payload;
            email: user.email,
            id: user._id,
            accountType:user.role,
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {         // generate token (combination of header , payload , signature) 
            expiresIn:"72h",                                               // set expiry time;
        });
        user.token = token;
        user.password= undefined;

        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: false,
      };
      res.cookie("token", token , options);
     return res.status(200).json({
          success: true,
          token,
          user,
          message: 'Logged in successfully',
      });
  }
    else {
        return res.json({
            success:false,
            message:'Password is incorrect',
        });
    }
}
catch(error) {
    console.log(error);
    return res.json({
        success:false,
        message:'Login Failure, please try again',
    });
}


};

//sendOTP
const sendOTP = async (req, res) => {
  try {
    let genratedOtp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets :false,
    });

    let exist = await otpModel.findOne({ otp: genratedOtp });
    while(exist){
      genratedOtp = otpGenerator.generate(6, {
        lowerCaseAlphabets :false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      let exist = await otpModel.findOne({ otp: genratedOtp });
    }

    let response = await otpModel.create({
      otp: genratedOtp,
      email: req.body.email,
    });

    let res2 = await mailSender(req.body.email , "Verification Code for CrickDelight" , otpTemplate(genratedOtp));
    res.json({
      success: true,
      msg: "OTP Sent Successfully",
    });

  } catch {
    res.json({
      success: false,
      msg: "Something Went Wrong",
    });
  }
};

// Controller for Changing Password
const changePassword = async (req, res) => {};
const addtocart=async(req,res)=>{
  console.log(req.body,"62")

  const isUpdate= await userDetails.findByIdAndUpdate(
    {_id:req.body.userId},
    {$push: {Cart:req.body._productId}},{new:true}
  )
  console.log(isUpdate);
  if(isUpdate){
    return res.send({
      success:true,
      message:"add to cart succesfully"
    })
  }
  else{
    return res.send({
      success:false,
      message:"server error"
    })
  }

return res.send('add')
}



//getcart

const getcart=async(req,res)=>{
  const userId=req.body.userId

  const data=await userDetails.findOne({_id:userId}).populate('Cart')
  if(data){
    return res.send({
      success:true,
      message:" get cart succesfully",
      data:data
    })
  }
  else{
    return res.send({
      success:false,
      message:"server error"
    })
  }

}


module.exports = { signUp, login, sendOTP, changePassword ,addtocart,getcart};


