import React from 'react'
import UserCommentBox from '../UserCommentBox/UserCommentBox'
import user from "/./src/assets/images/user.svg"



export default function UsersCommentsSection() {
  return (
    <div className='border-[1px] border-[#B6B6B6] rounded-lg overflow-hidden'>

      <div className='flex items-center justify-between px-2 py-[9px] border-b-[1px]'>
        <h2 className='text-sm md:text-base font-semibold dark:text-main-theme-4'>نظرات کاربران</h2>
        <p className='text-xs dark:text-main-theme-4'>25 نظر</p>
      </div>

      <div className='h-[280px] overflow-y-scroll'>
        <UserCommentBox />
        <UserCommentBox />
        <UserCommentBox />
        <UserCommentBox />
        <UserCommentBox />
        <UserCommentBox />
      </div>

      <div className='flex items-center justify-between px-4 md:px-6 py-[10px] bg-[#ECEAEA] dark:bg-main-theme-3'>
        <img className='w-5 h-5 rounded-full' src={user} alt="" />
        <input className='w-full ml-2 bg-transparent p-2 border-none outline-none placeholder:text-xs placeholder:text-[#5A5A5A] placeholder:font-semibold' type="text" placeholder='نظر خود را بنویسید' />
        <button className='bg-main-theme-1 text-main-theme-4 py-[6px] px-[20px] rounded-md text-sm font-semibold'>ارسال</button>
      </div>

    </div>
  
  )
}
