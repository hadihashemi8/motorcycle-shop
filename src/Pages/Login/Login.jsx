import React, { useState } from 'react'
import profile from "/./src/assets/icons/profile-circle-white.svg"
import sms from "/./src/assets/icons/sms.svg"
import phone from "/./src/assets/icons/Vector-white.svg"


export default function Login() {

  const [showConfirmNumber, setShowConfirmNumber] = useState(false)


  return (
    <div className='bg-[url("/./src/assets/images/bg.jpg")] flex items-center justify-center bg-cover  bg-no-repeat   bg-right md:bg-center w-full h-[100vh]'>
      <div className='bg-[rgba(40,_40,_40,_0.08)] shadow-[0px_0px_20px_rgba(199,199,199,0.25)] backdrop-blur-[20px] flex items-start p-4 md:px-14 justify-center rounded-[20px]  '>
        <div className='flex flex-col items-center justify-between'>

          <img className='w-[50px] mt-4' src={profile} alt="" />


          <h1 className='text-2xl mt-8 text-white font-semibold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>ورود و ثبت نام</h1>


          <div className='mt-16 flex flex-col items-center justify-between '>


            {showConfirmNumber ? (
              <div className='flex border-[1px] border-white rounded-lg py-1 px-5'>
                <img className='ml-2 w-5' src={sms} alt="" />
                <input className='py-2 text-white  bg-transparent border-none outline-none placeholder:text-white placeholder:text-xs' type="text" placeholder='کد تایید' />
              </div>

            ) : (
              <div className='flex border-[1px] border-white rounded-lg py-1 px-5'>
                <img className='ml-2 w-5' src={phone} alt="" />
                <input className='py-2 text-white  bg-transparent border-none outline-none placeholder:text-white placeholder:text-xs' type="text" placeholder='شماره همراه' />
              </div>
            )}

            <button onClick={() => setShowConfirmNumber(true)} className='w-full text-main-theme-4 bg-main-theme-1 mt-8 py-3 px-24 rounded-lg drop-shadow-[0px_2px_8px_rgba(0,0,0,0.25)]'>ارسال</button>
            {showConfirmNumber && (

              <p onClick={() => setShowConfirmNumber(false)} className='cursor-pointer text-white mt-2 text-[10px]'>تغییر شماره همراه ؟ 09775562255</p>
            )}
          </div>


          <p className='text-base text-white mt-24'>شرکت ما</p>

        </div>
      </div>
    </div>
  )
}
