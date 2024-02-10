import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@mui/material'
import { getSingleAd } from '../../Config/firebase'
import { updateCart } from '../../store/cartSlice'
import './productDetail.css'
import Slider from '../../Components/ProductSlider/Slider'

function ProductDetail() {

    const user = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch()
    const { adId, adType } = useParams()
    const [ad, setAd] = useState({})
    const [sucessMsg, setSucessMsg] = useState()
    const [errorMsg, setErrorMsg] = useState()

    const type = adType.charAt(0).toUpperCase() + adType.toLowerCase().slice(1)

    useEffect(() => {
        getSingleProduct()
    }, [])

    const getSingleProduct = async () => {
        const res = await getSingleAd(adId, adType)
        setAd(res)
        console.log(ad)
    }


    const addToCart = () => {
        if (user) {
            dispatch(updateCart(ad))
            setSucessMsg('Added In Your Cart')
            setTimeout(() => {
                setSucessMsg('')
            },2000)
        } else {
            setErrorMsg('You need to login First')
            setTimeout(() => {
                setErrorMsg('')
        },2000)
        }
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
                    <p className='prod-details-head'>Details</p>
                    <p className='prod-description'>{ad.description}</p>

                    <div className='row-container'>
                        <div className='warranty-replacement'>
                            <div className='cod'>
                                <div className='image-circle'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/9198/9198191.png' />
                                </div>
                                <p>Cash on Delivery</p>
                            </div>

                            <div className='warranty'>
                                <div className='image-circle'>
                                    <img src='https://static.vecteezy.com/system/resources/previews/011/654/825/original/warranty-icon-vector-graphic-free-png.png' />
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
                            <button className='btn' onClick={addToCart}>Add To Cart</button>
                        </div>
                    </div>
            {sucessMsg && <div className='margintop'>
                    <Alert
                        size="md"
                        severity="success">{sucessMsg}</Alert>
            </div>}
            {errorMsg && <div className='margintop'>
                    <Alert
                        size="md"
                        severity="error">{errorMsg}</Alert>
            </div>}
                </div>
            </div>
            <p className='prod-details-head2'>
                Related items
            </p>
            <Slider type={type} />
        </div>
    )
}

export default ProductDetail