import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartBox from '../../Components/CartBox/cartBox'

function Cart() {
  const cart = useSelector(state => state.cartReducer.cart)
//   const [cartData , setCartData] = useState()
//   setCartData(cart)
// console.log(cartData)

  if (cart.length === 0) {
    return <div>
      <h2>Your Cart is Empty</h2>
    </div>
  }

  return (
    <div>
      <div className='cart-head'>Your Cart Items</div>
      <div className='allCartItems'>
      {cart.map((item) => {
        return <div>
          <CartBox key={item.id} itemData={item}/>
        </div>
      })}
      </div>
      </div>
  )
}

export default Cart