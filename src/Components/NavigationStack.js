import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Career from "./Career";
import ContactUs from "./ContactUs";
import KnowledgeCenter from "./KnowledgeCenter";
import StartUpServices from "./StartUpServices";

const NavigationStack = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/knowledge" element={<KnowledgeCenter />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/startup" element = {<StartUpServices/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavigationStack;
