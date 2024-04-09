import React from "react";
import Cardanimalselling from "./Cardanimalselling";
import selldataanimal from "../data/selldataanimal";


 function Allanimalselling(){


	const seed = selldataanimal();
    return(
    <div>
        <div className="allbox">
           {/* <Box ind={0}/>
           <Box ind={1}/>
           <Box ind={2}/>
           <Box ind={1} /> */}
           {
            seed.map((data)=>(
               <Cardanimalselling data = {data} />
            ))
           }
        </div>
    </div>


    )
 }

 export default Allanimalselling