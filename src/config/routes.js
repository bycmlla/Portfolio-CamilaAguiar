import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ColorProvider } from "../contexts/ColorContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import SQLPage from "../pages/Projects/SubPages/SQLPage/SQLPage";
import ROSA from "../pages/Projects/SubPages/Python/ROSA/ROSA";
import { Dashboards } from "../pages/Projects/SubPages/Dashboards/Dashboards";
import DashboardPage from "../pages/Projects/SubPages/Dashboards/DashboardsSubPages/DashboardPage";
import Automation from "../pages/Projects/SubPages/Python/Automation/Automation";
import Refresh from "../pages/Projects/SubPages/Python/Refresh/Refresh";
import { RefreshPartTwo } from "../pages/Projects/SubPages/Python/RefreshPartTwo/RefreshPartTwo";
import Tutorial from "../pages/Projects/SubPages/Dashboards/Tutorial/Tutorial";
import { RoomRover } from "../pages/Projects/SubPages/Angular/RoomRover/RoomRover";
import Angular from "../pages/Projects/SubPages/Angular/Angular";
import { Blog } from "../pages/Blog/Blog";
import { Soon } from "../components/Soon/Soon";

const RoutesComponent = () => {
  return (
    <ColorProvider>
      <ThemeProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sqlpage" element={<SQLPage />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/dashboard/:id" element={<DashboardPage />} />
            <Route path="/rosa" element={<ROSA />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/refresh" element={<Refresh />} />
            <Route path="/refresh2" element={<RefreshPartTwo />} />
            <Route path="/tutorialpbi" element={<Tutorial />} />
            <Route path="/roomrover" element={<RoomRover />} />
            <Route path="/angular" element={<Angular />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/breve" element={<Soon />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ColorProvider>
  );
};

export default RoutesComponent;
