import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: []
    },
    reducers: {
      updateCart: (state, data) => {
        state.cart.push(data.payload)
      },
      removeCart: (state ,data) =>{
        state.cart.splice(data.payload , 1)
      }
    }
  })
  
  export const { updateCart, removeCart } = cartSlice.actions
export default cartSlice.reducer
  