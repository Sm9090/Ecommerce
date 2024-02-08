import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleAd } from '../../Config/firebase'
import { useEffect } from 'react'
import './productDetail.css'

function ProductDetail() {

    const { adId, adType } = useParams()
    const [ad, setAd] = useState({})

    useEffect(() => {
        getSingleProduct()
    }, [])

    const getSingleProduct = async () => {
        const res = await getSingleAd(adId, adType)
        setAd(res)
        console.log(ad)
    }

    const overAllTax = 10 / 100
    const commission = 10 / 100
    const discount = 10 / 100

    let mrp = parseInt(ad.price)
    mrp = mrp + overAllTax * mrp + commission * mrp
    const salePrice = mrp - discount * mrp
    const saving = mrp - salePrice


    return (
        <div>
            <div className='prod-container'>
                <div className='prod-img-container'>
                    <img src={ad.productImg} />
                </div>
                <div className='prod-data'>
                    <p className='prod-head'>{ad.productTitle}</p>
                    <div className='price-container'>
                        <p className='mrp'>MRP:<p className='rate'>{mrp}</p></p>
                        <p className='salePrice'>Discounted Price:<p className='rate'>{salePrice}</p></p>
                        <p className='youSave'>You Save: {saving}</p>

                    </div>
                    <p className='prod-detail-head'>Details</p>
                    <p className='prod-description'>{ad.description}</p>

                    <div className='row-container'>
                        <div className='waranty-replacement'>
                                                <div className='cod'>
                            <div className='image-circle'>
                                <img src='https://cdn-icons-png.flaticon.com/512/9198/9198191.png' />
                            </div>
                            <p>Cash on Delivery</p>
                        </div>

                        <div className='waranty'>
                            <div className='image-circle'>
                                <img src='https://static.vecteezy.com/system/resources/previews/011/654/825/original/warranty-icon-vector-graphic-free-png.png'  />
                            </div>
                            <p>{ad.waranty}</p>
                        </div>

                        <div className='replacement'>
                            <div className='image-circle'>
                                <img src='https://cdn-icons-png.flaticon.com/512/5953/5953659.png' />
                            </div>
                            <p> 7 Days Replacement</p>
                        </div>
                    </div>
                    <div className='buy-cart'>
                        <button className='btn'>Buy now </button>
                        <button className='btn'>Add To Cart</button>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductDetail