import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartBox from '../../Components/CartBox/cartBox'
import './Cart.css'

function Cart() {
  const cart = useSelector(state => state.cartReducer.cart)
  const [priceFromChild , setPriceFromChild] = useState()
  console.log(cart)

  if (cart.length === 0) {
    return <div>
      <h2>Your Cart is Empty</h2>
    </div>
  }

  const handlePrice =(price) =>{
    setPriceFromChild(price)
  }

  return (
    <div>
      <div className='cart-head'>Your Cart Items</div>
      <div className='allCartItems'>
      {cart.map((item , index) => {
        return <div>
          <CartBox key={index} index={index} itemData={item} handlePrice={handlePrice}/>
        </div>
      })}
      </div>
      </div>
  )
}

export default Cart