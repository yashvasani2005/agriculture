import React, { useState } from "react";
import Cardtoolselling from "./Cardtoolselling";
import selldatatool from "../data/selldatatool";


function Alltoolselling() {


	const seed = selldatatool();

	const [type , setType] = useState('all');

	const filteredData = type === 'all' ? seed : seed.filter(item => item.type === type);
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
						<Cardtoolselling data={data} />
					))
				}


			</div>
		</div>


	)
}

export default Alltoolselling