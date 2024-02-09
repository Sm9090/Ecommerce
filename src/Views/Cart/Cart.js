import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

  const cart = useSelector(state => state.cartReducer.cart)
  console.log(cart)

  return (
    <div>{cart.map((item)=>{
      return <div>
        {item.productTitle}
      </div>

    })}</div>
  )
}

export default Cart