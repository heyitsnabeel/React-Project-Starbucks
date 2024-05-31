import React from 'react';
import './Rewardpanel.css';

const RewardPanel1 = () => {
  return (
    <>
      <div className='container-fluid b1 px-2'>
        <b><p className="py-3 px-4">STARBUCKS® REWARDS</p></b>
      </div>

      <div className='container-fluid rwd-b2'>
        <div className='row'>
            <div className='col-md-5 rwd-b2'>
                <h2 className='rwd-b2-h21'>FREE COFFEE</h2>
                <h2 className='rwd-b2-h22'>IS A TAP AWAY</h2>
                <h6 className='rwd-b2-h61'>Join now to start earning Rewards.</h6>
                <button className='rwd-b2-btn1 px-3'>Join Now</button>
                <h6 className='rwd-b2-h61'>Or join in the app for the best experience</h6>
            </div>
            <div className='col-md-7 mx-0'>
                <img src='./Images/starbucks2.png' className='rwd-img1'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default RewardPanel1;
