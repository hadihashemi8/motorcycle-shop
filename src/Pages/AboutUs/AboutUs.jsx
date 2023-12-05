import React, { useState } from 'react'
import Categories from '../../Components/Categories/Categories'
import Footer from '../../Components/Footer/Footer'
import Properties from '../../Components/Properties/Properties'
import ContactUsWay from '../../Components/ContactUsWay/ContactUsWay'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import man from "/./src/assets/images/Rectangle 14.svg"

// import icon1 from "/./src/assets/icons/frame 15.svg"
// import icon2 from "/./src/assets/icons/frame 16.svg"
// import icon3 from "/./src/assets/icons/frame 17.svg"



export default function AboutUs() {





  return (
    <div >
      <div className='bg-main-theme-4 dark:bg-main-theme-2 sticky top-0 left-0 z-50' >
      <NavBar  />
      </div>




      {/* aboutus header */}
      <div className='w-full  flex items-center justify-center pb-20 md:pb-40 pt-12 md:pt-28 bg-[url("/./src/assets/images/bg.jpg")] bg-cover bg-no-repeat bg-center bg-fixed'>
        <div className='flex flex-col items-center p-2 bg-[#d9DDE6ED]'>
          <Link to="/" className='text-xl'>
            لوگو
          </Link>
          <h1 className='text-white text-2xl md:text-4xl font-semibold mt-4'>شرکت ما</h1>
          <h1 className='text-[#244938] text-2xl md:text-4xl font-semibold mt-2 md:mt-4'>شرکت ما</h1>
          {/* <div className='flex flex-row-reverse mt-4'>
            <img className='mx-2 ' src={icon2} alt="" />
            <img className='mx-2 ' src={icon2} alt="" />
            <img className='mx-2 ' src={icon3} alt="" />
          </div> */}
        </div>
      </div>



      {/* aboutus text */}

      <div className='pt-16 md:pt-28 px-10 lg:px-20 '>
        <div className='flex flex-col items-center md:flex-row md:items-start'>
          <h3 className=' text-2xl font-semibold md:hidden text-main-theme-1 dark:text-main-theme-4'>درباره ما</h3>
          <div className='  flex justify-around  md:w-1/2 mt-4 md:mt-0' >
            <div className='relative lg:w-96 flex '>
              <img className='z-10 w-full' src={man} alt="" />
             
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start md:w-1/2 lg:mt-4'>
            <h3 className=' text-2xl font-semibold hidden md:block dark:text-main-theme-4'>درباره ما</h3>
            <p className='text-sm text-[#929292] mt-14 md:mt-6 text-justify dark:text-main-theme-4'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <Link to="/contactus">
                    <button className='border-[1px] border-main-theme-1 font-semibold py-2 px-12 rounded-lg mt-8 text-main-theme-1 hover:bg-main-theme-1 hover:text-main-theme-4 duration-300 dark:text-main-theme-4 dark:border-main-theme-4 dark:hover:text-main-theme-1 dark:hover:bg-main-theme-4'>تماس با ما</button>
                </Link>
          </div>
        </div>
      </div>




      <Categories title="خدمات ما" />



      <ContactUsWay />


      <Properties />
      <Footer />
    </div>
  )
}
