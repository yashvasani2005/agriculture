import React, { useState } from "react";
import Cardtool from "./Cardtool";
import { useEffect } from "react";
// import axios from "axios";
import { apiConnector } from "../services/connector";


function Alltool() {

	const[loading , setLoading] = useState(false);
	const[data,setData] = useState([])
async function  getData(){
		setLoading(true);
		const respo = await apiConnector('GET',"http://localhost:5000/route/getdata/gettooldata");
		setData(respo.data.data);
		setLoading(false);
		console.log(respo.data.data);
	}

	useEffect(()=>{
		getData();
	},[])
	// let seed = [
	// 	/*tractor */
	// 	{
	// 		title: 'Messy furgution',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 5000000,
	// 		newprice: 1000,
	// 		imgSrc: "img/tractor/messy.jpg"
	// 	},
	// 	{
	// 		title: 'sonalika',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/sona.png"
	// 	},
	// 	{
	// 		title: 'swaraj',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/swaraj.avif"
	// 	},
	// 	{
	// 		title: 'mahindra',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/mahindra.jpg"
	// 	},
	// 	{
	// 		title: 'eicher',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/eicher.jpg"
	// 	},
	// 	{
	// 		title: 'kubota',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/kubota.png"
	// 	},
	// 	{
	// 		title: 'johndeere',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/johndeere.jpg"
	// 	},
	// 	{
	// 		title: 'new holland',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/holland.jpg"
	// 	},
	// 	{
	// 		title: 'ford',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/ford.jpg"
	// 	},
	// 	{
	// 		title: 'class',
	// 		type:'tractor',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/tractor/class.jpg"
	// 	},

	// 	/*planting */

	// 	{
	// 		title: 'hand trowel',
	// 		type:'planting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/planting/hand.jpg"
	// 	},
	// 	{
	// 		title: 'seed drill',
	// 		type:'planting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/planting/seeddrill.jpg"
	// 	},
	// 	{
	// 		title: 'dibber',
	// 		type:'planting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/planting/dibber.jpg"
	// 	},
	// 	{
	// 		title: 'transplanter',
	// 		type:'planting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/planting/transplanter.jpg"
	// 	},
	// 	{
	// 		title: 'cultivator',
	// 		type:'planting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/planting/cultivator.jpg"
	// 	},
	// 	{
	// 		title: 'plow',
	// 		type:'planting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/planting/plow.jpg"
	// 	},
	// 	{
	// 		title: 'Rotary Tiller',
	// 		type:'planting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/planting/rotavator.jpg"
	// 	},
	// 	{
	// 		title: 'Spike Harrow',
	// 		type:'planting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/planting/spike.jpg"
	// 	},

	// 	/* watering */

	// 	{
	// 		title: 'hose',
	// 		type:'watering',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/watering/hose.jpg"
	// 	},
	// 	{
	// 		title: 'watering can',
	// 		type:'watering',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/watering/wateringcan.jpg"
	// 	},
	// 	{
	// 		title: 'Sprinkler',
	// 		type:'watering',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/watering/fuvara.jpg"
	// 	},
	// 	{
	// 		title: 'Drip Irrigation System',
	// 		type:'watering',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/watering/drip.jpg"
	// 	},

	// 	/* weeding */

	// 	{
	// 		title: 'Garden Hoe',
	// 		type:'weeding',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/weeding/garden.jpg"
	// 	},
	// 	{
	// 		title: 'Hand Weeder',
	// 		type:'weeding',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/weeding/hand.jpg"
	// 	},
	// 	{
	// 		title: 'Weed Puller',
	// 		type:'weeding',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/weeding/weedpuller.jpg"
	// 	},

	// 	/* harvesting */

	// 	{
	// 		title: 'Sickle',
	// 		type:'harvesting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/harvesting/sickel.jpg",
	// 		sid:100
	// 	},
	// 	{
	// 		title: 'Combine Harvester',
	// 		type:'harvesting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/harvesting/harvestor.jpg",
	// 		sid:101
	// 	},
	// 	{
	// 		title: 'Pruning Shears',
	// 		type:'harvesting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/harvesting/pruning.jpg"
	// 	},
	// 	{
	// 		title: 'Hay mower',
	// 		type:'harvesting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/harvesting/hay.jpg"
	// 	},
	// 	{
	// 		title: 'Forage harvester',
	// 		type:'harvesting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/harvesting/forage.jpg"
	// 	},
	// 	{
	// 		title: 'hay baller',
	// 		type:'harvesting',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/harvesting/hayballer.jpg"
	// 	},

	// 	/* powertool */

	// 	{
	// 		title: 'Chainsaw',
	// 		type:'powertool',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/powertool/chain.jpg"
	// 	},
	// 	{
	// 		title: 'Leaf Blower',
	// 		type:'powertool',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/powertool/fukani.jpg"
	// 	},
	// 	{
	// 		title: 'Hedge Trimmer',
	// 		type:'powertool',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/powertool/trimmer.jpg"
	// 	},

	// 	/* protection */

	// 	{
	// 		title: 'Insecticide Sprayer',
	// 		type:'protection',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/protection/pap.jpg"
	// 	},

	// 	{
	// 		title: ' Insect Netting',
	// 		type:'protection',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/protection/net.jpg"
	// 	},
	// 	{
	// 		title: 'row covers',
	// 		type:'protection',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/protection/row.jpg"
	// 	},

	// 	/* measurment */


	// 	{
	// 		title: 'ph meter',
	// 		type:'measurment',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/measurment/ph.jpg"
	// 	},
	// 	{
	// 		title: 'Moisture Meter',
	// 		type:'measurment',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/measurment/moi.jpg"
	// 	},
	// 	{
	// 		title: ' Anemometer',
	// 		type:'measurment',
	// 		disc: 'hello everyone this is rice and it market price 1400',
	// 		oldprice: 120,
	// 		newprice: 100,
	// 		imgSrc: "img/measurment/ane.jpg"
	// 	},

	// ]
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

	const [type , setType] = useState('all');

	const filteredData = type === 'all' ? data : data.filter(item => item.type === type);
	return (
		<div>

			<div className="allbutton">
		      	<button className="head-btn" onClick={()=>setType('all')}>all</button>
				  <button className="head-btn" onClick={()=>setType('tractor')}>tractor</button>
				<button className="head-btn" onClick={()=>setType('planting')}>planting</button>
				<button className="head-btn" onClick={()=>setType('watering')}>watering</button>
				<button className="head-btn" onClick={()=>setType('weeding')}>weeding</button>
				<button className="head-btn" onClick={()=>setType('harvesting')}>harvesting</button>
				<button className="head-btn" onClick={()=>setType('powertool')}>powertool</button>
				<button className="head-btn" onClick={()=>setType('protection')} >protection</button>
				<button className="head-btn" onClick={()=>setType('measurment')}>measurment</button>
			</div>
			<div className="allbox">


				{/* <Box ind={0}/>
           <Box ind={1}/>
           <Box ind={2}/>
           <Box ind={1} /> */}
				{
					filteredData.map((data) => (
						<Cardtool  amount={data.newprice} data={data} checkouthandler={checkouthandler} />
					))
				}


			</div>
		</div>


	)
}

export default Alltool