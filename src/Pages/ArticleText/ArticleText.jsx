import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Articles from '../../Components/Articles/Articles'
import Properties from '../../Components/Properties/Properties'
import UsersCommentsSection from '../../Components/UsersCommentsSection/UsersCommentsSection'
import { BiDislike, BiLike } from 'react-icons/bi'

import ArticleSmallBox from '../../Components/ArticleSmallBox/ArticleSmallBox'
import blogs from '../../datas/blogs'
import { useParams } from 'react-router-dom'



export default function ArticleText() {

    const params = useParams()
    const [blog, setBlog] = useState(null)


    useEffect(() => {
        const findItem = blogs.find(item => item.id == params.ArticleId)
        setBlog(findItem)
    }, [params])



    return (
        <div >

            <NavBar />

            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 border-b-[1px] border-main-theme-3 p-4 pb-14'>

                <div className=' lg:px-10 col-span-1 lg:col-span-2 flex flex-col items-center   '>
                    <h1 className='text-2xl text-[#2B2B2B] dark:text-main-theme-4 font-semibold self-start'>موتور چیست</h1>

                    <div className='flex items-center justify-center w-full    mt-4' >
                        <div className='relative  flex justify-center items-center '>
                            <img className='z-40 w-2/3  ' src={blog?.src} alt="" />

                            <div className='absolute top-full right-0 flex flex-col mt-1 '>
                                <div className='flex items-center'>
                                    <BiDislike className='text-lg mx-1 cursor-pointer' />
                                    <BiLike className='text-lg mx-1 cursor-pointer' />
                                </div>
                                <p className='text-[10px] text-[#929292] mt-2 dark:text-main-theme-4'>تاریخ انتشار: 1402/01/18</p>
                            </div>
                        </div>
                    </div>



                    <div className='px-4'>
                        <p className='mt-24 text-sm text-[#626262] text-justify dark:text-main-theme-4'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>

                    <div className='relative  flex justify-center items-center  mt-4'>
                        <img className='z-40 w-2/3  ' src={blog?.src} alt="" />
                    </div>

                    <div className='px-4'>
                        <p className='mt-24 text-sm text-[#626262] text-justify dark:text-main-theme-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                </div>

                <div className='  hidden lg:flex relative'>
                    <div className='sticky top-0 left-0 h-96 w-full bg-main-theme-3 p-4  overflow-y-scroll rounded-lg'>
                        {blogs.map(item => (
                            <ArticleSmallBox key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>



            <div className='md:w-2/3 px-6 lg:px-8 mt-20'>
                <UsersCommentsSection />
            </div>
            <div className='lg:hidden'>
                <Articles title="مقالات مشابه" />
            </div>

            <Properties />
            <Footer />
        </div>
    )
}
