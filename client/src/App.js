import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import "./App.css";

import Register from "./pages/register";
import Login from "./pages/login";
import FreeComponent from "./pages/freecomponent";
import AuthComponent from "./pages/authcomponent";
import ItemInventory from './pages/iteminventory';
import OrderList from './pages/orderlist';
import Settings from './pages/settings';
import About from './pages/about';

import ItemSingle from './pages/itemsingle/itemsingle';
import ItemSingleCreate from './pages/itemsingle/singleProductCreate';
import ItemSingleEdit from './pages/itemsingle/singleProductEdit';
import ItemSingleDelete from './pages/itemsingle/singleProductDelete'

// import ProtectedRoutes from "./protectedRoutes";


function App() {
  return (
    <Container>
      <Row>   
        <Routes>
          {/**admin/cashier */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/free" element={<FreeComponent />} />
          <Route path="/auth" element={<AuthComponent/>} />
          <Route  path="/iteminventory" element={<ItemInventory/>}/>
          <Route path="/itemsingle/:id" element={<ItemSingle/>}/>
          <Route path="/itemsinglecreate" element={<ItemSingleCreate />}/>
          <Route path="/itemsingleedit/:id" element={<ItemSingleEdit />}/>
          <Route path="/itemsingledelete/:id" element={<ItemSingleDelete />}/>
          <Route  path="/orderlist" element={<OrderList/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </Row>
    </Container>
  );
}

export default App;
