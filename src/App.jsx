import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import "./global.styles.css";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
