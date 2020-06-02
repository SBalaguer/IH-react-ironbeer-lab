import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Im the home page</h1>
      <Link to="/beers">All Beers</Link>
      <Link to="/random">Random Beer</Link>
      <Link to='/new'>New Beer</Link>
    </div>
  );
}
