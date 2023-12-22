import React from 'react'
import './Middle.css'
import vd from './images/Video.svg'
import big from './images/big.svg'
const Middle = () => {
  return (
    <div className='middle_container'>
     
      <div className='div1'>
        <p className='p1'>quick & reliable <span>warehousing<br/> and logistics</span>  solution.</p>
        <p className='p2'>ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
        <div className='div2'><button className='j_btn'>Join Now</button> <span><img src={vd} alt='vd'></img></span> <span>Play Demo</span></div>
      </div>
      <div >
        <img src={big} alt='big'></img>
      </div>
    </div>
  )
}

export default Middle
