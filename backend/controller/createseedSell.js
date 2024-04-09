const sellingSchema=require("../model/sellingSchema")

exports.createseedSell=async(req,res)=>{
    try{
        const{
            fname,
            lname,
            email,
            mo_no,
            dob,
            address,
            city,
            pincode,
            state,
            country,
            stock
        }=req.body;

        const response=await sellingSchema.create({fname,lname,email,mo_no,dob,address,city,pincode,state,country,stock})

        res.json({
            success:true,
            data:response,
            message:"redy data ave che"
        })



    }
    catch(err){
        console.log(err);
        console.error(err);
        res.json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}