import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Slider from '../../Components/ProductSlider/Slider'

function Home() {
  return (
    <>
    <main>
      <Banner />
       <Slider type={'Mobile'}/>
    </main>
    </>
  )
}

export default Home