import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Drinkspanel1 from './components/Drinkscomponent/Drinkspanel1';
import Drinkspanel2 from './components/Drinkscomponent/Drinkspanel2';
import Drinkspanel3 from './components/Drinkscomponent/Drinkspanel3';
import Footer from './components/Footer';
import { GiCursedStar } from "react-icons/gi";

const Hotcoffee = () => {

  const[increment,setincrement]=useState(0);

  const increment1=()=>{
    setincrement(u=>{
      return increment+1;
    })
  }
  const increment2=()=>{
    setincrement(u=>{
      if (increment<=0) return 0
      return increment-1;
    })
  }

  let head2 = ["Caffè Americano"];

  return (
    <>
      <Header/>
      <hr/>
      <h6>Menu / Cold Coffees / Caffè Americano</h6>
      <Drinkspanel1 img={"./Images/coffeeimg.jpg"} head4="15 calories" heads={head2}/>

      <div className='col-md-3 oleato-pnl4 '>
        <h3>Customized  recipe</h3>
        <hr/>

        <h6>Add-ins</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Stream Hot" >Water</option>
          <option value="Stream Hot">Extra Water</option>
          <option value="Stream Hot">Warm Water</option>
          <option value="Stream Hot">No Water</option>
        </select><br/>

        <h6>Expresso & Shot Option</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Signature Expresso Roast">Signature Expresso Roast</option>
          <option value="Blonde Expresso Roast">Blonde Expresso Roast</option>
          <option value="Decaf Expresso Roast">Decaf Expresso Roast</option>
          <option value="1/3 Decaf Expresso Roast">1/3 Decaf Expresso Roast</option>
          <option value="1/2 Decaf Expresso Roast">1/2 Decaf Expresso Roast</option>
          <option value="2/3 Decaf Expresso Roast">2/3 Decaf Expresso Roast</option>
        </select>

        <h6>Shot</h6>
          <div className='oleato-opt1 mb-3 border border-3'>Shot
          <button className='oleato-btn4 px-2 oleato-btn44' onClick={increment2}>-</button>
          <span><b>{increment}</b></span>
          <button className='oleato-btn4 px-2 oleato-btn45' onClick={increment1}>+</button>
          </div>

        <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>


      </div>  
      <Drinkspanel2/>
      <Drinkspanel3/>
      <Footer/>
    </>
  )
}

export default Hotcoffee;
