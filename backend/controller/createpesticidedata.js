const pesti=require('../model/pesticidedata')

const pesticidedata=async(req,res)=>{
    try{
        // const{title,disc,oldprice,newprice,imgSrc}=req.body;

        // const response=await seed.create({title,disc,oldprice,newprice,imgSrc});
        const {data} = req.body;
        console.log(data)
        const response = pesti.insertMany(data);
        return res.json({
            success:true,
            message:"entry created succesfully"
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

module.exports = {pesticidedata}