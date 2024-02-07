import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'

function Card(productDetail) {
  const {product:{productImg , productTitle ,  price , waranty, description, brand ,id}} = productDetail
  const navigate = useNavigate()
  
  const overAllTax = 10/100
  const commission = 10/100
  const discount = 10/100

  let mrp =parseInt(price)
  mrp = Math.ceil(mrp + overAllTax*mrp + commission*mrp)  
   const salePrice = Math.ceil(mrp - discount*mrp)
   const saving = Math.ceil(mrp - salePrice)


  return (
    <div className='mini-product-container'>
      <div className='mini-img-container'>
        <img src={productImg} />
      </div>
      <div className='mini-product-detail'>
      <p className='mini-productTitle'>{productTitle}</p>
      <div className='mini-price-container'>
          <p className='mrp'>MRP:<p className='rate'>{mrp}</p></p>
          <p className='salePrice'>Discounted Price:<p className='rate'>{salePrice}</p></p>
          <p className='youSave'>You Save: {saving}</p>
        </div>
        
        <button className='showMore-btn' onClick={() => navigate(`/Product/${id}/${productTitle}`)}>
          Show More &gt; 
          </button>
      </div>
    </div>
  )
}

export default Card