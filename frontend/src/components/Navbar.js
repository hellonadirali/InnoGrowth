import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import TollIcon from '@mui/icons-material/Toll';


const Navbar = () => {
  return (
    <>
          <header className="flex flex-row justify-between py-2 px-2">
              <div className='flex flex-row justify-center items-center'>
                <TollIcon/>
                <p className='text-2xl text-bold text-orange'>InnoGrowth</p>
              </div>
              <div className='flex flex-row gap-2'>
                <ul className="">
                  <NavLink className=" " to="/company">Company</NavLink>
                  <NavLink className="" to="/services">Services</NavLink>
                  <NavLink className=" " to="/about">About us</NavLink>
                  <NavLink className="" to="/contact">Contact us</NavLink>
                  <NavLink className="" to="/login">Login</NavLink>
                  <NavLink className="" to="/signup">Signup</NavLink>
                </ul>
            </div>
          </header>
        
      
    </>
  );
};

export default Navbar;
