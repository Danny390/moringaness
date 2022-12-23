import React, {useEffect} from 'react'
import ProductSlider from '../layout/ProductSlider'
import LandingBottom from '../layout/LandingBottom'
import Landing from '../layout/Landing'
const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Landing/>
    <ProductSlider/>
      <LandingBottom/>
      </>
  )
}

export default Products