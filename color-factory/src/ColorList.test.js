import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ColorList from './ColorList';

const colors = [
  { name: 'red', color: '#FF0000' },
  { name: 'green', color: '#00FF00' },
  { name: 'blue', color: '#0000FF' },
];

test('renders without crashing', () => {
  render(
    <BrowserRouter>
      <ColorList colors={colors} />
    </BrowserRouter>
  );
});

test('displays the correct heading', () => {
  render(
    <BrowserRouter>
      <ColorList colors={colors} />
    </BrowserRouter>
  );
  expect(screen.getByText('Welcome to the Color Factory')).toBeInTheDocument();
  expect(screen.getByText('Please select a color.')).toBeInTheDocument();
});

test('displays the color names', () => {
  render(
    <BrowserRouter>
      <ColorList colors={colors} />
    </BrowserRouter>
  );
  colors.forEach(({ name }) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

test('generates correct links for colors', () => {
  render(
    <BrowserRouter>
      <ColorList colors={colors} />
    </BrowserRouter>
  );
  colors.forEach(({ name }) => {
    const link = screen.getByText(name).closest('a');
    expect(link).toHaveAttribute('href', `/colors/${name}`);
  });
});

test('has a link to add a new color', () => {
  render(
    <BrowserRouter>
      <ColorList colors={colors} />
    </BrowserRouter>
  );
  const link = screen.getByText('Add a new color').closest('a');
  expect(link).toHaveAttribute('href', '/colors/new');
});