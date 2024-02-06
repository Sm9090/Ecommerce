import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Slider from '../../Components/ProductSlider/Slider'
import './Home.css'

function Home() {
  return (
    <>
    <main>
      <Banner />
      <div className='slider-head'>
      <p>Limited Time Deals</p>
      </div>
       <Slider type={'Mobile'}/>
       <Slider type={'Laptop'}/>
       <Slider type={'Camera'}/>
       <Slider type={'Shoes'}/>

    </main>
    </>
  )
}

export default Home