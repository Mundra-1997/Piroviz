import React from 'react'
import './Fields.css'
import bg from './images/Bag 2.svg'
import l from './images/Location.svg'
const Fields = () => {
  return (
    <div className='btn_container'>
       <div class="material-textfield">
        
    <input placeholder="Enter Location" type="text" />
    <label> <img src={l} alt='l'></img>Origin</label>
  </div>  
  <div class="material-textfield">
    <input placeholder="Enter Location" type="text" />
    <label> <img src={l} alt='l'></img>Destination</label>
  </div>  
  <div class="material-textfield">
    <input placeholder="Weight KG" type="text" />
    <label> <img src={bg} alt='bg'></img>Weight</label>
  </div>  
  <button className='chk'>Check Price</button>
    </div>
  )
}

export default Fields
