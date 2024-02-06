import React from 'react'
import './product.css'

function ProductContainer(productDetail) {

  console.log(productDetail)
  const {product:{productImg , productTitle ,  price }} = productDetail

  const overAllTax = 10/100
  const commission = 10/100
  const discount = 10/100

  let mrp = parseInt(price)
   mrp = mrp + overAllTax*mrp + commission*mrp  
   const salePrice = mrp - discount*mrp


  return (
    <div className='product-container'>
      <img src={productImg} />
      <div className='product-detail'>
        <p className='productTitle'>{productTitle}</p>
        <div className='price-container'>
          <p className='mrp'>MRP:<p className='rate'>{mrp}</p></p>
          <p className='salePrice'>Discounted Price:<p className='rate'>{salePrice}</p></p>
          <p className='youSave'>You Save: {mrp - salePrice}</p>
        </div>
        <div className='buy-cart'>
          <button className='btn'>Buy Now</button>
          <button className='btn'>Add to Cart</button>

        </div>

      </div>
    </div>
  )
}

export default ProductContainer