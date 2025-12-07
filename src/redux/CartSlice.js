import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const savedCart = JSON.parse(localStorage.getItem("cartitem")) || [];

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartitem: savedCart,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartitem.find((item) => item._id === product._id);

      if (existing) {
        // If exists, increment quantity
        existing.quantity += 1;
      } else {
        state.cartitem.push({ ...product, quantity: 1 }); // initialize quantity
      }

      localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const product = state.cartitem.find((item) => item._id === id);
      if (product) {
        product.quantity += 1;
      }
      localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const product = state.cartitem.find((item) => item._id === id);

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          // Remove if quantity is 1
          state.cartitem = state.cartitem.filter((i) => i._id !== id);
        }
      }

      localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
    },

    removeFromCart: (state, action) => {
      state.cartitem = state.cartitem.filter((i) => i._id !== action.payload);
      localStorage.setItem("cartitem", JSON.stringify(state.cartitem));
    },

    clearCart: (state) => {
      state.cartitem = [];
      localStorage.removeItem("cartitem");
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;