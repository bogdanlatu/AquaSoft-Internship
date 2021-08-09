import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar() {

  const element = <FontAwesomeIcon icon={faUser} />

  return (
    <div className="NavBar">
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link to="/"><button className="nav-link active" type="button">Home</button></Link>
        </li>
        <li className="nav-item">
            <Link to="/employees"><button className="nav-link" type="button" >Employees</button></Link>
        </li>
        <li className="nav-item">
            <Link to="/projects"><button className="nav-link" type="button"  >Projects</button></Link>
        </li>
        <li className="nav-item">
            <Link to="/register"><button className="nav-link" type="button">{element}</button></Link>
        </li>
        </ul>
    </div>
  );
}

export default NavBar;
