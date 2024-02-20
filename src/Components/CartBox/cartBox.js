import React, { useEffect, useState } from 'react'
import './cartBox.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../../store/cartSlice'

function CartBox({ itemData, index, handlePrice }) {

    const { price, productImg, productTitle } = itemData
    const [prodQuantity, setProdQuantity] = useState(1)

    const dispatch = useDispatch()

    const overAllTax = 10 / 100
    const commission = 10 / 100
    const discount = 10 / 100

    let mrp = parseInt(price)
    mrp = mrp + overAllTax * mrp + commission * mrp
    const salePrice = mrp - discount * mrp
    const totalPrice = salePrice * prodQuantity


    const increaseQuantity = () => {
        setProdQuantity(prodQuantity + 1)
        handlePrice(salePrice)
    }

    const decreaseQuantity = () => {
        if (prodQuantity > 1) {
            setProdQuantity(prodQuantity - 1)
            handlePrice(-salePrice)
        }
    }

    const deleteCartItem = () => {
        dispatch(removeCart(index))
        handlePrice(-totalPrice)
    }



    return (
        <div className='cart-prod-container'>
            <div className='cart-prod-imgTitle'>
                <div className='prod-image'>
                    <img src={productImg} />
                </div>
                <div className='prod-title'>
                    {productTitle}
                </div>
            </div>
            <div className='prodQuantity-div'>
                <button onClick={increaseQuantity}>+</button>
                <p>{prodQuantity}</p>
                <button onClick={decreaseQuantity}>-</button>
            </div>
            <div className='prodPrice'>{totalPrice}</div>
            <button className='deleteBtn' onClick={deleteCartItem}>
                <img src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' />
            </button>
        </div>
    )
}

export default CartBox