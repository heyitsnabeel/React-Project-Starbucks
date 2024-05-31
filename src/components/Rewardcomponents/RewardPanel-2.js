import React from 'react'

const RewardPanel2 = () => {
  return (
    <>
      <h3 className='panel2-b1'>Getting started is easy</h3>
      <p className='panel2-b2'>Earn Stars and get rewarded in a few easy steps.</p>

      <div className='container-fluid'>
        <div className='row justify-content-evenly'>
            
            <div className='col-md-3 panel2-box-3'>
                <div className='my-4 panel2-b31'></div>
                <span className='border panel2-b3 border-3 border-success py-2 my-4'>1</span>
                <div className='my-4'></div>
                <h5 className='align-center panel2-b4 px-2 py-3'>Create an account</h5>
                <p className='px-1'>To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
            </div>

            <div className='col-md-3 panel2-box-3'>
                <div className='my-4 panel2-b31'></div>
                <span className='border panel2-b3 border-3 border-success py-2 my-4'>2</span>
                <div className='my-4'></div>
                <h5 className='align-center panel2-b4 px-2 py-3'>Order and pay </h5>
                <p className='px-1'>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
            </div>

            <div className='col-md-3 panel2-box-3'>
                <div className='my-4 panel2-b31'></div>
                <span className='border panel2-b3 border-3 border-success py-2 my-4'>3</span>
                <div className='my-4'></div>
                <h5 className='align-center panel2-b44 px-2 py-3'>Earn Stars, get Rewards</h5>
                <p className='px-2'>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. </p>
            </div>


        </div>
      </div>
    </>
  )
}

export default RewardPanel2;
