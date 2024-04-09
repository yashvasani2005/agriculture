import React , {useEffect} from "react";
import { useState } from "react";
import Card from './Cardseed'
// import axios from 'axios';
import { apiConnector } from "../services/connector";


 function Allseed(){
	      const[loading , setLoading] = useState(false);
        const[data,setData] = useState([])
async function  getData(){
            setLoading(true);
            const respo = await apiConnector('GET',"http://localhost:5000/route/getdata/getseeddata");
            setData(respo.data.data);
		
            setLoading(false);
			console.log(respo);
        }

        useEffect(()=>{
            getData();
        },[])

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
               <Card amount={data.newprice} data = {data} checkouthandler={checkouthandler} />
            ))
           }
        </div>
    </div>


    )
 }

 export default Allseed