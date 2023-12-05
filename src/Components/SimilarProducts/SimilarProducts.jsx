import React from 'react'
import ProductsSlider from '../ProductsSlider/ProductsSlider'
import products from "../../datas/datas"

export default function SimilarProducts() {
  return (
    <div className=' pt-36 '>
    <div className=' flex flex-col items-center '>
        <h2 className='text-[20px]'>محصولات مشابه</h2>
        <ProductsSlider products={products}/>
    </div>
</div>
  )
}
