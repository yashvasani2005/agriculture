// import React from "react";
// import Cardsell from "./Cardsell";


//  function Allsell(){


//    let seed =[
// 		{
// 			title : 'cattel feed',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/animal feed/khol.jpg",
// 			id:100,
// 		},
// 		{
// 			title : 'cottonseed meal',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/animal feed/meal.jpg",
// 			id:101,
// 		},
// 		{
// 			title : 'dried organic cotton',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/animal feed/kapasiya.jpg",
// 			id:103
// 		},
// 		{
// 			title : 'meal cubes ',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/animal feed/cube.jpg",
// 			id:104
// 		},
//       {
// 			title : 'Pashu ahar',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/animal feed/pashuahar.jpg",
// 			id:105
// 		},
// 		{
// 			title : 'calcium liquid',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/animal feed/calcium.jpg",
// 			id:106
// 		},
// 		{
// 			title : 'oil seed',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc :"img/animal feed/oilseed.jpg",
// 			id:107
// 		},
// 		{
// 			title : 'multivitamins ',
// 			disc :'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc :"img/animal feed/multi.jpg",
// 			id:108
// 		},
// 		{
// 			title : 'Specialty Feeds',
// 			disc : 'hello everyone this is rice and it market price 1400',
// 			oldprice : 120,
// 			newprice :100,
// 			imgSrc : "img/animal feed/mix.jpg",
// 			id:109
// 		},

	
// 	]
//     return(
//     <div>
//         <div className="allbox">
//            {/* <Box ind={0}/>
//            <Box ind={1}/>
//            <Box ind={2}/>
//            <Box ind={1} /> */}
//            {
//             seed.map((data)=>(
//                <Cardsell data = {data} index={100}/>
//             ))
//            }
//         </div>
//     </div>


//     )
//  }

//  export default Allsell


// Allsell.js
import React, { useState } from "react";
import Cardseedselling from "./Cardseedselling";
import Cardsell from "./Cardsell";
import sellData from '../data/sellData.js';

const Allsell = () => {
    const [selectedItem, setSelectedItem] = useState(null);


 const seed= sellData();
    return (
        <div>
            <div className="allbox">
                {seed.map((data, index) => (
                    <Cardseedselling key={index} data={data}  />
                ))}
            </div>
            {selectedItem && <Cardsell data={selectedItem} />}
        </div>
    );
};
export default Allsell;
