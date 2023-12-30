import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import "./App.css";

import Home from './customer/home';
import Setting from './customer/setting';
import About from './customer/about'
import SingleProduct from './customer/productSingle';
import Cart from './customer/cart';
import Login from './customer/login';
import Order from './customer/order';
import Register from './customer/register';

function App() {
  return (
    <Container>
      <Routes>
        {/**customer */}
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/setting" element={<Setting />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/productSingle/:id" element={<SingleProduct />}/>
        <Route path="/order" element={<Order />}/>
      </Routes>
  </Container>
  );
}

export default App;
