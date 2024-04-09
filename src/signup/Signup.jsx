import React,{useState} from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import {  useDispatch, useSelector } from 'react-redux'
// import { setSignupData } from '../../../slices/auth'
// import { sendOtp } from '../../../services/operation/authApi'
import { useNavigate } from 'react-router-dom'
import {sendOtp} from '../services/operation/authApi'
import { setSignupData } from '../slices/auth'


const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [accountType , setAccountType] = useState('user');
  const { firstName, lastName, email, password, confirmPassword } = formData
  const { loading } = useSelector((state) => state.auth)

  function handleOnChange(e) {
    setFormData( (prevData) =>({ ...prevData , [e.target.name] : e.target.value }))
    console.log(formData);       
  }

  function handleOnSubmit(e){
    e.preventDefault();
    console.log("Data Submitted");
    console.log(formData)
    if(password !== confirmPassword) {toast.error("Passwords do not match");  return ; }
    const signupData = { ...formData , accountType};
    console.log("Data AT point of Dispatch");
    console.log(signupData)
    dispatch(setSignupData(signupData))                                    // Setting signup data to state To be used after otp verification
    dispatch(sendOtp(formData.email, navigate))                           // Send OTP to user for verification
    setFormData({firstName: "", lastName: "",  email: "",  password: "",  confirmPassword: "",})           // Reset
    setAccountType('user')
  }

  return (
    <div className='signupContainer_22'>
    {
      loading ? (<>Loading</>) : (  <div className='formCenter_22'>
      <h1>SignUp</h1>
      <form action="" method='POST' onSubmit={handleOnSubmit} className='form_22'>

        <div className='formBtnContainer_22'>
          <button className={`${accountType==='user' && 'formBtnContainerActiveBtn_22' }`}
            onClick={()=>setAccountType("user")}
          >
            User
          </button>
          <button className={`${accountType==='admin' && "formBtnContainerActiveBtn_22" }`}
            onClick={()=>setAccountType('admin')}
          >
            Organizer
          </button>
        </div>

        <div>
          <div className='personlDetailContainer_22'>
            <div className='inputFieldAtSignup_22'>
              <p>First Name : *</p>
              <input type="text"
                required
                placeholder='John'
                className='inAtcom'
                name='firstName'
                value = {firstName} 
                onChange={handleOnChange}
              />
            </div>

            <div className='inputFieldAtSignup_22'>
              <p>Last Name : *</p>
              <input type="text"
                required
                placeholder='Doe'
                name='lastName'
                value = {lastName} 
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className='inputFieldAtSignup_22'>
            <p>Email Address : *</p>
            <input type="email"
              required
              placeholder='hell@example.com'
              name='email'
              value = {email} 
              onChange={handleOnChange}
            />
          </div>
          <div className='personlDetailContainer_22'>
            <div className='inputFieldAtSignup_22'>
              <p>Password: *</p>
              <input type="password"
                required
                placeholder='John'
                className='inAtcom'
                name='password'
                value = {password} 
                onChange={handleOnChange}
              />
            </div>

            <div className='inputFieldAtSignup_22'>
              <p>Confirm Password : *</p>
              <input type="password"
                required
                placeholder='Doe'
                name='confirmPassword'
                value = {confirmPassword} 
                onChange={handleOnChange}
              />
            </div>
          </div>

        </div>

        <div className='lastSectionOfForm_22'>
          <button type="submit">
            Signup
          </button>
          <p>
          <Link to='/login' className='link'>
            Alredy Have Account?
          </Link>
          </p>
        </div>
      </form>
    </div>)
    }
    
  </div>
  )
}

export default Signup