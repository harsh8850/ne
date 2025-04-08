import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} width="100" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;