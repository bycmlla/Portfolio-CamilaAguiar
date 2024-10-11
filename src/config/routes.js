import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import SQLPage from "../pages/Projects/SubPages/SQLPage/SQLPage";
import ROSA from "../pages/Projects/SubPages/Python/ROSA/ROSA";
import PythonProjects from "../pages/Projects/SubPages/Python/PythonProjects";
import { Dashboards } from "../pages/Projects/SubPages/Dashboards/Dashboards";
import DashboardPage from "../pages/Projects/SubPages/Dashboards/DashboardsSubPages/DashboardPage";
import Automation from "../pages/Projects/SubPages/Python/Automation/Automation";
import Refresh from "../pages/Projects/SubPages/Python/Refresh/Refresh";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sqlpage" element={<SQLPage />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/dashboard/:id" element={<DashboardPage />} />
        <Route path="/rosa" element={<ROSA />} />
        <Route path="/python" element={<PythonProjects/>}/>
        <Route path="/automation" element={<Automation/>}/>
        <Route path="/refresh" element={<Refresh/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
