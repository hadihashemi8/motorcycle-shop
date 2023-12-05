import React from 'react'

export default function CategoryBox({  title}) {
  return (
    <div className='bg-white dark:bg-main-theme-4 hover:shadow-[0px_0px_10px_14px_rgba(167,167,167,0.25);] duration-300 flex flex-row-reverse items-center justify-around md:flex-col md:justify-center w-[130px] md:w-[140px] md:h-[140px]    shadow-[0px_0px_20px_rgba(167,167,167,0.25);] py-[8px] px-[20px] rounded-[8px] lg:rounded-[20px]'>
        
            <h3 className='text-sm md:text-lg  md:mt-1 text-[#7C7C7C] dark:text-main-theme-1'>{title}</h3>
    </div>
  )
}
