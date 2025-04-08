import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={handleCheckout}>Checkout</button>
      {orderPlaced && <p style={{ color: 'green' }}>Order placed successfully!</p>}
    </div>
  );
};

export default CartPage;