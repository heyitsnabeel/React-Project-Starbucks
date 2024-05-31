import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Rewards from './Rewards';
import "bootstrap/dist/css/bootstrap.min.css";
import Store from './Store';
import Loginpage from './Login';
import Registerpage from './Register';
import HomePage from './Home';
import Oleato from './Oleato';
import Hotcoffee from './Hotcoffee';
import Hotdrinks from './Hotdrinks';
import Frappuccino from './Frappuccino';
import Coldcoffee from './Coldcoffee';
import Iceteas from './Iceteas';
import Colddrinks from './Colddrinks';
import Breakfast from './Breakfast';
import Yogurt from './Yogurt';
import Bakery from './Bakery';
import Lunch from './Lunch';
import Snacks from './Snack';
import Bean from './Bean';
import Ground from './Ground';
import Cups from './Cups';
import Tumblers from './Tumblers';
import Mugs from './Mugs';
import Others from './Others';
import Instant from './Instant';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GiftPage from './Gift';
import {Product1} from './components/context/Product1';
import Hotteas from './Hotteas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Product1>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Rewards/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/gift' element={<GiftPage/>}/>
      <Route path='/oleato' element={<Oleato/>}/>
      <Route path='/hotteas' element={<Hotteas/>}/>
      <Route path='/hotcoffee' element={<Hotcoffee/>}/>
      <Route path='/hotdrinks' element={<Hotdrinks/>}/>
      <Route path='/coldcoffee' element={<Coldcoffee/>}/>
      <Route path='/frappuccino' element={<Frappuccino/>}/>
      <Route path='/iceteas' element={<Iceteas/>}/>
      <Route path='/yogurt' element={<Yogurt/>}/>
      <Route path='/bakery' element={<Bakery/>}/>
      <Route path='/lunch' element={<Lunch/>}/>
      <Route path='/snacks' element={<Snacks/>}/>
      <Route path='/bean' element={<Bean/>}/>
      <Route path='/ground' element={<Ground/>}/>
      <Route path='/instant' element={<Instant/>}/>
      <Route path='/cups' element={<Cups/>}/>
      <Route path='/tumblers' element={<Tumblers/>}/>
      <Route path='/mugs' element={<Mugs/>}/>
      <Route path='/others' element={<Others/>}/>
      <Route path='/colddrinks' element={<Colddrinks/>}/>
      <Route path='/breakfast' element={<Breakfast/>}/>
      <Route path='/register' element={<Registerpage/>}/>
    </Routes>
  </BrowserRouter>
  </Product1>
);

