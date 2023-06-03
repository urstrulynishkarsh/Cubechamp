import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Hiring from "./pages/Hiring";
import Demo from "./pages/Demo";
import Privacy from "./pages/Privacy";
import { useEffect, useState } from "react";




function App() {
 
 
  
 

  

  return (
    <div className=" overflow-x-hidden relative h-full w-full">
      
      <Navbar   />
      

      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/" element = {<Home/>} />
        <Route path="/service" element={<Services />} />
        <Route path="/pricing" element = {<Pricing/>} />
        <Route path="/faq" element = {<Faq/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/hiring" element = {<Hiring/>} />
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>


      </Routes>

    </div>
    )
}

export default App;
