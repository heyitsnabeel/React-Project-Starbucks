import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Loginpage = () => {

  const Navigate = useNavigate();
  const[loginAdmin,setloginAdmin]=useState();

  const inputHandler=(e)=>{
    setloginAdmin({...loginAdmin,[e.target.name]:e.target.value});
  }

  const signAccount=(e)=>{
    e.preventDefault();
    axios.get("http://localhost:4000/adminRegisters",loginAdmin)
    .then((res)=>{
      let result = res.data;
      let status = false; 
      result.map(user=>{
        if (user["username"]==loginAdmin.username && user["password"]==loginAdmin.password){
            status=true;
        }
      })
      if (status){
        alert("Right User");
        Navigate("/");
      }
      else{
        alert("Wrong User")
      }
    }).catch(err=>console.log(err))

    //console.log(loginAdmin);
  } 

  return (
    <>
        <Header/>
        <hr/>
        <h3 className='text-center py-3'><b>Sign in or create an account</b></h3>

        <form onSubmit={signAccount} autoComplete='off'>
        <div className='col-md-4 border shadow text-center login-pnl-1'>
            <h4 className='my-3 '>Sign In</h4>
            <div className='mb-3'>
                <input type="text" placeholder='userame' className='py-2 px-4 login-ipt-1' name="username" value={loginAdmin?.username} onChange={inputHandler}/>
            </div>
            <div className='mb-3'>
                <input type="password" placeholder='password' className='py-2 px-4 login-ipt-1' name="password" value={loginAdmin?.password} onChange={inputHandler}/>
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary mx-3'>Sign IN</button>
                <button className='btn btn-danger' onClick={e=>Navigate("/register")}>Register</button>
            </div>
        </div>
        </form>

        <h6 className='text-center login-pnl3-b1'>JOIN STARBUCKS® REWARDS</h6>
        <span className='text-center login-pnl3-b3'>Join Starbucks® Rewards to earn free food and</span><br/>
        <span className='login-pnl3-b3'>drinks, get free refills, pay and order with your</span><br/>
        <span className='login-pnl3-b4'>phone, and more.</span>

    </>
  )
}

export default Loginpage;
