import React, { useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import loginpic from '../images/signup.PNG'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';


const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email:"",phone:"", work:"", password:"", confirmpassword:""
    
  });

  let name, value;
  const handleInput = (e) =>{
    name = e.target.name
    value = e.target.value
    setUser({...user, [name]:value})
  };
  const PostData = async (e) => {
    e.preventDefault();
    const {name, email, phone, work, password, confirmpassword} = user;
    const res =  await fetch('register', {
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name, email, phone, work, password, confirmpassword
    })
    })
    const data = await res.json();
      if(data === 422 || !data){
        window.alert("failed")
        console.log("failed")
      }else{
        window.alert("posted")
        console.log("posted")
        navigate.pushState('/login')
      }
  }

  return(
    <div className='main-div'>
        <div className='inner-div login-inner-div signup-div'>
          <div className='first-div'>
            <img className='login-img' src={loginpic}/>
            <span>Have a account?</span><NavLink className="small-links" to="/signup"> Login here</NavLink>
          </div>
        <div>
          <form method='post'>
            <div className="form-group">
              <h3>Sign Up</h3>
              <span className='span-input'><BadgeOutlinedIcon style={{fontSize:18, color:"#535353", marginBottom:-5}}/>
                <input type="text" className="form-control my-2" name='name' id="name" aria-describedby="emailHelp" placeholder="Your name" autoComplete='off'
                  value={user.name}
                  onChange={handleInput}
              /></span>
              <span className='span-input'><MailOutlineIcon style={{fontSize:18, color:"#535353", marginBottom:-5}}/>
                <input type="email" className="form-control my-2" name='email' id="email" placeholder="Your email" autoComplete='off'
                  value={user.email}
                  onChange={handleInput}
                /></span>
              <span className='span-input'><LocalPhoneOutlinedIcon style={{fontSize:18, color:"#535353", marginBottom:-5}}/>
                <input type="tel" className="form-control my-2" name='phone' id="phone" placeholder="Your phone" autoComplete='off'
                  value={user.phone}
                  onChange={handleInput}
                /></span>
              <span className='span-input'><HomeWorkOutlinedIcon style={{fontSize:18, color:"#535353", marginBottom:-5}}/>
                <input type="text" className="form-control my-2" name='work' id="work" placeholder="Your work" autoComplete='off'
                  value={user.work}
                  onChange={handleInput}
                /></span>
              <span className='span-input'><KeyIcon style={{fontSize:18, color:"#535353", marginBottom:-5}}/>
                <input type="password" className="form-control my-2" name='password' id="password" placeholder="Password" autoComplete='off'
                  value={user.password}
                  onChange={handleInput}
                /></span>
              <span className='span-input'><KeyIcon style={{fontSize:18, color:"#535353", marginBottom:-5}}/>
                <input type="password" className="form-control my-2" name='confirmpassword' id="confirmpassword" placeholder="Confirm password" autoComplete='off'
                  value={user.confirmpassword}
                  onChange={handleInput}
                /></span>
              <button onClick={PostData} type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup