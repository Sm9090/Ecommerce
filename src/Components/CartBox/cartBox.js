import React, { useState } from 'react'

function CartBox(itemData) {

    const { itemData: { brand, customerSupport, description, price, productImg, productType, productTitle, waranty } } = itemData
const [prodQuantity ,setProdQuantity] = useState(1)

    const overAllTax = 10 / 100
    const commission = 10 / 100
    const discount = 10 / 100

    let mrp = parseInt(price)
    mrp = mrp + overAllTax * mrp + commission * mrp
    const salePrice = mrp - discount * mrp
    const saving = mrp - salePrice

    const increaseQuantity = () => {
        setProdQuantity(prodQuantity + 1)
    }

    const decreaseQuantity = () => {
        if (prodQuantity >= 1) {
            setProdQuantity(prodQuantity - 1)
        }

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
            <div></div>
        </div>
    )
}

export default CartBox