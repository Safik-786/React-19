import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* -------------------- API CALL -------------------- */
export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
  }
);

/* -------------------- SLICE -------------------- */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cart: [],
    status: "idle"
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(i => i.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    clearCart: (state) => {
      state.cart = [];
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

const cartReducer= cartSlice.reducer;

export  {cartReducer}
