import React from "react";
import Cardpesticide from "./Cardpesticide";
import { useState,useEffect } from "react";
// import axios from "axios";
import { apiConnector } from "../services/connector";


 function Allpesticide(){
	const[loading , setLoading] = useState(false);
	const[data,setData] = useState([])
async function  getData(){
		setLoading(true);
		const respo = await apiConnector('GET',"http://localhost:5000/route/getdata/getpesticidedata");
		setData(respo.data.data);
	
		setLoading(false);
		console.log(respo);
	}

	useEffect(()=>{
		getData();
	},[])

//    let seed =[
// 		{
// 			title : 'Organophosphates',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/d-phosh.png"
// 		},
// 		{
// 			title : 'Carbamates',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/carba.jpeg"
// 		},
// 		{
// 			title : 'Pyrethroids',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/pyre.jpeg"
// 		},
// 		{
// 			title : 'confidor',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/confi.jpeg"
// 		},
//       {
// 			title : 'Atrazine',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/altra.jpeg"
// 		},
// 		{
// 			title : '2,4-di-chlo-pheno acid',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/24d.webp"
// 		},
// 		{
// 			title : 'Paraquat',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc :"img/pesticide/para.jpeg"
// 		},
// 		{
// 			title : 'Chlorothalonil',
// 			disc :'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc :"img/pesticide/chlro.jpeg"
// 		},
// 		{
// 			title : 'Mancozeb',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/manco.jpeg"
// 		},
// 		{
// 			title : 'Thiophanate-methyl',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/phonic.jpeg"
// 		},
// 		{
// 			title : 'Zinc phosphide',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/zinc.jpeg"
// 		},
// 		{
// 			title : 'Bromadiolone',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/bro.jpeg"
// 		},
// 		{
// 			title : 'ulala',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/ulala.jpeg"
// 		},
// 		{
// 			title : 'snailkill',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/pesticide/snail.jpeg"
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
               <Cardpesticide amount={data.newprice} data = {data} checkouthandler={checkouthandler} />
            ))
           }
        </div>
    </div>


    )
 }

 export default Allpesticide