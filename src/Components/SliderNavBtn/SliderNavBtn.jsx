import React from 'react'
import { useSwiper } from 'swiper/react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"



export default function SliderNavBtn() {

    const swiper = useSwiper()


    return (
        <>
            <button className=' absolute top-1/2 -right-2  text-3xl text-main-green2 z-50  ' onClick={() => swiper.slideNext()}><IoIosArrowForward /></button>
            <button className=' absolute top-1/2 -left-2 text-3xl text-main-green2 z-50  ' onClick={() => swiper.slidePrev()}><IoIosArrowBack /></button>
        </>

    )
}
