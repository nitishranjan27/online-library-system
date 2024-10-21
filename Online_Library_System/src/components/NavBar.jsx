import React from 'react';
import { Link } from 'react-router-dom';
import "../style/NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/browse-books">Browse Books</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;