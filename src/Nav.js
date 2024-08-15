import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = ({ dogs }) => (
  <div className="navbar">
    <Link to="/dogs">Home</Link>
    {dogs.map(dog => (
      <Link key={dog} to={`/dogs/${dog}`}>{dog}</Link>
    ))}
  </div>
);

export default Nav;