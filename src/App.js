import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import AssetDetail from "./pages/AssetDetails";

function App() {
  return (
    <Router>
        <div>
        <NavBar /> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asset/:id" element={<AssetDetail />} />
        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
