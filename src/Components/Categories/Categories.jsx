import React, { useEffect } from 'react'
import CategoryBox from '../CategoryBox/CategoryBox'
import line from "/./src/assets/icons/Line 6.svg"




const categoriesItem = [
    { id: 1,  title: "مسابقه ای" },
    { id: 2,  title: "گازی" },
    { id: 3,  title: "کروز" },
    { id: 4,  title: "اسکوتر" },
    { id: 5,  title: "شهری" },
]

export default function Categories({ title }) {

    

    return (
        <div className='pt-20 md:pt-36 flex items-center justify-center '>
            <div className='flex flex-col items-center  '>

                <div className='flex justify-around w-full '>
                    <img className='hidden lg:block ' src={line} alt="" />
                    <h2 className='text-[20px] mx-2 font-semibold dark:text-main-theme-4'>{title}</h2>
                    <img className='hidden lg:block ' src={line} alt="" />
                </div>

                {/* categories box container */}
                <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-12  w-full  justify-items-center'>
                    {categoriesItem.map(item => (
                        <CategoryBox key={item.id} {...item} />
                    ))}

                </div>
            </div>

        </div>
    )
}
