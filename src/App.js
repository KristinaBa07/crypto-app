import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
        <div>
        <NavBar /> 
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
