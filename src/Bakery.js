import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Drinkspanel1 from './components/Drinkscomponent/Drinkspanel1';
import Drinkspanel2 from './components/Drinkscomponent/Drinkspanel2';
import Drinkspanel3 from './components/Drinkscomponent/Drinkspanel3';
import { GiCursedStar } from "react-icons/gi";


const Bakery = () => {
  
    let head2 = ["Plain Bagel"];

  return (
    <>
      <Header/> 
    <hr/>
    <h6>Menu / Hot Breakfast / Chicken, Maple Butter & Egg Sandwich</h6>
    <Drinkspanel1 img={"./Images/bakery.jpg"} head4="290 calories" heads={head2}/>

    <div className='col-md-3 oleato-pnl4 '>

        <h3>What's included</h3>
        <hr/>

        <h6>Warming</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Warmed" >Warmed</option>
          <option value="not Warmed"> Not Warmed</option>
        </select><br/>

        <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>

    </div>   
    <Drinkspanel2 />
    <Drinkspanel3/>
    <Footer/>
    </>
  )
}

export default Bakery;
