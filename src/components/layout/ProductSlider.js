import React from 'react'
import First from '../../img/Plant1.jpg'
import Second from '../../img/Plant2.jpg'
import Third from '../../img/Plant3.jpg'
import Fourth from '../../img/Plant4.jpg'

const ProductSlider = () => {
  return (
    <div className='mycontainer'>
        <h2 className='text-center'>Locally Grown and resourced</h2>
        <br/>
        <div class="row">
  <div class="column">
    <img src={First} alt="1"/>
    <img src={Second} alt="2"/>
  </div>
  <div class="column">
  <img src={Third} alt="3"/>
    <img src={Fourth} alt="4"/>
  </div>
  </div>
    </div>
    
  )
}

export default ProductSlider
