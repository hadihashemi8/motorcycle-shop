import React from 'react'
import ArticleBox from '../ArticleBox/ArticleBox'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import blogs from '../../datas/blogs';


export default function Articles({ title }) {
    return (
        <div className=' pt-32 '>
            <div className=' flex flex-col items-center '>
                <h2 className='text-[22px] lg:text-[25px] dark:text-main-theme-4'>{title}</h2>
                <div className='relative mt-2 w-full flex flex-col items-center px-8 dark:bg-main-theme-3 lg:px-20' >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1160: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },

                        }}
                        loop={true}
                        // modules={[Navigation]}
                        className="mySwiper relative p-4  py-8 grid  w-full"
                    >
                        {blogs.map(item => (
                            <SwiperSlide  key={item.id}>
                                <ArticleBox {...item}/>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
                    <Link to="/Articles">
                    <button className='border-[1px] border-main-theme-1 font-semibold py-2 px-12 rounded-lg mt-4 text-main-theme-1 hover:bg-main-theme-1 hover:text-main-theme-4 duration-300 dark:text-main-theme-4 dark:border-main-theme-4 dark:hover:bg-main-theme-4 dark:hover:text-main-theme-1'>مشاهده همه</button>
                </Link>
            </div>
        </div>
    )
}
