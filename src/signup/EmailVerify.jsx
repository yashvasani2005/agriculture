import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signUp}  from '../services/operation/authApi';
import './EmailVerify.css'
import { toast } from 'react-toastify';

const EmailVerify = () => {
  const [otp, setOtp] = useState();
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(()=>{
    if(!signupData){
      navigate('/signup');
    }
  });


  const signupHandler = (e) => {
    e.preventDefault();
    if(otp===undefined){
      return toast.error("Fill The OTP")
    }
    const { accountType,  firstName, lastName, email, password, confirmPassword, } = signupData;
    dispatch(
      signUp( accountType,  firstName, lastName, email, password, confirmPassword,  otp, navigate )
      )
    
  };
  return (

    <div className='vrifyEmailContainer_22'>
      <div className='verifyEmailformCenter_22'>
        <h1>Verify Email</h1>
        
        <form  onSubmit={signupHandler} className='verifyEmailForm_22' >
          <p className='paraAtVerify_22'>A verification code has been sent to you. Enter the code below</p>
          <OtpInput
            className="otpContainer_22"
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} className='inputAtOTP_22' />}
          />

          <div className='lastSectionAtVerify_22'>
            <button type="submit" className='VerifyOtpSubmitBtn_22'>
              Verify Email
            </button>
            <div className='verifyEmailLastLink_22'>
              <Link to="/signup" className='verifyEmailLastLinkStyle_22'>
                Back To Signup
              </Link>
              <button >
                Resend It
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default EmailVerify