import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome to the Vending Machine</h2>
    <p>Select a product:</p>
    <ul>
      <li>
        <Link to="/products/soda">Soda</Link>
      </li>
      <li>
        <Link to="/products/chips">Chips</Link>
      </li>
      <li>
        <Link to="/products/candy">Candy</Link>
      </li>
    </ul>
  </div>
);

const Product = ({ match }) => (
  <div>
    <h2>{match.params.productName}</h2>
    <p>This is the {match.params.productName} product page.</p>
  </div>
);

const VendingMachine = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/products/:productName" component={Product} />
    </div>
  </Router>
);

export default VendingMachine;
