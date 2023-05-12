import './App.css';
import React from 'react';

//routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages imports
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Forms from "./pages/Forms";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/forms" element={<Forms/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;