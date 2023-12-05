import React from 'react'
import './QuestionBox.css'

export default function QuestionBox() {
    return (
        <div tabIndex={0} className="collapse collapse-arrow  group  mt-4 rounded-lg border-[1px] border-main-theme-3">
            {/* <input  className="peer"  type="checkbox" /> */}
            {/* <img src="/./src/assets/icons/Vector.svg" alt="" /> */}
            
            <div className="collapse-title pr-3 text-base font-medium group-focus:bg-main-theme-4 group-focus:text-main-theme-1 dark:text-main-theme-4">
            لورم چه کاربردهایی دارد؟
            </div>
            <div className="collapse-content px-4 lg:px-16 group-focus:bg-main-theme-4 group-focus:text-main-theme-1 ">
                <p className='text-xs'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
            </div>
        </div>
    )
}
