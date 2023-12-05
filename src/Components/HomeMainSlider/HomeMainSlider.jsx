import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import m1 from "/./src/assets/motors/m-1.png"
import m2 from "/./src/assets/motors/m-2.png"
import m3 from "/./src/assets/motors/m-3.png"
import line from "/./src/assets/polygons/Line 1.svg"
import "swiper/css";
import { Autoplay } from 'swiper';
import { BsFillTelephoneFill, BsInstagram, BsWhatsapp } from 'react-icons/bs';



export default function HomeMainSlider() {
    return (
        <div className='relative flex flex-col  items-center   w-full pt-8'>
            <Swiper dir='rtl' loop={true} autoplay={{ delay: 3000 }} modules={[Autoplay]} className="mySwiper w-full grid ">
                <SwiperSlide className='md:px-10 lg:px-24'>
                    <div className='flex flex-col items-center h-full '>
                        <h1 className='text-2xl text-[#353535] dark:text-main-theme-4 font-semibold md:hidden'>شرکت شما</h1>
                        <div className='flex flex-col items-center justify-between md:flex-row md:justify-between  w-full '>
                            <div className='w-1/2 md:w-1/3 md:mx-5 mt-5 md:mt-0 flex flex-col items-center'>
                                <img className='w-full' src={m1} alt="" />
                                <p className='text-[#353535] text-lg mt-4 text-center dark:text-main-theme-4'>Moto Z Motorcycle Kawasaki Z750</p>
                            </div>

                            <div className='px-6 mt-10 flex flex-col items-center md:items-start md:mx-5'>
                                <h1 className='text-[40px] hidden md:block text-[#353535] font-semibold dark:text-main-theme-4'>شرکت شما</h1>
                                <p className='text-justify text-[14px] text-[#929292] max-w-[450px] md:mt-14 dark:text-main-theme-4'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                                </p>
                            </div>

                            <div className='  flex-col items-center justify-between hidden  lg:flex   '>

                                <div>
                                    <img src={line} alt="" />
                                </div>
                                <div className='flex flex-col items-center my-4'>
                                    <div className="tooltip tooltip-right" data-tip="شرکت شما">
                                    <BsInstagram className='text-xl mt-3 cursor-pointer  dark:text-main-theme-4' />
                                    </div>
                                    <div className="tooltip tooltip-left" data-tip="شرکت شما"> 
                                    <BsFillTelephoneFill className='text-xl mt-3 cursor-pointer dark:text-main-theme-4' />
                                    </div>
                                    <div className="tooltip tooltip-right" data-tip="شرکت شما">
                                    <BsWhatsapp className='text-xl mt-3 cursor-pointer dark:text-main-theme-4' />
                                    </div>
                                </div>
                                <div>
                                    <img src={line} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='md:px-10 lg:px-24'>
                    <div className='flex flex-col items-center h-full '>
                        <h1 className='text-2xl text-[#353535] dark:text-main-theme-4 font-semibold md:hidden'>شرکت شما</h1>
                        <div className='flex flex-col items-center justify-between md:flex-row md:justify-between  w-full '>
                            <div className='w-1/2 md:w-1/3 md:mx-5 mt-5 md:mt-0 flex flex-col items-center'>
                                <img className='w-full' src={m2} alt="" />
                                <p className='text-[#353535] text-lg mt-4 text-center dark:text-main-theme-4'>Moto Z Motorcycle Kawasaki Z750</p>
                            </div>

                            <div className='px-6 mt-10 flex flex-col items-center md:items-start md:mx-5'>
                                <h1 className='text-[40px] hidden md:block text-[#353535] font-semibold dark:text-main-theme-4'>شرکت شما</h1>
                                <p className='text-justify text-[14px] text-[#929292] max-w-[450px] md:mt-14 dark:text-main-theme-4'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                                </p>
                            </div>

                            <div className='  flex-col items-center justify-between hidden  lg:flex   '>

                                <div>
                                    <img src={line} alt="" />
                                </div>
                                <div className='flex flex-col items-center my-4'>
                                    <div className="tooltip tooltip-right" data-tip="شرکت شما">
                                    <BsInstagram className='text-xl mt-3 cursor-pointer  dark:text-main-theme-4' />
                                    </div>
                                    <div className="tooltip tooltip-left" data-tip="شرکت شما"> 
                                    <BsFillTelephoneFill className='text-xl mt-3 cursor-pointer dark:text-main-theme-4' />
                                    </div>
                                    <div className="tooltip tooltip-right" data-tip="شرکت شما">
                                    <BsWhatsapp className='text-xl mt-3 cursor-pointer dark:text-main-theme-4' />
                                    </div>
                                </div>
                                <div>
                                    <img src={line} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='md:px-10 lg:px-24'>
                    <div className='flex flex-col items-center  h-full'>
                        <h1 className='text-2xl text-[#353535] dark:text-main-theme-4 font-semibold md:hidden'>شرکت شما</h1>
                        <div className='flex flex-col items-center justify-between md:flex-row md:justify-between  w-full '>
                            <div className='w-1/2 md:w-1/3 md:mx-5 mt-5 md:mt-0 flex flex-col items-center'>
                                <img className='w-full' src={m3} alt="" />
                                <p className='text-[#353535] text-lg mt-4 text-center dark:text-main-theme-4'>Moto Z Motorcycle Kawasaki Z750</p>
                            </div>

                            <div className='px-6 mt-10 flex flex-col items-center md:items-start md:mx-5'>
                                <h1 className='text-[40px] hidden md:block text-[#353535] font-semibold dark:text-main-theme-4'>شرکت شما</h1>
                                <p className='text-justify text-[14px] text-[#929292] max-w-[450px] md:mt-14 dark:text-main-theme-4'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                                </p>
                            </div>

                            <div className='  flex-col items-center justify-between hidden  lg:flex   '>

                                <div>
                                    <img src={line} alt="" />
                                </div>
                                <div className='flex flex-col items-center my-4'>
                                    <div className="tooltip tooltip-right" data-tip="شرکت شما">
                                    <BsInstagram className='text-xl mt-3 cursor-pointer  dark:text-main-theme-4' />
                                    </div>
                                    <div className="tooltip tooltip-left" data-tip="شرکت شما"> 
                                    <BsFillTelephoneFill className='text-xl mt-3 cursor-pointer dark:text-main-theme-4' />
                                    </div>
                                    <div className="tooltip tooltip-right" data-tip="شرکت شما">
                                    <BsWhatsapp className='text-xl mt-3 cursor-pointer dark:text-main-theme-4' />
                                    </div>
                                </div>
                                <div>
                                    <img src={line} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
