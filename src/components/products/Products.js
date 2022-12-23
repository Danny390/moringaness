import React, {useEffect} from 'react'
import ProductBottom from './ProductBottom'
import ProductsDisplay from './ProductsDisplay'

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className=''>
    <ProductsDisplay/>
     <ProductBottom/>
      </div>
  )
}

export default Products
