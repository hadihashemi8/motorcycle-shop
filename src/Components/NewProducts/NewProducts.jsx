import React from 'react'
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import products from "../../datas/datas"
import { Link } from 'react-router-dom';





export default function NewProducts() {
    return (
        <div className=' pt-32 '>
            <div className=' flex flex-col items-center '>
                <h2 className='text-[22px] lg:text-[25px] dark:text-main-theme-4'>جدیدترین محصولات</h2>
                <ProductsSlider products={products} />
                <Link to="/products">
                    <button className='border-[1px] border-main-theme-1 font-semibold py-2 px-12 rounded-lg mt-4 text-main-theme-1 hover:bg-main-theme-1 hover:text-main-theme-4 duration-300 dark:text-main-theme-4 dark:border-main-theme-4 dark:hover:bg-main-theme-4 dark:hover:text-main-theme-1'>مشاهده همه</button>
                </Link>
            </div>
        </div>
    )
}
