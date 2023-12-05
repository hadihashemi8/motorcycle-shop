import React from 'react'
import user from "/./src/assets/images/user.svg"
import { AiOutlineHeart } from "react-icons/ai"


export default function UserCommentBox() {
    return (
        <div className='p-4 pr-8 '>
            <div className='flex items-center'>
                <img className='w-5 h-5 rounded-full' src={user} alt="" />
                <h2 className='text-sm text-[#353535] font-semibold mr-2 dark:text-main-theme-4'>هادی هاشمی</h2>
            </div>
            <div className='pr-4 mt-2 flex items-start justify-between'>
                <div>
                    <p className='text-[10px] text-[#929292] dark:text-main-theme-4'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    </p>
                </div>
                <div className='flex items-center flex-row-reverse   justify-evenly  w-32'>
                    <div>
                        <AiOutlineHeart className='dark:text-main-theme-4 cursor-pointer'/>
                    </div>
                    <p className='text-sm text-[#5A5A5A] ml-2 dark:text-main-theme-4' >پاسخ</p>
                </div>
            </div>
        </div>
    )
}
