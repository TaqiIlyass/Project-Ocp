
import React from 'react';
import Employe from './components/adminglobal/Employe'; 
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employe" element={<Employe />} />
          {/* Ajoutez d'autres routes pour les services et les secrétariats */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
