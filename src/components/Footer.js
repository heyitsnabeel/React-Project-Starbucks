import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='container-fluid mt-4'>
        <div className='row'>
            
            <div className='col-md-2 foot-p1 foot-p11'>
                <h6 className='my-4'>About US</h6>
                <p>Our Company</p>
                <p>Our Coffee</p>
                <p>Stories and News</p>
                <p>Starbucks Archive</p>
                <p>Investor Relations</p>
                <p>Customer Service</p>
                <p>Contact Us</p>
            </div>

            <div className='col-md-2 foot-p11'>
                <h6 className='my-4'>Careers</h6>
                <p>Culture and Values</p>
                <p>Inclusion, Diversity, and Equity</p>
                <p>College Achievement Plan</p>
                <p>Alumni Community</p>
                <p>U.S. Careers</p>
                <p>International Careers</p>
            </div>

            <div className='col-md-2 foot-p11'>
                <h6 className='my-4'>Social Impact</h6>
                <p>People</p>
                <p>Planet</p>
                <p>Environmental and Social Impact Reporting</p>
            </div>

            <div className='col-md-2 foot-p11'>
                <h6 className='my-4'>For Business Partners</h6>
                <p>Landlord Support Center</p>
                <p>Suppliers</p>
                <p>Corporate Gift Card Sales</p>
                <p>Office and Foodservice Coffee</p>
            </div>    

            <div className='col-md-2 foot-p11'>
                <h6 className='my-4'>Order and Pick Up</h6>
                <p>Order on the App</p>
                <p>Order on the Web</p>
                <p>Delivery</p>
                <p>Order and Pick Up Options</p>
                <p>Explore and Find Coffee for Home</p>
            </div>    

        </div>
      </div>

      <div className='container'>
        <hr/>
      </div>

      <span className='foot-spn'><Link to="https://open.spotify.com" className='foot-icon1'><FaSpotify/></Link></span>
      <span><Link to="https://www.facebook.com" className='foot-icon1'><IoLogoFacebook/></Link></span>
      <span><Link to="https://www.instagram.com" className='foot-icon1'><FaInstagramSquare /></Link></span>
      <span><Link to="https://www.youtube.com" className='foot-icon1'><FaYoutube /></Link></span>
      <span><Link to="https://twitter.com/i/flow/login" className='foot-icon1'><FaTwitter /></Link></span>

    </>
  )
}

export default Footer;
