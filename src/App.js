import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Authenticator from './Screens/Authenticator';
import Home from "./Screens/Home";
import Sender from "./Screens/Sender";
import Dashboard from "./Screens/Dashboard";

const Navbar = () => (
  <nav>
      <Link to="/Home">Home</Link>
      <Link to="/Sender">Sender</Link>
      <Link to="/Dashboard">Dashboard</Link>
  </nav>
);

const NavComponent =()=>{
  return(
    <div className="Navigator-component">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Sender" element={<Sender />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

const Logcomponent =()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Authenticator />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      {true && true 
        ? <NavComponent />
        : <Logcomponent />
      }
    </Router>

  );
}

export default App;