import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import './App.css';

function ColorDetail({ colors }) {
  const { color } = useParams();
  const colorObj = colors.find(c => c.name === color);
  if (!colorObj) {
    return <Navigate to="/colors" />;
  }

  console.log('colorObj.color:', colorObj.color); // Debugging line

  return (
    <div className="color-detail" style={{ backgroundColor: colorObj.color }}>
      <h1>This is {colorObj.name}</h1>
      <Link to="/colors">Go back</Link>
    </div>
  );
}

export default ColorDetail;