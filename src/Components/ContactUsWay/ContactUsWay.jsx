import React from 'react'

import { HiLocationMarker } from "react-icons/hi"
import { BsFillTelephoneFill, BsWhatsapp, BsInstagram } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"


export default function ContactUsWay() {
    return (
        <div className='flex items-center justify-center px-8 lg:px-32 pt-28' >
            <div className='flex flex-col items-center w-full'>
                <h2 className='text-[20px] mx-2 font-semibold dark:text-main-theme-4'>راه های ارتباطی با ما</h2>
                <div className='mt-8 rounded-[20px] px-10  pb-16  flex justify-around  s w-full  bg-main-theme-1 text-main-theme-4 dark:bg-main-theme-3 dark:text-main-theme-1'>
                    <div className='flex flex-col  items-center md:flex-row-reverse md:items-start sm:justify-around w-full '>


                        <div className='mt-14 flex flex-col items-center '>
                            <BsFillTelephoneFill className='text-2xl ' />
                            <h2 className='text-[20px]  mt-2'>تماس با ما </h2>

                            <div className='mt-4'>
                                <p className=' text-[20px]'>09256665988</p>
                                <p className=' text-[20px]'>09256665988</p>
                            </div>
                        </div>

                        <div className='mt-14 flex flex-col items-center '>
                            <HiLocationMarker className='text-2xl ' />

                            <h2 className='text-[20px] mt-2'>آدرس کارخانه </h2>

                            <div className='mt-4'>
                                <p className=' text-[20px] text-center '>
                                    این یک آدرس تستی است
                                </p>

                            </div>
                        </div>

                        <div className='mt-14 flex flex-col items-center '>

                            <FaTelegramPlane className='text-2xl ' />
                            <h2 className='text-[20px]  mt-2  text-center'>شبکه های اجتماعی </h2>

                            <div className='mt-4 flex items-center flex-col'>
                                <p className=' text-[16px] flex justify-between items-center md:mt-2 '>
                                <BsWhatsapp className=' ml-2 ' />

                                    شرکت ما
                                </p>
                                <p className=' text-[16px] flex justify-between items-center md:mt-2 '>
                                    <BsInstagram className=' ml-2 ' />

                                    09256665988
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
