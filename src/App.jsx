import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

export const App = () => {
  return (
    <BrowserRouter>
    
      <Layout />
      <Home/>
    </BrowserRouter>
  );
};

export default App;
