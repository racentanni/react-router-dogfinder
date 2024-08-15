import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import NewColorForm from './NewColorForm';

function App() {
  let initialColors;
  try {
    initialColors = JSON.parse(localStorage.getItem('colors')) || [{ name: 'red', color: '#ff0000' }, { name: 'green', color: '#00ff00' }, { name: 'blue', color: '#0000ff' }];
  } catch (e) {
    initialColors = [{ name: 'red', color: '#ff0000' }, { name: 'green', color: '#00ff00' }, { name: 'blue', color: '#0000ff' }];
  }

  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;