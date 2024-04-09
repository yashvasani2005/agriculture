import React from "react";
import "../index.css";
import "../media.css";
import sellData from '../data/sellData';
import { useParams } from "react-router-dom";
import { selling } from "../services/operation/authApi";

const Cardsell = () => {

    const data = sellData();
    const { id } = useParams();
    const data2 = data.filter(item => item.sid == id);
    const submitHandller = (e)=>{
        e.preventDefault();
       let fname= document.getElementById("fname").value;
       let lname= document.getElementById("lname").value;
       let email=document.getElementById("email").value;
       let mo_no= document.getElementById("mo_no").value;
       let dob= document.getElementById("dob").value;
       let address= document.getElementById("address").value;
       let city= document.getElementById("city").value;
       let pincode= document.getElementById("pincode").value;
       let state= document.getElementById("state").value;
       let country= document.getElementById("country").value;
       let stock= document.getElementById("stock").value;
       
        selling(fname,lname,email,mo_no,dob,address,city,pincode,state,country,stock);
    }

    return (
        <div>
           <div className="heading"> {data2[0].title}</div>
       
            <form className="sellingform">
                <table align="center" cellpadding="10">
                    <tr>
                        <td>First Name :</td>
                        <td><input type="text" name="fname" id="fname" maxLength="50" placeholder="Yash" />
                            (Max 50 Characters Allowed)
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name :</td>
                        <td><input type="text" name="lname" id="lname" maxLength="50" placeholder="Vasani" />
                            (Max 50 Characters Allowed)
                        </td>
                    </tr>
                    <tr>
                        <td>Email ID :</td>
                        <td><input type="email" name="email" id="email" maxLength="100" placeholder="abcdefgh@gmail.com" /></td>
                    </tr>
                    <tr>
                        <td>Mobile Number :</td>
                        <td>
                            <input type="text" name="mo_no" id="mo_no" maxLength="10" placeholder="7842xxxxxx" />
                            (10 Digits Allowed)
                        </td>
                    </tr>
                    <tr>
                        <td>Gende :</td>
                        <td>
                            <input type="radio" name="Gender" value="Male" />
                            Male
                            <input type="radio" name="Gender" value="Female" />
                            Female
                        </td>
                    </tr>
                    <tr>
                        <td>Date of Birth(DOB) :</td>
                        <td>
                            <select name="dob" id="dob" className="dob">
                            <option value="-1">Day:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                            </select>
                            <select name="BirthdayMonth" id="Birthday_Month" className="dob">
                            <option value="-1">Month:</option>
                        <option value="January">Jan(1)</option>
                        <option value="February">Feb(2)</option>
                        <option value="March">Mar(3)</option>
                        <option value="April">Apr(4)</option>
                        <option value="May">May(5)</option>
                        <option value="June">Jun(6)</option>
                        <option value="July">Jul(7)</option>
                        <option value="August">Aug(8)</option>
                        <option value="September">Sep(9)</option>
                        <option value="October">Oct(10)</option>
                        <option value="November">Nov(11)</option>
                        <option value="December">Dec(12)</option>
                            </select>
                            <select name="BirthdayYear" id="Birthday_Year" className="dob">
                            <option value="-1">Year:</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Address :</td>
                        <td><textarea name="address" id="address" rows="7" cols="40" className="address"></textarea></td>
                    </tr>
                    <tr>
                        <td>City :</td>
                        <td><input type="text" name="city" id="city" maxLength="50" placeholder="Bangalore" />
                            (Max 50 Characters Allowed)
                        </td>
                    </tr>
                    <tr>
                        <td>Pin Code :</td>
                        <td><input type="number" name="pincode" id="pincode" maxLength="6" placeholder="560068" />
                            (Max 6 Numbers Allowed)
                        </td>
                    </tr>
                    <tr>
                        <td>State :</td>
                        <td><input type="text" name="state" id="state" maxLength="50" placeholder="Karnataka" />
                            (Max 50 Characters Allowed)
                        </td>
                    </tr>
                    <tr>
                        <td>Country :</td>
                        <td><input type="text" name="country" id="country" placeholder="India" /></td>
                    </tr>
                    <tr>
                        <td>Available Stock :</td>
                        <td><input type="text" name="stock" id="stock" placeholder="8000kg" /></td>
                    </tr>
               
                    <tr>
                        <td colspan="2" align="center">
                            <input type="submit" value="Submit"  onClick={submitHandller}/>
                            <input type="reset" value="Reset" />
                         </td>
                     </tr>
                </table>
            </form>
        </div>
    );
};

export default Cardsell;
