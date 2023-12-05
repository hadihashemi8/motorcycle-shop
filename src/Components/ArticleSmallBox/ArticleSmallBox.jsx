import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'




export default function ArticleSmallBox(props) {
  return (
    <div className='col-span-1  shadow-[0px_0px_20px_rgba(97,97,97,0.25);] flex justify-between items-center  p-[8px] rounded-lg overflow-hidden  bg-white mt-2 dark:bg-main-theme-1 dark:text-main-theme-4' >
           
                <img className='w-24 h-24 small:mx-5 mx-2' src={props.src} alt="product-img" />

            {/* product descs */}
            <div className='  flex flex-col items-start small:mx-5 flex-1 '>
                <div className='w-full px-2 flex items-start justify-between'>
                    <div className='flex flex-col items-start justify-between '>
                        <h4 className='text-[14px] font-semibold'>مقاله1</h4>
                    </div>
                    <div >
                        <p className='text-[8px] mt-1'>لحظاتی پیش</p>

                    </div>
                </div>


                {/* product infos */}
                <div className='flex  items-center justify-around mt-2   '>

                   <p className='text-[9px] text-justify'>
                   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                   </p>


                </div>


                {/* buy btn */}
                <div className='flex items-center justify-around self-end mt-2 '>
                <Link to={`/Article/${props.id}`}>
                        <button className="group  flex flex-row-reverse items-center justify-evenly py-[6px] px-[15px] border-[1px] border-main-theme-4 rounded-[8px] text-main-theme-2 text-[10px] font-semibold w-[100px] hover:text-main-theme-1 hover:border-main-theme-1 duration-300 dark:text-main-theme-4 dark:hover:border-main-theme-3">
                           <BsArrowLeft className='group-hover:mr-2 duration-300'/>
                            ادامه مطلب</button>
                    </Link>
                </div>
            </div>
        </div>
  )
}
