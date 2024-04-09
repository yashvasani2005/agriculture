import React from "react";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import { apiConnector } from "../services/connector";

import "../index.css"
import "../media.css"
import axios from "axios";

let Card = ({ amount,data,checkouthandler }) => {
  
        const[changeimg,setchangeimg]=useState(0);
        const[refresh,setrefresh]=useState(false);


        let handelImg=()=>{
            // console.log(event.target);
            // setchangeimg(<BsCartCheck className="img" />)
            setchangeimg(!changeimg);
        }
       
    return (

        <div className="product-card">
            <div className="product-tumb">
                <img src={data.imgSrc} alt="yash"  />
            </div>
            <div className="product-details">
                <span className="product-catagory">Seed</span>
                <h4><a href="/cart">{data.title}</a></h4>
                <p>{data.disc}</p>
                <div className="product-bottom-details">
                    <div className="product-price"><small>${data.oldprice}</small>${data.newprice}</div>
                    <button className="buy-now" onClick={()=>checkouthandler(amount)}>Buy Now</button>
                    {/* <img src="/img/logo/add-to-cart.png" alt="LOGO" /> */}
                    {
                        changeimg?(<BsCartCheck className="img" onClick={()=>{
               
                           


                        }}/>):(<BsCartPlus  className="img" onClick={handelImg}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
