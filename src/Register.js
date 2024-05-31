import React from 'react';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Registerpage = () => {

    const Navigate = useNavigate();
    const [adminregister,setAdminregister]=useState();

    const InputHandler=(e)=>{
        setAdminregister({...adminregister,[e.target.name]:e.target.value});
    }
    
    const registerAdmin=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/adminRegisters",adminregister)
        .then(()=>{
            alert("Admin Registered");
            setAdminregister(null);
            e.target.reset();
        }).catch(err=>console.log(err))
    }

  return (
    <>
        <Header/>
        <hr/>
        <h3 className='text-center py-3'><b>Create an account</b></h3>
        <h6 className='text-center'>TARBUCKS® REWARDS</h6>

        <form onSubmit={registerAdmin} autoComplete='off'>
        <div className='col-md-4 border shadow text-center login-pnl-1'>
            <h4 className='my-3 '>Admin Register</h4>
            <div className='my-3'>
                <input text="text" placeholder='Full Name' className='py-2 px-4 login-ipt-1' name="fname" value={adminregister?.fname} onChange={InputHandler}/>
            </div>
            <div className='mb-3'>
                <input type="text" placeholder='Email' className='py-2 px-4 login-ipt-1' name="email" value={adminregister?.email} onChange={InputHandler}/>
            </div>
            <div className='mb-3'>
                <input type="text" placeholder='Mobile' className='py-2 px-4 login-ipt-1' name="mobile" value={adminregister?.mobile} onChange={InputHandler}/>
            </div>
            <div className='mb-3'>
                <input type="text" placeholder='userame' className='py-2 px-4 login-ipt-1' name="username" value={adminregister?.username} onChange={InputHandler}/>
            </div>
            <div className='mb-3'>
                <input type="password" placeholder='password' className='py-2 px-4 login-ipt-1' name="password" value={adminregister?.password} onChange={InputHandler}/>
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary mx-3'>Register</button>
                <button className='btn btn-danger'onClick={e=>Navigate("/login")}>Already Registered?</button>
            </div>
        </div>
        </form>
    </>
  )
}

export default Registerpage;
