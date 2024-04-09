import React from "react";
import  { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import "../index.css"
import "../media.css"

let Cardpesticide = ({  amount,data, checkouthandler={checkouthandler}  }) => {
    // console.log(data.imgSrc);
        // console.log(data.imgSrc);
        const[changeimg,setchangeimg]=useState(0);
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
                <span className="product-catagory">Pesticide</span>
                <h4><a href="/cart">{data.title}</a></h4>
                <p>{data.disc}</p>
                <div className="product-bottom-details">
                    <div className="product-price"><small>${data.oldprice}</small>${data.newprice}</div>
                    <button className="buy-now" onClick={()=>checkouthandler(amount)}>Buy Now</button>
                    {/* <img src="/img/logo/add-to-cart.png" alt="LOGO" /> */}
                    {
                       changeimg?(<BsCartCheck className="img" onClick={handelImg}/>):(<BsCartPlus  className="img" onClick={handelImg}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cardpesticide;
