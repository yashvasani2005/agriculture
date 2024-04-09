const seed=require('../model/seeddata')


const getseeddata = async(req,res)=>{
    try{
          const respo=await seed.find({})

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

module.exports = {getseeddata}