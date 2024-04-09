import React from "react";
import Cardfertilizer from "./Cardfertilizer";
import { useState,useEffect } from "react";
// import axios from "axios";
import { apiConnector } from "../services/connector";


 function Allfertilizer(){
	const[loading , setLoading] = useState(false);
	const[data,setData] = useState([])
async function  getData(){
		setLoading(true);
		const respo = await apiConnector('GET',"http://localhost:5000/route/getdata/getfertilizerdata");
		setData(respo.data.data);
	
		setLoading(false);
		console.log(respo);
	}

	useEffect(()=>{
		getData();
	},[])

//    let seed =[
// 		{
// 			title : 'Urea',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/urea.jpeg"
// 		},
// 		{
// 			title : 'Ammonium Nitrate',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/amo-nit.webp"
// 		},
// 		{
// 			title : 'Ammonium Sulfate',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/amo-sulfet.jpeg"
// 		},
// 		{
// 			title : 'Diammonium Phosphate ',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/dap.jpeg"
// 		},
//       {
// 			title : 'Potassium Chloride',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/kcl.jpeg"
// 		},
// 		{
// 			title : 'Potassium Sulfate',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/k2o.jpeg"
// 		},
// 		{
// 			title : 'Compost',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc :"img/fertilizer/compost.jpeg"
// 		},
// 		{
// 			title : 'Bone Meal ',
// 			disc :'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc :"img/fertilizer/bonemil.jpeg"
// 		},
// 		{
// 			title : 'Iron Chelates',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/iron.jpeg"
// 		},
// 		{
// 			title : 'Zinc Sulfate ',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/zinc.jpeg"
// 		},
// 		{
// 			title : 'Magnesium Sulfate ',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/fertilizer/mg.jpeg"
// 		},
	
// 	]
	const checkouthandler =async (amount)=>{
		// const {data:{key}}=await axios.get("http://localhost:3000/api/getkey");
		let key = null;
		let order=null;
		try{
			const res = await apiConnector('GET', 'http://localhost:4000/api/getkey');
			 key = res.data.key;
			const response = await apiConnector("POST", "http://localhost:4000/checkout",{amount})
			 order = response.data.order;
		}catch(err){
			console.log("ErrOR come")
			console.log(err)
		}


		// const {data:{order}}=await axios.post("http://localhost:3000/checkout",{amount})
		// console.log(window);
		const options ={
		  key,
		  amount:order.amount,
		  currency:"INR",
		  name:"I-Farmer",
		  description:"Razorpay tutorial",
		  image:"/img/logo/logo.png",
		  order_id:order.id,
		  callback_url:"http://localhost:4000/paymentverification",
		  prefill:{
			name:"yash vasani",
			email:"yashasani@gmail.com",
			contact:"1234567890"
		  },

		  notes:{
			"address":"razorapy official"
		  },
		  theme:{
			"color":"#3399cc"
		  }
		};
		const razor = new window.Razorpay(options);
		razor.open();
		{
			console.log(amount);}
	
	  }
    return(
    <div>
        <div className="allbox">
           {/* <Box ind={0}/>
           <Box ind={1}/>
           <Box ind={2}/>
           <Box ind={1} /> */}
           {
            data.map((data)=>(
               <Cardfertilizer amount={data.newprice} data = {data} checkouthandler={checkouthandler} />
            ))
           }
        </div>
    </div>


    )
 }

 export default Allfertilizer