import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
  couponCode: '',
  discountPercentage: 0
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingIndex > -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
    }

    case 'REMOVE_ITEM':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity < 1) return state; // Block negative quantities
      return {
        ...state,
        cart: state.cart.map(item => item.id === id ? { ...item, quantity } : item)
      };
    }

    case 'APPLY_COUPON': {
      const code = action.payload.toUpperCase();
      if (code === 'SAVE20') {
        return { ...state, couponCode: code, discountPercentage: 20 };
      } else if (code === 'SUPER50') {
        return { ...state, couponCode: code, discountPercentage: 50 };
      } else {
        alert("Invalid Voucher Code! Try using 'SAVE20' or 'SUPER50'");
        return state;
      }
    }

    case 'REMOVE_COUPON':
      return { ...state, couponCode: '', discountPercentage: 0 };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
