import React from 'react'
import './Navbar.css'
import l from './images/ShipUp (1).svg'
const Navbar = () => {
  return (
    <div className='container'>
      <nav className='nav'>
        <div><img src={l} alt='l'></img></div>
        <div className='nav_item'>Company</div>
        <div  className='nav_item'>Services</div>
        <div  className='nav_item'>Solutions</div>
        <div  className='nav_item'>Industries</div>
        <div  className='nav_item'>Insights</div>
        <div  className='nav_item'>News and Media</div>
        <div  className='nav_btn1'>Request Quote</div>
        <div  className='nav_btn2'>Join Now</div>
      </nav>
    </div>
  )
}

export default Navbar
