const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const isPresent= state.cart.find((item)=>{
          return item.id === action.payload.id
      })

      if(isPresent){
        return state
      }
      const updatedData= {
        ...state,
        cart: [...state.cart, action.payload]
      }
      return updatedData
    }
    case "REMOVE_FROM_CART": {

      console.log("action.payload= ", action.payload)
      const updatedCartItem= state.cart.filter((item)=>{

        return item.id !== action.payload
      })

      console.log("updatedCartItem= ", updatedCartItem)
      const updatedState={
        ...state,
        cart: updatedCartItem
      }
      return updatedState
    }

    default:
      return state;
  }
};

export default cartReducer;
