import React from 'react'
import { useParams } from 'react-router-dom'


function ProductDetail() {
    const {adId ,adTitle} = useParams()
  return (
    <div>
        <p>{adId}</p>
        <p>{adTitle}</p>
    </div>
  )
}

export default ProductDetail