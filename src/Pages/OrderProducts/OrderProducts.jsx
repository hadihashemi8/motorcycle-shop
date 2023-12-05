import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Properties from '../../Components/Properties/Properties'
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts'
import UsersCommentsSection from '../../Components/UsersCommentsSection/UsersCommentsSection'
import ProductInfo from '../../Components/ProductInfoInBacket/ProductInfo'

export default function OrderProducts() {
  return (
    <div>
      <NavBar />
      <ProductInfo />


      {/* desc section */}
      <div className='pt-32 px-8 md:px-24 w-full'>
        <div className='  flex   items-center justify-between  w-full'>
          <h2 className='text-main-green2 text-base md:text-2xl w-[250px] dark:text-main-theme-4 '>توضیحات تکمیلی</h2>
          <div className=' bg-[#B6B6B6] h-[1px]  w-full'></div>

        </div>

        <div className='mt-8'>
          <p className='text-[14px] text-[#929292] text-justify dark:text-main-theme-4'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>


      {/* users comments */}
      <div className='pt-24 px-8 md:px-24  w-full'>

        <UsersCommentsSection />
      </div>

      <SimilarProducts />
      <Properties />
      <Footer />
    </div>
  )
}
