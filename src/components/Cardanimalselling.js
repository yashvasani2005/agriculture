import React from "react";

import "../index.css"
import "../media.css"
import { NavLink } from "react-router-dom";

let Cardanimalselling = ({ data }) => {

    return (
        <div className="product-card">
            <div className="product-tumb">
                <img src={data.imgSrc} alt="yash"  />
            </div>
            <div className="product-details">
                <span className="product-catagory">Animal BY Product</span>
                <h4><a href="/cart">{data.title}</a></h4>
                <p>{data.disc}</p>
                <div className="product-bottom-details">
                    <div className="product-price"><small>${data.oldprice}</small>${data.newprice}</div>
                    <NavLink to={`/Sellnowanimalproduct/${data.sid}`}>
                        <button className="buy-no">Sell Now</button>
                    </NavLink>
                    {/* <img src="/img/logo/add-to-cart.png" alt="LOGO" /> */}
             
                </div>
            </div>
        </div>
    );
};

export default Cardanimalselling;
