import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
            
            <div className='col-md-1'>
                <img src='./Images/starbucks.png' alt='starbucks image' className='stbks-img'/>
            </div>
            
            <div className='col-md-4 pt-2'>
                <ul className='nav'>
                    <li><Link to="/home" className='nav-link '><b className='panel-1'>MENU</b></Link></li>
                    <li><Link to="/" className='nav-link'><b className='panel-1'>REWARDS</b></Link></li>
                    <li><Link to="/gift" className='nav-link'><b className='panel-1'>GIFT CARDS</b></Link></li>
                </ul>
            </div>

            <div className='col-md-4 pt-2 panel-2'>
                <div className='row '>
                    <span >
                    <Link to="/store" className='panel-2-lnk'><FaMapMarkerAlt className='panel-2-icon1'/><b className='panel-2-b'>Find a store</b></Link>
                    <button className='panel-2-btn1 px-4 py-1' onClick={e=>Navigate("/login")}>Sign in</button>
                    <button className='panel-2-btn1 px-4 py-1' onClick={e=>Navigate("/register")}>join now</button>
                    </span>
                    
                </div>
            </div>

            

        </div>
      </div>
    </>
  )
}

export default Header;
