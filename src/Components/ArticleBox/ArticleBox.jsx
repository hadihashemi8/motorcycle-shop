import React from 'react'
import { Link } from 'react-router-dom'
import m2 from "/./src/assets/motors/m-2.png"
import { BiDislike, BiLike } from "react-icons/bi"
import arrow from "/./src/assets/icons/arrow-left.svg"
import { BsArrowLeft } from 'react-icons/bs'

export default function ArticleBox(props) {
    return (
        <div className="  h-full card bg-main-theme-4  flex flex-col items-center justify-between shadow-xl dark:bg-main-theme-1 dark:text-main-theme-4">
            <figure className="p-4 w-2/3">
                <img src={props.src} alt="عکس" className="rounded-xl w-full" />
            </figure>
            <div className="p-4 pt-6   items-center text-center ">
                <div className='flex flex-col items-start '>
                    <p className='text-[10px]'>تاریخ انتشار: 1402/01/18</p>
                    <h2 className="card-title text-[14px]">موتور چیست؟</h2>
                    <p className='text-[10px] text-justify'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                    </p>
                </div>
                <div className="card-actions mt-4 flex items-center justify-between w-full ">
                    <div className='flex items-center'>
                        <BiDislike className='text-lg mx-1 cursor-pointer'/>
                        <BiLike  className='text-lg mx-1 cursor-pointer'/>
                    </div>
                    <Link to={`/Article/${props.id}`}>
                        <button className="group flex flex-row-reverse items-center justify-evenly py-[6px] px-[20px] border-[1px] border-main-theme-3 rounded-[8px] text-main-theme-2 text-[12px] font-semibold w-[135px] hover:text-main-theme-1 hover:border-main-theme-1 duration-300 dark:text-main-theme-4 dark:hover:border-main-theme-3">
                           <BsArrowLeft className='group-hover:mr-2 duration-300'/>
                            ادامه مطلب</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
