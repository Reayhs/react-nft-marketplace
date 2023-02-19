import React from "react";
import Home from "./assets/Home";
import {
  Routes,
  Route
} from "react-router-dom";
import Market from "./components/Market";
import Contact from "./components/Contact";
import Wallet from "./components/Wallet";
import Create from "./components/Create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="market" element={<Market/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="wallet" element={<Wallet/>} />
      <Route path="create" element={<Create/>} />
    </Routes>
  );
}

export default App;
