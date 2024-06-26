import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import "./App.css";

import Register from "./pages/register";
import Login from "./pages/login";
import ItemInventory from './pages/iteminventory';

import OrderList from './pages/orderlist';
import OrderLog from './pages/orderlog';

import About from './pages/about';

import ItemSingle from './pages/itemsingle/itemsingle';
import ItemSingleCreate from './pages/itemsingle/singleProductCreate';
import ItemSingleEdit from './pages/itemsingle/singleProductEdit';
import ItemSingleDelete from './pages/itemsingle/singleProductDelete'

import Settings from './pages/users/settings';
import CashierDelete from './pages/users/cashierDelete';



function App() {
  return (
    <Container>
      <Row>   
        <Routes>
          {/**admin/cashier */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route  path="/iteminventory" element={<ItemInventory/>}/>
          <Route path="/itemsingle/:id" element={<ItemSingle/>}/>
          <Route path="/itemsinglecreate" element={<ItemSingleCreate />}/>
          <Route path="/itemsingleedit/:id" element={<ItemSingleEdit />}/>
          <Route path="/itemsingledelete/:id" element={<ItemSingleDelete />}/>
          <Route  path="/orderlist" element={<OrderList/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/deletecashier/:id" element={<CashierDelete/>}/>
          <Route path="/orderlog" element={<OrderLog/>}/>
        </Routes>
      </Row>
    </Container>
  );
}

export default App;
