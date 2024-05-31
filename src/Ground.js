import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Drinkspanel1 from './components/Drinkscomponent/Drinkspanel1';
import Drinkspanel2 from './components/Drinkscomponent/Drinkspanel2';
import Drinkspanel3 from './components/Drinkscomponent/Drinkspanel3';
import { GiCursedStar } from "react-icons/gi";


const Ground = () => {
  
    let head2 = ["Starbucks® Christmas","Blend Ground Coffee"];

  return (
    <>
      <Header/> 
    <hr/>
    <h6>Menu / Ground / Starbucks® Christmas Blend Ground Coffee</h6>
    <Drinkspanel1 img={"./Images/ground1.jpg"}  heads={head2}/>

    <div className='col-md-3 oleato-pnl4 '>

        <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>

    </div>   
    <Drinkspanel2 />
    <Drinkspanel3/>
    <Footer/>
    </>
  )
}

export default Ground;
