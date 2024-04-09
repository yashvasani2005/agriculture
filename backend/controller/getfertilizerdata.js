const ferti=require('../model/fertilizerdata')


const getfertilizerdata = async(req,res)=>{
    try{
          const respo=await ferti.find({})

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

module.exports = {getfertilizerdata}