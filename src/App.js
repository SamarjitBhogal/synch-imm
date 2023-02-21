import './App.css';
import React from 'react';

//routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages imports
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Layout from './components/layout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/forms"></Route>
            <Route path="/contact"></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
