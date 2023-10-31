import React from 'react';
import Products from './components/product/Products.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Resturant from './components/resturant/Resturant.jsx'; 
import ResturantDetails from './components/resturant/ResturantDetails.jsx'; 

export default function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/products' element={<Products/>} />
      <Route path='/resturant' element={<Resturant/>} />
      <Route path='/resturant/:id' element={<ResturantDetails/>} />
     </Routes>
    </>
  )
}
