import React from 'react';
import { Link } from 'react-router-dom';

export default function Resturant() {
  return (
    <div>
      <h2>Restaurant Page</h2>
      <Link to="/resturant/pizza">Pizza</Link>
      <Link to="/resturant/onion">Onion</Link>
      <Link to="/resturant/salad">Salad</Link>
    </div>
  );
}
