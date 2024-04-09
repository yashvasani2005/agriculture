// import React , {useEffect} from "react";
// import { useState } from "react";
// import Cart from "./Cart";
// // import axios from 'axios';
// import { apiConnector } from "../services/connector";


//  function Allcart(){
//     const navigate=useNavigate();
//     const[data,setdata]=useState([]);
    
//     useEffect(()=>{
//        const user = JSON.parse(localStorage.getItem("user"));
//        const userId=user._id
//        const data={userId}

//        axios.post('http://localhosat:5000/auth/get-user-cart',data)
//        .then(res=>{
//            console.log(res.data,"155")
//            setdata(res.data.Cart)
//        })
//        .catch(err=>{
//            console.log(err)
//        })
//     })

// 	const checkouthandler =async (amount)=>{
// 		// const {data:{key}}=await axios.get("http://localhost:3000/api/getkey");
// 		let key = null;
// 		let order=null;
// 		try{
// 			const res = await apiConnector('GET', 'http://localhost:4000/api/getkey');
// 			 key = res.data.key;
// 			const response = await apiConnector("POST", "http://localhost:4000/checkout",{amount})
// 			 order = response.data.order;
// 		}catch(err){
// 			console.log("ErrOR come")
// 			console.log(err)
// 		}


		

// 		// const {data:{order}}=await axios.post("http://localhost:3000/checkout",{amount})
// 		// console.log(window);
// 		const options ={
// 		  key,
// 		  amount:order.amount,
// 		  currency:"INR",
// 		  name:"I-Farmer",
// 		  description:"Razorpay tutorial",
// 		  image:"/img/logo/logo.png",
// 		  order_id:order.id,
// 		  callback_url:"http://localhost:4000/paymentverification",
// 		  prefill:{
// 			name:"yash vasani",
// 			email:"yashasani@gmail.com",
// 			contact:"1234567890"
// 		  },

// 		  notes:{
// 			"address":"razorapy official"
// 		  },
// 		  theme:{
// 			"color":"#3399cc"
// 		  }
// 		};
// 		const razor = new window.Razorpay(options);
// 		razor.open();
// 		{
// 			console.log(amount);}
	
// 	  }
//     return(
//     <div>
//         <div className="allbox">
//            {/* <Box ind={0}/>
//            <Box ind={1}/>
//            <Box ind={2}/>
//            <Box ind={1} /> */}
//            {
//             data.map((data)=>(
//                <Cart amount={data.newprice} data = {data} checkouthandler={checkouthandler} />
//             ))
//            }
//         </div>
//     </div>


//     )
//  }

//  export default Allcart