import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import CartContainer from './components/CartContainer';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <CartProvider>
      <div className="checkout-app">
        <header className="app-header">
          <h1>🛍️ Smart POS Checkout System</h1>
          <p>Context API & useReducer Enterprise State Demo</p>
        </header>

        <main className="checkout-main-layout">
          <div className="left-shopping-panel">
            <ProductList />
            <CartContainer />
          </div>
          <div className="right-billing-panel">
            <OrderSummary />
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
