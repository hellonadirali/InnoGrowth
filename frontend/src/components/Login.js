import React from 'react'
import { NavLink } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import loginpic from '../images/login.PNG'
// const url = 'https://img.freepik.com/free-photo/flag-pakistan_1401-192.jpg'

const Login = () => {
  return(
    <div className='main-div'>
        <div className='inner-div login-inner-div'>
          <div className='first-div'>
            <img className='login-img' src={loginpic}/>
            <span>Don't have an account?</span><NavLink className="small-links" to="/signup"> Create here</NavLink>
          </div>
        <div className='sec-div'>
          <form>
            <div class="form-group">
              <h3>Sign In</h3>
              <span className='span-input'><MailOutlineIcon style={{fontSize:18, color:"#535353", marginBottom:-5}}/><input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email"/></span>
              <span className='span-input'><KeyIcon style={{fontSize:18, color:"#535353", marginBottom:-5}}/><input type="password" className="form-control my-2" id="exampleInputPassword1" placeholder="Your Password"/></span>
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login