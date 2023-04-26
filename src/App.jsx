import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import Menu from "./components/pages/menu/menu";
import Navbar from "./components/pages/navbar/navbar";
import React from "react";
import { Toolbar } from "@mui/material";
import Delivery from "./components/pages/delivery/delivery";

function App() {
  return (
    <React.Fragment>

      <Toolbar>
      <Navbar/>
      </Toolbar>

      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
      </Router>
      <Toolbar/>

      </React.Fragment>
  );
}

export default App
