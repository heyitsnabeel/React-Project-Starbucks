import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Drinkspanel1 from './components/Drinkscomponent/Drinkspanel1';
import Drinkspanel2 from './components/Drinkscomponent/Drinkspanel2';
import Drinkspanel3 from './components/Drinkscomponent/Drinkspanel3';
import { GiCursedStar } from "react-icons/gi";


const Iceteas = () => {

    let head2 = ["Iced Black Tea"];

  return (
    <>
      <Header/> 
    <hr/>
    <h6>Menu / Iced Teas / Iced Black Tea</h6>
    <Drinkspanel1 img={"./Images/ice.png"} head4="0 calories" heads={head2}/>

    <div className='col-md-3 oleato-pnl4 '>
        <h3>What's included</h3>
        <hr/>

        <h6>Add-ins</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Water" >Extra Water</option>
          <option value="Light Water">Light Water</option>
          <option value="No Water">No Water</option>
          <option value="Water">Water</option>
        </select><br/>

        <h6>Add-ins</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Ice" >Extra Ice</option>
          <option value="Light Ice">Light Ice</option>
          <option value="No Ice">No Ice</option>
          <option value="Ice">Ice</option>
        </select><br/>

        <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>

    </div>   
    <Drinkspanel2 />
    <Drinkspanel3/>
    <Footer/>
    </>
  )
}

export default Iceteas;
