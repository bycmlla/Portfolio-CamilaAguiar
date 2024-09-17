import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import SQLPage from "../pages/Projects/SubPages/SQLPage";
import { Dashboards } from "../pages/Projects/SubPages/Dashboards/Dashboards";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sqlpage" element={<SQLPage />} />
        <Route path="/dashboards" element={<Dashboards />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
