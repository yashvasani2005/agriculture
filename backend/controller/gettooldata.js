const tool=require('../model/tooldata')


const gettooldata = async(req,res)=>{
    try{
          const respo=await tool.find({})

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

module.exports = {gettooldata}