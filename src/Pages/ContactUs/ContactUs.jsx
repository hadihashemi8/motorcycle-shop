import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import { HiLocationMarker } from "react-icons/hi"
import { BsFillTelephoneFill, BsWhatsapp, BsInstagram } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"




export default function ContactUs() {
    return (
        <div >
           <div className='bg-main-theme-4 dark:bg-main-theme-2 sticky top-0 left-0 z-50' >
      <NavBar  />
      </div>

            <div className='w-full h-full   flex items-center justify-center pb-20  pt-12 md:pt-20 bg-[url("/./src/assets/images/bg.jpg")]  bg-cover bg-no-repeat bg-center'>
                <div className='flex flex-col items-center bg-[#d9DDE6ED] p-2 text-main-theme-1 '>
                    <div className='flex flex-col items-center  lg:mr-6'>
                        <Link className='text-xl' to="/">لوگو</Link>
                        <h1 className='text-white text-2xl md:text-[40px] font-semibold mt-4'>شرکت ما </h1>
                        <h1 className=' text-2xl md:text-[40px] font-semibold mt-2 md:mt-4'>شرکت ما</h1>
                    </div>

                    <div className='flex flex-col flex-wrap   mt-10  items-center md:flex-row-reverse md:items-start sm:justify-around w-full '>


                        <div className=' flex flex-col items-center mt-8  md:mx-14 '>
                            <BsFillTelephoneFill className="text-2xl" />
                            <h2 className='text-[20px]  mt-2'>تماس با ما </h2>

                            <div className='mt-8'>
                                <p className=' text-[20px]'>09256665988</p>
                                <p className=' text-[20px]'>09256665988</p>
                            </div>
                        </div>

                        <div className=' flex flex-col items-center mt-8  md:mx-14  '>
                            <HiLocationMarker className="text-4xl" />
                            <h2 className='text-[20px]  mt-2'>آدرس کارخانه </h2>

                            <div className='mt-8  '>
                                <p className=' text-[20px] text-center w-2/3 mx-auto '>این یک آدرس تستی است</p>

                            </div>
                        </div>

                        <div className=' flex flex-col items-center mt-8  md:mx-14 '>
                            <FaTelegramPlane className="text-3xl" />
                            <h2 className='text-[20px]  mt-2  text-center'>شبکه های اجتماعی </h2>

                            <div className='mt-8 flex items-center flex-col'>
                                <p className=' text-[16px] flex justify-between items-center md:mt-2 '>
                                    <BsWhatsapp className="ml-2 text-main-theme-1 text-xl" />
                                    شرکت ما
                                </p>
                                <p className=' text-[16px] flex justify-between items-center md:mt-2 '>
                                    <BsInstagram className="ml-2 text-main-theme-1 text-xl" />
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
