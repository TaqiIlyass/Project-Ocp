
import React from 'react';
import Employe from './components/adminglobal/Employe'; 
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from "./components/Navbar";
import Secretariats from "./components/adminglobal/Secretariats";
import Services from "./components/adminglobal/Services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/employe" element={<EmployeWithNavbar />} />
          <Route path="/secretariats" element={<SecretariatsWithNavbar />} />
          <Route path="/services" element={<ServicesWithNavbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function EmployeWithNavbar() {
  return (
    <div>
      <Navbar />
      <Employe />
    </div>
  );
}

function SecretariatsWithNavbar() {
  return (
    <div>
      <Navbar />
      <Secretariats />
    </div>
  );
}

function ServicesWithNavbar() {
  return (
    <div>
      <Navbar />
      <Services />
    </div>
  );
}
