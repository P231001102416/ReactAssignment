import React from 'react';
import { useCart } from '../context/CartContext';

function CartContainer() {
  const { state, dispatch } = useCart();

  if (state.cart.length === 0) {
    return (
      <div className="empty-cart-state">
        <p>Your shopping basket is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-list-wrapper">
      <h2>Your Selection ({state.cart.length})</h2>
      <div className="cart-items-stack">
        {state.cart.map(item => (
          <div key={item.id} className="cart-item-row">
            <div className="item-meta">
              <h4>{item.name}</h4>
              <p className="item-unit-price">₹{item.price.toLocaleString('en-IN')} each</p>
            </div>
            
            <div className="quantity-controls">
              <button 
                onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}
                className="qty-btn"
              >
                -
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button 
                onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}
                className="qty-btn"
              >
                +
              </button>
            </div>

            <div className="price-sum">
              <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
            </div>

            <button 
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
              className="btn-remove"
              title="Remove Item"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartContainer;
