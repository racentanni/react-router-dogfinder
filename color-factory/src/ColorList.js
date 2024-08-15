import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function ColorList({ colors }) {
  return (
    <div className="color-list">
      <h1>Welcome to the Color Factory</h1>
      <h2>Please select a color.</h2>
      <ul>
        {colors.map(({ name, color }) => (
          <li key={name} className="color-item">
            <Link to={`/colors/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a new color</Link>
    </div>
  );
}

export default ColorList;