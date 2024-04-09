import React from "react";
import Cardanimal from "./Cardanimal";
import { useState ,useEffect} from "react";
// import axios from "axios";
import { apiConnector } from "../services/connector";


 function Allanimal(){
	const[loading , setLoading] = useState(false);
	const[data,setData] = useState([])
async function  getData(){
		setLoading(true);
		const respo = await apiConnector('GET',"http://localhost:5000/route/getdata/getanimaldata");
		setData(respo);
	
		setLoading(false);
		console.log(respo);
	}

	useEffect(()=>{
		getData();
	},[])

   let seed =[
		{
			title : 'cattel feed',
			disc : 'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc : "img/animal feed/khol.jpg"
		},
		{
			title : 'cottonseed meal',
			disc : 'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc : "img/animal feed/meal.jpg"
		},
		{
			title : 'dried organic cotton',
			disc : 'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc : "img/animal feed/kapasiya.jpg"
		},
		{
			title : 'meal cubes ',
			disc : 'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc : "img/animal feed/cube.jpg"
		},
      {
			title : 'Pashu ahar',
			disc : 'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc : "img/animal feed/pashuahar.jpg"
		},
		{
			title : 'calcium liquid',
			disc : 'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc : "img/animal feed/calcium.jpg"
		},
		{
			title : 'oil seed',
			disc : 'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc :"img/animal feed/oilseed.jpg"
		},
		{
			title : 'multivitamins ',
			disc :'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc :"img/animal feed/multi.jpg"
		},
		{
			title : 'Specialty Feeds',
			disc : 'hello everyone this is rice and it market price 1400',
			oldprice : 120,
			newprice :100,
			imgSrc : "img/animal feed/mix.jpg"
		},

	
	]
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
            seed.map((data)=>(
               <Cardanimal amount={data.newprice} data = {data} checkouthandler={checkouthandler}/>
            ))
           }
        </div>
    </div>


    )
 }

 export default Allanimal