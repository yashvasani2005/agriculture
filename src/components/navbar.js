
import '../media.css';
import React, { useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {

    const [sells, setSelles] = useState(0);
    const [Purchases, setPurchase] = useState(0);
    const[hem,hemburger]=useState(0)
    return (
        <>


            <div className="des">
                <div className="logo v-class">
                    <img src="/img/logo/logo.png" alt="LOGO" />
                </div>

                <div className="rightnav v-class-resp">
                    <input type="text" name="search" id="search" />
                    <button className="btn btn-sm">Search</button>
                </div>

                <div className="signin">
                <NavLink to="/login">
                <button class="login-btn">Login</button>
                    </NavLink>
                <NavLink to="/Signup">                  
                    <button class="signup-btn">Sign Up</button>
                    </NavLink>
   
                </div>
                <NavLink to="/get-user-cart">      
                <div className="addtocart">
                    {/* <img src="/img/logo/add-to-cart.png" alt="LOGO" /> */}
                    <IoMdCart className='img'/>
                </div>
                </NavLink>


            </div>

            <nav className="navbar background  h-nav-resp">


                <ul className="navlist v-class-resp">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="#about">About Us</a></li>
                    <li className="dropdown">
                        <a href="#purchases" onClick={() => setPurchase(!Purchases)}>Purchases</a>
                        {/* <ul className="dropdown-menu">
                            <li> <a href="">Seeds</a>  </li>
                            <li> <a href=""> Fertilizers</a>  </li>
                            <li> <a href="">Pesticides</a>  </li>
                            <li> <a href="">Tools</a>  </li>
                            <li> <a href="">Animal Feed</a>  </li>

                        </ul> */}

                        {
                            !Purchases ? <></> : <ul className="dropdown-menu">
                                <li> <a href="/Seed" >Seeds</a>  </li>
                                <li> <a href="/Fertilizers"> Fertilizers</a>  </li>
                                <li> <a href="/Pesticides">Pesticides</a>  </li>
                                <li> <a href="/Tool">Tools</a>  </li>
                                <li> <a href="/Animalfeed">Animal Feed</a>  </li>

                            </ul>
                        }


                    </li>
                    <li> <a href="#service">Services</a></li>
                    <li className="dropdown">
                        <a href="#sells" onClick={() => setSelles(!sells)}>Sells</a>
                        {/* <ul className="dropdown-menu">
                            <li> <a href="">Seeds Selling</a>  </li>
                            <li> <a href="">Tools Selling</a>  </li>
                            <li> <a href="">Animal By Product</a>  </li>
                        </ul> */}

                        {
                            !sells ? <></> : <ul className="dropdown-menu">
                                <li> <a href="/Seedselling">Seeds Selling</a>  </li>
                                <li> <a href="/Toolselling">Tools Selling</a>  </li>
                                <li> <a href="/Animalbyproduct">Animal By Product</a>  </li>
                            </ul>
                        }
                    </li>
                    <li> <a href="#contacts">Contact Us</a></li>
                </ul>


                <div className="burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>


        </>



    )
}
export default Navbar