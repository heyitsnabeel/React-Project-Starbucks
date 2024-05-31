import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import { useState } from 'react';
import './Rewardpanel.css';

const RewardPanel3 = (props) => {
    
    let images = props.image;
    let headings = props.heading;
    let paragraphs = props.paragraph;

    const[imgIndex,setImgIndex] = useState(0);

    let handler1=()=>{
        setImgIndex(u=>{
            return 0
        })
    }
    let handler2=()=>{
        setImgIndex(u=>{
            return 1
        })
    }
    let handler3=()=>{
        setImgIndex(u=>{
            return 2
        })
    }
    let handler4=()=>{
        setImgIndex(u=>{
            return 3
        })
    }
    let handler5=()=>{
        setImgIndex(u=>{
            return 4
        })
    }
    

  return (
    <>
      <div className='container-fluid panel3-box1 mt-5 '>
        <h2 className='panel3-b11'>Get your favorites for free</h2>

        <button className='panel3-btn1 panel3-btn11' onClick={handler1}><span className='panel3-spn1'>25</span><MdOutlineStar className='panel3-icn1'/></button>
        <button className='panel3-btn1' onClick={handler2}><span className='panel3-spn1'>100</span><MdOutlineStar className='panel3-icn1'/></button>
        <button className='panel3-btn1' onClick={handler3}><span className='panel3-spn1'>200</span><MdOutlineStar className='panel3-icn1'/></button>
        <button className='panel3-btn1' onClick={handler4}><span className='panel3-spn1'>300</span><MdOutlineStar className='panel3-icn1'/></button>
        <button className='panel3-btn1' onClick={handler5}><span className='panel3-spn1'>400</span><MdOutlineStar className='panel3-icn1'/></button>
        
      </div>

      <div className='container-fluid panel3-box2 '>
        <div className='row'>
            
            <div className='col-md-3 panel3-img1 border'>
                <img src={images[imgIndex]} alt='Drink Image' className='panel3-img11'/>
            </div>

            <div className='col-md-3 '>
                <h4 className='py-2 mt-4'>{headings[imgIndex]}</h4>
                <p className='py-2 mb-3'>{paragraphs[imgIndex]}</p>
            </div>

        </div>
      </div>
    </>
  )
}

export default RewardPanel3;
