import React from 'react'
import { Link } from 'react-router-dom'
import addcart from "/./src/assets/icons/shopping-cart-white.svg"
import { add } from '../../redux/slices/basketSlice'
import { useDispatch } from "react-redux"


export default function SmallProductBox(props) {

    const dispatch = useDispatch()


    const addHandler = () => {
        dispatch(add({ ...props, qty: 1 }))
    }


    return (
        <div className=' col-span-1 shadow-[0px_0px_20px_rgba(97,97,97,0.25);] flex justify-around items-center  p-[8px] rounded-lg overflow-hidden  bg-white dark:bg-main-theme-1 dark:text-main-theme-4' >
            <Link to='/Products/OrderProducts/2'>
                <img className='w-24 h-24 small:mx-5' src={props.src} alt="product-img" />
            </Link>

            {/* product descs */}
            <div className='  flex flex-col items-center small:mx-5'>
                <div className='w-full px-2 flex items-start justify-between'>
                    <div className='flex flex-col items-start justify-between '>
                        <h4 className='text-[14px] font-semibold'>{props.title}</h4>
                    </div>
                    <div >
                        <p className='text-[8px] mt-1'>لحظاتی پیش</p>

                    </div>
                </div>


                {/* product infos */}
                <div className='flex  items-center justify-around mt-2   '>

                    <div className=' mx-2 w-[46px] h-[46px] flex flex-col justify-evenly items-center'>

                        <p className='text-[8px]  mt-1'>{props.weight} کیلو</p>

                    </div>
                    <div className=' mx-2 w-[46px] h-[46px] flex flex-col justify-evenly items-center'>

                        <p className='text-[8px]  mt-1 '>{props.color}</p>

                    </div>
                </div>


                {/* buy btn */}
                <div className='flex items-center justify-around w-full mt-2'>
                    <h4 className='text-main-green2 font-semibold text-[14px] ml-2'>{props.price.toLocaleString()} تومان</h4>

                    <button onClick={addHandler} className='text-[14px] text-white  flex items-center dark:border-[1px] dark:border-main-theme-4 bg-main-theme-1 py-[6px] px-[20px] rounded-[8px] shadow-[0px_0px_8px_rgba(100,100,100,0.25),_inset_0px_0px_20px_rgba(43,43,43,0.25)]'>
                        <div className='w-[21px] '>
                            <img className='w-full' src={addcart} alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>

    )
}
