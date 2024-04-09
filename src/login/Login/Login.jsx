import React,{useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import {login} from '../../../../services/operation/authApi'
import { login } from '../../services/operation/authApi'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({email: "",  password: "" })
    const { email, password } = formData
  
  
    function handleOnChange(e) {
        setFormData( (prevData) =>({ ...prevData , [e.target.name] : e.target.value }))
        console.log(formData)   
}
  
    
    function handleOnSubmit(e){
      e.preventDefault()
      dispatch(login(email, password, navigate))
    }
  
    return (
      <div className='loginContainer_22'>
        <div className='LoginformCenter_22'>
          <h1>Login</h1>
          <form onSubmit={handleOnSubmit} className='formAtLogin_22'>
            <div className='loginInnerContainer_22'>
              <div className='inputFieldAtlogin_22'>
                <p>Email Address : *</p>
                <input type="email"
                  required
                  placeholder='hell@example.com'
                  name='email'
                  value={email}
                  onChange={handleOnChange}
                />
              </div><div className='inputFieldAtlogin_22'>
                <p>Password : *</p>
                <input type="password"
                  required
                  placeholder='Enter Your Password Here'
                  name='password'
                  value={password}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className='lastSectionOfForm_22'>
              <button type="submit">
                Login
              </button>
              <p>
                <Link to='/signup' className='link'>
                  Don't have an account?
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
)}

export default Login




