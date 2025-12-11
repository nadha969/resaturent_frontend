import { createSlice } from "@reduxjs/toolkit";

// Utility function to get sessionStorage key for a user
const getCartKey = (userId) => `cartitem_${userId}`;

// Load cart for user from sessionStorage
const loadCart = (userId) => {
  if (!userId) return [];
  const savedCart = JSON.parse(sessionStorage.getItem(getCartKey(userId)));
  return savedCart || [];
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartitem: [],
    userId: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload;
      state.cartitem = loadCart(state.userId);
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartitem.find((item) => item._id === product._id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartitem.push({ ...product, quantity: 1 });
      }

      if (state.userId) {
        sessionStorage.setItem(getCartKey(state.userId), JSON.stringify(state.cartitem));
      }
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const product = state.cartitem.find((item) => item._id === id);
      if (product) product.quantity += 1;

      if (state.userId) {
        sessionStorage.setItem(getCartKey(state.userId), JSON.stringify(state.cartitem));
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const product = state.cartitem.find((item) => item._id === id);

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cartitem = state.cartitem.filter((i) => i._id !== id);
        }
      }

      if (state.userId) {
        sessionStorage.setItem(getCartKey(state.userId), JSON.stringify(state.cartitem));
      }
    },

    removeFromCart: (state, action) => {
      state.cartitem = state.cartitem.filter((i) => i._id !== action.payload);

      if (state.userId) {
        sessionStorage.setItem(getCartKey(state.userId), JSON.stringify(state.cartitem));
      }
    },

    clearCart: (state) => {
      state.cartitem = [];
      if (state.userId) {
        sessionStorage.removeItem(getCartKey(state.userId));
      }
    },
  },
});

export const {
  setUser,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
