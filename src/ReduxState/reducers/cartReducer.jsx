const initialState = {
  cart: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productFound = state.cart.find(
        (item) => item.id === action.payload.id
      );

      // Product already exists → increase quantity
      if (productFound) {
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          cart: updatedCart
        };
      }

      // Product does not exist → add new item
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
