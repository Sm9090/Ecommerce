import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: []
    },
    reducers: {
      updateCart: (state, data) => {
        console.log(data.payload)
        state.cart.push(...state.cart,data.payload)
      },
      removeCart: (state) =>{

      }
    }
  })
  
  export const { updateCart, removeCart } = cartSlice.actions
export default cartSlice.reducer
  