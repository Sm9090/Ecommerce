import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { getProduct } from '../../Config/firebase'
import Card from '../Card/Card'

function Slider(props) {
    const [products ,setProducts] = useState([])

    useEffect(()=>{
        getAds()
      },[])
      
      const getAds= async()=>{
        const res = await getProduct(props)
        setProducts(res)
      }

    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        laptop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600 ,min: 0 },
          items: 1
        }
      };

  return (
    <div>
        {
    <Carousel responsive={responsive}>
    {products.map((product)=>{
       return <Card key={product.id}
        product={product}
        />
    })}
  </Carousel>}
  </div>
  )
}

export default Slider