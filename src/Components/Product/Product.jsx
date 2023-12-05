import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import shopingcart from "/./src/assets/icons/shopping-cart-white.svg"
import { useDispatch, useSelector } from "react-redux"
import { add } from '../../redux/slices/basketSlice'


export default function Product(props) {

    const dispatch = useDispatch()


    const addHandler = () => {
        dispatch(add({ ...props, qty: 1 }))
    }


    return (
        <>
            
            <div className='h-full   flex flex-col justify-between shadow-[0px_0px_20px_rgba(97,97,97,0.25);]  p-[12px] rounded-[20px] overflow-hidden bg-main-theme-4 dark:bg-main-theme-1' >

                <div className=' flex items-center justify-center p-2'>
                    <div className='w-2/3     '>
                        <Link to={`/OrderProducts/${props.id}`}>
                            <img src={props.src} alt="product-img" />
                        </Link>
                    </div>
                </div>
                {/* product descs */}
                <div className='mt-2   flex flex-col items-center'>
                    <div className='w-full px-2 flex items-start justify-between'>
                        <div className='flex flex-col items-start justify-between dark:text-main-theme-4'>
                            <h4>{props.title}</h4>
                            <h4 className='mt-2  font-semibold'>{props.price} تومان</h4>
                        </div>
                        <div className='dark:text-main-theme-4'>
                            <p className='text-[8px] mt-1'>لحظاتی پیش</p>
                            <p className='text-[8px] mt-1'> 1402/01/08</p>
                        </div>
                    </div>


                    {/* product infos */}
                    <div className='flex  items-center justify-around mt-4  '>

                        <div className='bg-main-theme-4 mx-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[46px] h-[46px] flex   items-center'>
                            <p className='text-[10px] w-full text-center'>{props.weight} کیلو</p>
                        </div>

                        <div className='bg-main-theme-4 mx-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] w-[46px] h-[46px] flex  items-center'>
                            <p className='text-[10px] w-full text-center'>{props.color}</p>
                        </div>

                    </div>


                    {/* buy btn */}
                    <div>

                        <button onClick={addHandler} className='text-[12px] dark:border-[1px] dark:border-main-theme-4 text-white mt-[21px] flex items-center bg-main-theme-1 py-[10px] px-[40px] rounded-[8px] shadow-[0px_0px_8px_rgba(100,100,100,0.25),_inset_0px_0px_20px_rgba(43,43,43,0.25)]'>افزودن به سبد خرید
                            <div className='w-[21px] mr-2'>
                                <img className='w-full' src={shopingcart} alt="" />
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </>

    )
}
