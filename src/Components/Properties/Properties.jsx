import React from 'react'
import verify from "/./src/assets/icons/verify.svg"
import messages from "/./src/assets/icons/messages-2.svg"
import dollar from "/./src/assets/icons/dollar-circle.svg"
import truck from "/./src/assets/icons/truck-time.svg"
import { BsFillChatDotsFill, BsFillPatchCheckFill, BsFillTruckFrontFill } from 'react-icons/bs'
import { HiCurrencyDollar } from "react-icons/hi"


export default function Properties() {
  return (
    <div className=' pt-36 '>
      <div className=' flex flex-col items-center '>
        <h2 className='text-[25px] font-semibold dark:text-main-theme-4'>برای چی شرکت ما!!!</h2>
        <div className='relative mt-12  grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-14 py-4 rounded-[20px] md:bg-white px-40px md:shadow-[0px_0px_14px_rgba(0,0,0,0.25)]   md:px-20 dark:text-main-theme-4 md:dark:text-main-theme-1' >


          <div className='flex flex-col items-center mx-2'>
            <BsFillPatchCheckFill className='text-2xl' />
            <h3 className='mt-2'>تضمین کیفیت</h3>
          </div>
          <div className='flex flex-col items-center mx-2'>
            <BsFillChatDotsFill className='text-2xl' />
            <h3 className='mt-2'>پشتیبانی 24 ساعته</h3>
          </div>
          <div className='flex flex-col items-center mx-2'>
            <HiCurrencyDollar className='text-2xl'/>
            <h3 className='mt-2'>قیمت مناسب</h3>
          </div>
          <div className='flex flex-col items-center mx-2'>
            <BsFillTruckFrontFill className='text-2xl'/>
            <h3 className='mt-2'>ارسال به موقع</h3>
          </div>


        </div>
      </div>
    </div>
  )
}
