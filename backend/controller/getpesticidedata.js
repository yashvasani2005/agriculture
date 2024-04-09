const pesti=require('../model/pesticidedata')


const getpesticidedata = async(req,res)=>{
    try{
          const respo=await pesti.find({})

          res.json({
            success:true,
            data:respo,
            message:"data ave che succesfully"
          })

    }
    catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"invalid going"
        })
    }
}

module.exports = {getpesticidedata}