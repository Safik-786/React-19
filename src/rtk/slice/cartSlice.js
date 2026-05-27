<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
=======
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* -------------------- API CALL -------------------- */
export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
  }
);
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799

/* -------------------- SLICE -------------------- */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
<<<<<<< HEAD
    cart: [],
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    addToCart: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
=======
    products: [],
    cart: [],
    status: "idle"
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload.id);
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
<<<<<<< HEAD
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
=======
      state.cart = state.cart.filter(i => i.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload);
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
<<<<<<< HEAD
      const item = state.cart.find((i) => i.id === action.payload);
=======
      const item = state.cart.find(i => i.id === action.payload);
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    clearCart: (state) => {
      state.cart = [];
<<<<<<< HEAD
    },
  },
});

export const {
  setProducts,
=======
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
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
<<<<<<< HEAD
  clearCart,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export { cartReducer };
=======
  clearCart
} = cartSlice.actions;

const cartReducer= cartSlice.reducer;

export  {cartReducer}
>>>>>>> a8a4fe20dc98445a755bc5a07087d7bed59cf799
