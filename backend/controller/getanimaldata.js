
const animal=require('../model/animaldata')


const getanimaldata = async(req,res)=>{
    try{
          const respo=await animal.find({})

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

module.exports = {getanimaldata}