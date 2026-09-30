import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function OrderSummary() {
  const { state, dispatch } = useCart();
  const [couponInput, setCouponInput] = useState('');

  // Primary calculation formulas
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * state.discountPercentage) / 100;
  const taxableAmount = subtotal - discountAmount;
  const gstAmount = (taxableAmount * 18) / 100; // Fixed 18% standard GST baseline 
  const grandTotal = taxableAmount + gstAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      dispatch({ type: 'APPLY_COUPON', payload: couponInput.trim() });
      setCouponInput('');
    }
  };

  return (
    <div className="summary-card">
      <h3>Checkout Summary</h3>
      
      <div className="breakdown-lines">
        <div className="summary-line">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>

        {state.discountPercentage > 0 && (
          <div className="summary-line discount">
            <span>Discount ({state.discountPercentage}%)</span>
            <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
          </div>
        )}

        <div className="summary-line">
          <span>GST (18%)</span>
          <span>+ ₹{gstAmount.toLocaleString('en-IN')}</span>
        </div>
        
        <hr />
        
        <div className="summary-line grand-total">
          <span>Grand Total</span>
          <span>₹{grandTotal.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Coupon Application Management Block */}
      <div className="coupon-module">
        {state.couponCode ? (
          <div className="active-coupon-badge">
            <span>🎟️ Code <strong>{state.couponCode}</strong> Active!</span>
            <button onClick={() => dispatch({ type: 'REMOVE_COUPON' })}>Remove</button>
          </div>
        ) : (
          <form onSubmit={handleApplyCoupon} className="coupon-form">
            <input 
              type="text" 
              placeholder="Enter Voucher (SAVE20, SUPER50)" 
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
            />
            <button type="submit">Apply</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default OrderSummary;
