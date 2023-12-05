import React from 'react'
import { Link } from 'react-router-dom'
import truck from "/./src/assets/icons/trush-square.svg"
import buildings from "/./src/assets/icons/buildings.svg"
import building from "/./src/assets/icons/building.svg"
import car from "/./src/assets/icons/car.svg"
import box from "/./src/assets/icons/box-green.svg"
import namad from "/./src/assets/images/namad-1.svg"
import namad2 from "/./src/assets/images/aghayepardakht-1 1.svg"
import search from "/./src/assets/icons/search-normal-white.svg"
import instagram from "/./src/assets/icons/instagram.svg"
import phone from "/./src/assets/icons/phon-number.svg"
import whatsapp from "/./src/assets/icons/whatsapp.svg"
import { BsFillTelephoneFill, BsInstagram, BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className='pt-24 '>
            <div className='bg-main-theme-4 dark:bg-main-theme-2 dark:text-main-theme-4 pt-16 lg:pt-10 pb-16 flex flex-col items-center   rounded-t-[80px]'>
                <div className=' flex flex-col md:grid md:grid-cols-6  items-center md:items-start px-6 content-start '>


                    <div className='flex flex-col items-center  mt-8 md:mt-0 md:col-span-2 '>
                        <h2 className='text-2xl font-semibold '>شرکت ما</h2>
                        <p className='text-center text-[12px] lg:w-3/4 lg: lg:text-justify md:text-base mt-4'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                    </div>

                    <div className='flex flex-col items-center mt-20 md:mt-0 md:col-span-2 lg:col-span-1 '>
                        <h2 className='text-[16px] md:text-[20px] font-semibold '>دسته بندی محصولات</h2>
                        <div className='flex justify-around flex-wrap items-center md:flex-col md:items-center  mt-4'>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                               
                                مسابقه ای
                            </p>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                             
                                گازی
                            </p>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                                
                                کروز
                            </p>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                             
                                اسکوتر
                            </p>
                            <p className='w-1/3 md:w-full md:text-[16px] flex flex-row-reverse justify-evenly items-center text-sm mt-4  '>
                                
                                شهری
                            </p>

                        </div>
                    </div>

                    <div className='mt-28 md:mt-0 flex flex-col items-center  md:col-span-2 lg:col-span-1   '>
                        <h2 className='text-[20px] font-semibold '>مجوزها و نمادها</h2>
                        <div className='flex mt-4'>
                            <img className='mx-2' src={namad} alt="" />
                            <img className='mx-2' src={namad2} alt="" />
                        </div>
                    </div>


                    <div className=' mt-8 lg:mt-0 flex-col items-center hidden md:flex md:col-span-3 lg:col-span-2  '>
                        <Link className='text-xl' to="/">
                            لوگو
                        </Link>
                        <ul className='flex mt-4'>
                            <li className='mx-2'>تماس با ما</li>
                            <li className='mx-2'>محصولات</li>
                            <li className='mx-2'>درباره ما</li>
                            <li className='mx-2'>وبلاگ</li>
                        </ul>

                        <div className='mt-6 w-[280px]  flex   rounded-3xl overflow-hidden'>
                            <button className="bg-main-theme-1 p-2">
                                <img className='mx-1  ' src={search} alt="" />
                            </button>
                            <input className='border-none outline-none p-2 w-full' type="text" placeholder='سرچ' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-main-theme-4 flex flex-col items-center md:flex-row md:justify-between p-4 md:px-16'>
                <p className='text-[10px]'>تمامی حقوق این سایت متعلق به شرکت ما است.</p>

                <div className='flex mt-4'>
                    <BsInstagram className='mx-2 text-xl cursor-pointer' />
                    <BsFillTelephoneFill className='mx-2 text-xl cursor-pointer'/>
                    <BsWhatsapp className='mx-2 text-xl cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
