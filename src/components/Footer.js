import React from 'react'

import i1 from './images/ins.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='content_div'>
        <div className='content1'>
            <div><span className='sign'>Sign</span><span className='up'>Up</span></div>
            <p>ShipUp delivers an unparalleled customer service through dedicated 
                customer teams, 
                engaged people working in an agile culture, and a global footprint</p>
        </div>
        <div className='content2'>
            <div>Explore</div>
            <div  className='list'>
            <p>About Us</p>
            <p>Our Warehoused</p>
            <p>Blog</p>
            
            <p>News and Media</p> 
            </div>
            
        </div>
        <div className='content3'>
            <div>Legal</div>
            <div className='list'>
            <p>Terms</p>
            <p>Privacy</p>
            </div>
        </div>
        <div className='content4'>
            <div>Social Media</div>
            <div className='iconss'>
                <span className='cic'><img src={i1} alt='i1'></img></span>
                 <span className='cic'><img src={i1} alt='i1'></img></span>
                 <span className='cic'><img src={i1} alt='i1'></img></span>
                 <span className='cic'><img src={i1} alt='i1'></img></span>
            </div>
        </div>
      </div>
      <div className='divider'></div>
      <div className='l_div'>
      <span className='sign'>Sign</span><span className='up'>Up</span></div>
    </div>
  )
}

export default Footer
