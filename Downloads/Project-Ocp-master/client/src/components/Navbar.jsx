import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/OCP_Group.svg/1200px-OCP_Group.svg.png" alt="Logo" />
      </div>
      <ul>
        <li><Link to="/employe">Liste de garde</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/secretariats">Secrétariats</Link></li>
        <li><Link to="/logout">Déconnexion</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
