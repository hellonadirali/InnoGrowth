import React from "react";
import { NavLink } from "react-router-dom";
import TollIcon from '@mui/icons-material/Toll';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () =>{
    return(
        <>
            <section className="container footer-sec">
                <div className="row footer-row">
                    <div className="col-md-3 footer-col1">
                        <NavLink className="navbar-brand " to="/"><span className='logo-icon'><TollIcon style={{fontSize:30}}/></span><span className='logo footer-logo'>InnoGrowth</span></NavLink>  
                        <h5>Available for help</h5>
                        <span className="foot-h"><p>24 hours a day – 5 days a week</p></span>
                        <div className="icon-boxes">
                            <div className="icon-box"><LocalPostOfficeIcon style={{backgroundColor:"#6921c4", padding:5, color:"#fff", borderRadius:"15px"}}/><p>digital@torque360.co</p></div>
                            <div className="icon-box"><LocalPhoneIcon style={{backgroundColor:"#6921c4", padding:5, color:"#fff", borderRadius:"15px"}}/><p>(917) 920-6645</p></div>
                        </div>
                        <button className="orng-btn">Contact us</button>
                    </div>
                    <div className="col-sm-3 ser-col">
                        <h4>Services</h4>
                        <ul className="footer-ul">
                            <li>Logo Design</li>
                            <li>Graphic Design</li>
                            <li>Web Development</li>
                            <li>Search Engine Optimization</li>
                            <li>Social Media Marketing</li>
                            <li>Local SEO</li>
                            <li>Content Writing</li>
                            <li>Pay Per Click</li>
                            <li>Content Marketing</li>
                            <li>Digital Consultancy</li>
                            <li>UI/UX Design</li>
                            <li>Business Branding</li>
                            <li>Web Design</li>

                        </ul>
                    </div>
                    <div className="col-sm-3 ser-col">
                    <h4>Industries</h4>
                        <ul className="footer-ul">
                            <li>Automobile</li>
                            <li>Restaurants</li>
                            <li>E-Commerce</li>
                            <li>Tourism</li>
                            <li>Ed-Tech</li>
                            <li>Healthcare</li>
                            <li>Real Estate</li>
                            <li>Fashion</li>
                        </ul>
                    </div>
                    <div className="col-sm-3 ser-col">
                    <h4>Resources</h4>
                        <ul className="footer-ul">
                            <li>Blog</li>
                            <li>Contact us</li>
                            <li>About us</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="end-bg">
            <section className="container footer-end">
                <div className="end-row">
                    <div className="end-cols col-md-4"><p>© InnoGrowth Inc.2023. All rights reserved.</p></div>
                    <div className="end-cols col-md-4"><p>Privacy Policy | Terms & Conditions</p></div>
                    <div className="end-cols col-md-4">
                        <LinkedInIcon style={{color:"#fff", marginRight:8, fontSize:20}}/>
                        <FacebookIcon style={{color:"#fff", marginRight:8, fontSize:20}}/>
                        <YouTubeIcon style={{color:"#fff", marginRight:8, fontSize:20}}/>
                        <TwitterIcon style={{color:"#fff", marginRight:8, fontSize:20}}/>
                    </div>
                </div>
            </section>
        </div>        
        </>
    )
}
export default Footer