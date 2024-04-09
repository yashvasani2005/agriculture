const jwt = require("jsonwebtoken");
const userModel = require("../model/userDetails");
require("dotenv").config();

exports.isLoggedin = async (req, res, next) => {
  try {
   
    if (!req.cookies.token) {
      return res.json({
        success: false,
        msg: "Token Not Found",
      });
    }
    const user = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
   
    const userAtDb = await userModel.findOne({ email: user.email });
    
    if (!userAtDb) {
      return res.json({
        success: false,
        msg: "Invalid User",
      });
    }

    userAtDb.password = undefined;
    req.user = userAtDb;
    
    next();
  } catch (error) {
    
    return res.json({
      success: false,
      msg: "error while checking",
    });
  }
};


