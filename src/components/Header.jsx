import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart ({cart.length})</Link> |{' '}
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;