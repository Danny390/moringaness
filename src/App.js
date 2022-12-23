import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Products from './components/products/Products';
import ContactUs from './components/contact/ContactUs';
import Home from './components/layout/Home';
import './App.css';


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact-us" element={<ContactUs />} />
      </Routes> 
      <Footer/>
      </Router>
  );
}

export default App;
