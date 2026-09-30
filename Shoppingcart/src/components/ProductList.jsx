import React from 'react';
import { useCart } from '../context/CartContext';

function ProductList() {
  const { dispatch } = useCart();

  const inventory = [
    { id: 101, name: "Premium Wireless Headphones", price: 4999, category: "Electronics", image: "https://unsplash.com" },
    { id: 102, name: "Minimalist Mechanical Keyboard", price: 3499, category: "Accessories", image: "https://unsplash.com" },
    { id: 103, name: "Ergonomic Optical Gaming Mouse", price: 1999, category: "Electronics", image: "https://unsplash.com" }
  ];

  return (
    <div className="product-section">
      <h2>🛒 Marketplace Catalogue</h2>
      <div className="products-grid">
        {inventory.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="category-tag">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
              <button 
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                className="btn-add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
