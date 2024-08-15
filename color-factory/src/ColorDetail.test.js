import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ColorDetail from './ColorDetail';

test('renders color detail correctly', () => {
  const colors = ['red', 'green', 'blue'];
  render(
    <MemoryRouter initialEntries={['/colors/red']}>
      <Routes>
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('This is red')).toBeInTheDocument();
  expect(screen.getByText('Go back')).toBeInTheDocument();
});

test('redirects to /colors if color is not found', () => {
  const colors = ['red', 'green', 'blue'];
  render(
    <MemoryRouter initialEntries={['/colors/yellow']}>
      <Routes>
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="/colors" element={<div>Color List</div>} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText('Color List')).toBeInTheDocument();
});