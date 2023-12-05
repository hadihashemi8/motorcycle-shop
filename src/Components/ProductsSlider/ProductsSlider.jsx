import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Product from '../Product/Product';
import SliderNavBtn from '../SliderNavBtn/SliderNavBtn';
import './ProductsSlider.css'
import { Autoplay } from 'swiper';




export default function ProductsSlider({ products }) {
    return (
        <div className='relative mt-6 w-full flex flex-col items-center  xl:px-20 px-7 sm:px-0 dark:bg-main-theme-3 bg-main-theme-1' >
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1260: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },

                }}
                loop={true}
                autoplay={{ delay: 4000 }}
                modules={[Autoplay]}
                className="mySwiper relative  small:w-3/4 sm:w-full p-4 grid  md:p-8  "
            >
                {products?.map(item => (
                    <SwiperSlide key={item.id}  >
                        <Product {...item} />
                    </SwiperSlide>
                )
                )}

                <SliderNavBtn />
            </Swiper>
        </div>
    )
}
