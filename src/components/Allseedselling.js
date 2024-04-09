import React from "react";
import Cardseedselling from "./Cardseedselling";
import  sellData from '../data/sellData'

 function Allseedselling(){


	const seed = sellData();
    return(
		
    <div>
        <div className="allbox">
           {
            seed.map((data)=>(
               <Cardseedselling data = {data} />
            ))
           }
        </div>
    </div>


    )
 }

 export default Allseedselling