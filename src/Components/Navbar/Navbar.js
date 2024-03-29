import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'
import Cartlogo from '../assets/Cartlogo.png'
import Applogo from '../assets/applogo.png'
import AccountMenu from '../AccountMenu/Account'




function Navbar({ userInfo }) {
  const navigate = useNavigate()
  const cart = useSelector(state => state.cartReducer.cart)

  return (
    <>
      <div className="navbar">
        <div className='LeftContainer'>
          <img src={Applogo} />
        </div>
        <nav>
          <div className='navbar-hamburger'>

          </div>
          <div className='navbar-btn'>
            <button onClick={() => navigate('/Home')}>Home</button>
            <button onClick={() => navigate('/AddProduct')}>Sell</button>
            <button onClick={() => navigate('/Contact')}>Contact Us</button>


          </div>
          <div className='cart-btn' onClick={() => navigate('/Cart')}>
            <img src={Cartlogo} alt="Cart" />
            <span className='cart-icon-css'> {cart.length}</span>
          </div>

          <div className='Profile'>
            <AccountMenu fullName={userInfo.fullName} />
          </div>
        </nav>
      </div>
      <div className='product-types'>
        <button onClick={() => navigate('/product-type/Mobiles')}>Mobiles</button>
        <button onClick={() => navigate('/product-type/Laptops')}>Laptops</button>
        <button onClick={() => navigate('/product-type/Cameras')}>Cameras</button>
        <button onClick={() => navigate('/product-type/Shoes')}>Shoes</button>


      </div>
    </>
  )
}

export default Navbar