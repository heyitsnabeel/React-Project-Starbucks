import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';
import Drinkspanel1 from './components/Drinkscomponent/Drinkspanel1';
import Drinkspanel2 from './components/Drinkscomponent/Drinkspanel2';
import Drinkspanel3 from './components/Drinkscomponent/Drinkspanel3';
import { GiCursedStar } from "react-icons/gi";


const Hotdrinks = () => {
  
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
    let head2 = ["Peppermint Hot","Chocolate"];

  return (
    <>
      <Header/> 
    <hr/>
    <h6>Menu / Hot Drinks / Oleato Golden Foam™ Cold Brew</h6>
    <Drinkspanel1 img={"./Images/drink1.jpg"} head4="440 calories" heads={head2}/>

    <div className='col-md-3 oleato-pnl4 '>
        <h3>What's included</h3>
        <hr/>

        <h6>Milk</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Stream Hot" >Stream Hot</option>
          <option value="Stream Hot">Warm</option>
          <option value="Stream Hot">Extra Hot</option>
        </select><br/>

        <h6>Milk</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Heavy Cream">Heavy Cream</option>
          <option value="Vanilla Sweet Cream">Vanilla Sweet Cream</option>
          <option value="2% Milk">2% Milk</option>
          <option value="Whole Milk">Whole Milk</option>
          <option value="Almond">Almond</option>
          <option value="Coconut">Coconut</option>
          <option value="Oat Milk">Oat Milk</option>
          <option value="Soy">Soy</option>
        </select><br/>

        <h6>Toppings</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Chocolate Curls Topping" >Extra Chocolate Curls Topping</option>
          <option value="Light Chocolate Curls Topping">Light Chocolate Curls Topping</option>
          <option value="No Chocolate Curls Topping">No Chocolate Curls Topping</option>
          <option value="Chocolate Curls Topping">Chocolate Curls Topping</option>
        </select><br/>

        <h6>Add-ins</h6>
        <select className='oleato-opt1 mb-3'>
          <option value="Extra Whipped Cream" >Extra Whipped Cream</option>
          <option value="Light Whipped Cream">Light Whipped Cream</option>
          <option value="No Whipped Cream">No Whipped Cream</option>
          <option value="Whipped Cream">Whipped Cream</option>
        </select><br/>

        <h6>Flavous</h6>
        <div className='oleato-opt1 mb-3 border border-3'>Sauce
        <button className='oleato-btn4 px-2 oleato-btn44' onClick={increment2}>-</button>
        <span><b>{increment}</b></span>
        <button className='oleato-btn4 px-2 oleato-btn45' onClick={increment1}>+</button>
        </div>

        <button className='oleato-btn5'><h5><GiCursedStar className='mx-1'/><b>Customize</b></h5></button>

    </div>   
    <Drinkspanel2 />
    <Drinkspanel3/>
    <Footer/>
    </>
  )
}

export default Hotdrinks;
