import React, { useEffect, useState } from 'react'
import './AllProductPage.css'
import { getProduct } from '../../Config/firebase'
import ProductContainer from '../../Components/Product/Products'





function AllProductPage(props) {

    const [products ,setProducts] = useState([])

    useEffect(()=>{
        getAds() 
    },[props.type])

    const getAds = async ()=>{
      const res = await getProduct(props) 
      console.log(res)
      setProducts(res)
    }

    if(!products){
      return <div>loading</div>
    }
    
  return (
    <div className='allProductPage'>
        <div className='heading'>
            <p>Top Result For {props.type}</p>
        </div>

        <div className='allProductContainer'>
          {
            products.map((product)=>{
             return <div>
              <ProductContainer 
              key={product.id}
              product={product}
              />
             </div>

            })
          }

        </div>
    </div>
  )
}

export default AllProductPage