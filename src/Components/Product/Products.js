import React, { useState } from  'react'
import { useNavigate } from 'react-router-dom'
import './product.css'


function ProductContainer(productDetail) {
  const {product:{productImg , productTitle ,  price ,id ,productType }} = productDetail
  const navigate = useNavigate()
  
  const overAllTax = 10/100
  const commission = 10/100
  const discount = 10/100
  
  let mrp = parseInt(price)
  mrp = mrp + overAllTax*mrp + commission*mrp  
  const salePrice = mrp - discount*mrp
  const saving = mrp-salePrice
  

   return (
    <div className='product-container'>
      <img src={productImg} />
      <div className='product-detail'>
        <p className='productTitle'>{productTitle}</p>
        <div className='price-container'>
          <p className='mrp'>MRP:<p className='rate'>{mrp}</p></p>
          <p className='salePrice'>Discounted Price:<p className='rate'>{salePrice}</p></p>
          <p className='youSave'>You Save: {saving}</p>
        </div>
        <div className='buy-cart'>
          <button className='btn'  onClick={()=>navigate(`/Product/${id}/${productType}`)}>More Detail</button>
        </div>

      </div>
    </div>
  )
}

export default ProductContainer