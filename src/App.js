import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import './App.css'; // Import the CSS file

const App = ({ dogs = [] }) => (
  <Router>
    <Nav dogs={dogs.map(dog => dog.name)} />
    <div className="container">
      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </div>
  </Router>
);

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: `${process.env.PUBLIC_URL}/whiskey.jpg`,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: `${process.env.PUBLIC_URL}/duke.jpg`,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: `${process.env.PUBLIC_URL}/perry.jpg`,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: `${process.env.PUBLIC_URL}/random-thoughts-on-coyote.jpg`,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;
