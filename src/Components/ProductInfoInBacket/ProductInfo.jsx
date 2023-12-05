import React, { useEffect, useState } from 'react'
import './ProductInfoInBacket.css'
import like from "/./src/assets/icons/like-gray.svg"
import dislike from "/./src/assets/icons/dislike-gray.svg"
import addtocart from "/./src/assets/icons/shopping-cart-white.svg"
// import add from "/./src/assets/icons/add-circle.svg"
import products from "../../datas/datas"
import { useParams } from 'react-router-dom'
import { BiMinusCircle } from 'react-icons/bi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../redux/slices/basketSlice'


export default function ProductInfo() {

    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.addToCart)
    const [productAvalible, setProductAvalible] = useState(0)
    const params = useParams()
    const [product, setProduct] = useState()



    useEffect(() => {

        const findItem = products.find(item => (
            item.id == params.productId
        ))

        setProduct(findItem)

    }, [params.productId])


    useEffect(() => {
        console.log(product);
        const findItem = cart.find(item => item?.id == product?.id)
        console.log(findItem);
        if (findItem) {
            setProductAvalible(product?.count - findItem?.qty)
        } else {
            setProductAvalible(product?.count)

        }

    }, [product, cart])


    const addHandler = () => {
        dispatch(add({ ...product, qty: 1 }))
    }






    return (
        <div className=' flex flex-col md:flex-row mt-8'>

            <div className='flex items-center justify-center w-full md:w-1/2  px-4 ' >
                <div className='relative  flex '>
                    <img className='z-40 lg:w-[493px]' src={product?.src} alt="" />

                    <div className='absolute top-full right-0 flex flex-row-reverse mt-1 '>
                        <img className='mr-2' src={like} alt="" />
                        <img src={dislike} alt="" />
                    </div>


                    <div className='absolute top-[95%] left-0  mr-2 flex  items-center justify-between p-4'>
                        <label className='radio relative   w-6 h-6 my-1 border-none' >
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-2 h-2 bg-[#656565] absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  ' ></span>
                        </label>
                        <label className='radio relative   w-6 h-6 my-1 border-none'>
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-2 h-2 bg-[#656565] absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  ' ></span>
                        </label>
                        <label className='radio relative   w-6 h-6 my-1 border-none'>
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-2 h-2 bg-[#656565] absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  ' ></span>
                        </label>

                    </div>
                </div>
            </div>

            <div className='dark:text-main-theme-4 flex flex-col items-start px-6 mt-20 md:mt-0 w-full md:w-1/2 '>
                {/* product title */}
                <div>
                    <h1 className='text-2xl font-semibold'>{product?.title}</h1>
                    <p className='text-sm text-[#929292] mt-2 lg:mt-8'>{product?.title}</p>
                    <div className='mt-2'>
                        <p className='text-xs text-[#929292] mt-4'>تاریخ انتشار: 1402/01/18</p>
                        <div className="rating mt-4">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4 h-4" />
                        </div>
                    </div>
                </div>


                {/* product infos */}
                <div className='flex flex-col  md:self-start  items-start justify-around mt-4  '>

                    <div className='  md:mt-2 lg:mt-4  flex  md:items-center justify-evenly items-center'>

                        <p className='text-[16px] mx-1 text-center  mt-1 '>تعداد :</p>
                        <div className='text-[16px]  text-center  mt-1'>{productAvalible == 0 ? (
                            <p className='text-red-600'>موجودی تمام شد</p>
                        ) : (productAvalible)}</div>
                    </div>


                    <div className='  md:mt-2 lg:mt-4 flex  md:items-center justify-evenly items-center'>
                        <p className='text-[16px] mx-1 text-center  mt-1 '>وزن :</p>
                        <p className='text-[16px]  text-center mt-1'>{product?.weight} گرم</p>

                    </div>

                </div>

                {/* product color box */}
                <div className='flex items-center mt-6 lg:mt-2'>
                    <h3 className='text-2xl text-[#7C7C7C] dark:text-main-theme-4'>رنگ </h3>
                    <div className='mr-2 flex items-center justify-between p-4'>
                        <label className='radio relative   w-6 h-6 mx-1 ' >
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-full h-full bg-[#AD9A89] absolute top-0 left-0 rounded-full  ' ></span>
                        </label>
                        <label className='radio relative   w-6 h-6 mx-1 '>
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-full h-full bg-[#1F1F1F] absolute top-0 left-0 rounded-full  ' ></span>
                        </label>
                        <label className='radio relative   w-6 h-6 mx-1 '>
                            <input type="radio" name='colorBox' className='w-4 hidden ' />
                            <span className='w-full h-full bg-[#42A476] absolute top-0 left-0 rounded-full  ' ></span>
                        </label>

                    </div>

                </div>


                <h2 className='text-2xl text-main-green2 font-semibold mt-4 lg:mt-14'>{product?.price.toLocaleString()} تومان</h2>



                {/* buy btn */}
                <div className='flex flex-col items-start small:flex-row small:items-center justify-between mt-4  lg:mt-6'>
                    <button onClick={addHandler} className='text-[14px] text-main-theme-4  mt-2 small:mt-0 flex items-center bg-main-theme-1 py-[6px] px-[20px] rounded-[8px] shadow-[0px_0px_8px_rgba(100,100,100,0.25),_inset_0px_0px_20px_rgba(43,43,43,0.25)] dark:border-[1px]
dark:border-main-theme-4'>افزودن به سبد خرید
                        <div className='w-[21px] mr-2'>
                            <img className='w-full' src={addtocart} alt="" />
                        </div>
                    </button>



                </div>
            </div>

        </div>
    )
}
