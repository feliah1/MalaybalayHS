import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import "./App.css";

import Home from './customer/home';
import Setting from './customer/setting';
import About from './customer/about'
import SingleProduct from './customer/productSingle';
import Cart from './customer/cart';
import Checkout from './customer/checkout';

function App() {
  return (
    <Container>
      <Routes>
        {/**customer */}
        <Route path="/home" element={<Home />}/>
        <Route path="/setting" element={<Setting />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/productSingle/:id" element={<SingleProduct />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
  </Container>
  );
}

export default App;
