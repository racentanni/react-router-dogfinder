import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders the Nav component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Whiskey')).toBeInTheDocument();
    expect(screen.getByText('Duke')).toBeInTheDocument();
    expect(screen.getByText('Perry')).toBeInTheDocument();
    expect(screen.getByText('Tubby')).toBeInTheDocument();
  });

  test('renders the DogList component on /dogs route', () => {
    render(
      <MemoryRouter initialEntries={['/dogs']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Whiskey')).toBeInTheDocument();
    expect(screen.getByText('Duke')).toBeInTheDocument();
    expect(screen.getByText('Perry')).toBeInTheDocument();
    expect(screen.getByText('Tubby')).toBeInTheDocument();
  });

  test('renders the DogDetails component on /dogs/:name route', () => {
    render(
      <MemoryRouter initialEntries={['/dogs/Whiskey']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Whiskey loves eating popcorn.')).toBeInTheDocument();
    expect(screen.getByText('Whiskey is a terrible guard dog.')).toBeInTheDocument();
    expect(screen.getByText('Whiskey wants to cuddle with you!')).toBeInTheDocument();
  });

  test('redirects to /dogs on unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Whiskey')).toBeInTheDocument();
    expect(screen.getByText('Duke')).toBeInTheDocument();
    expect(screen.getByText('Perry')).toBeInTheDocument();
    expect(screen.getByText('Tubby')).toBeInTheDocument();
  });
});
