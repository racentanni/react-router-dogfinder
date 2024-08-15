import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function NewColorForm({ addColor }) {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && color) {
      addColor({ name, color });
      navigate('/colors');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <form className="new-color-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="color">Color:</label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Add Color</button>
    </form>
  );
}

export default NewColorForm;