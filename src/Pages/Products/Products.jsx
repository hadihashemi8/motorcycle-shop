import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Properties from '../../Components/Properties/Properties'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SmallProductBox from '../../Components/SmallProductBox/SmallProductBox';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../../Components/Product/Product';
import NavBar from '../../Components/NavBar/NavBar';
import products from "../../datas/datas"
import { BsBorderAll } from 'react-icons/bs';
import { FaMotorcycle } from "react-icons/fa"
import { GiFullMotorcycleHelmet } from "react-icons/gi"
import { SiYamahamotorcorporation } from "react-icons/si"
import Pagination from '../../Components/Pagination/Pagination';
import { useDispatch, useSelector } from "react-redux"
import { filterItems } from '../../redux/slices/filterSlice';




export default function Products() {


  const { items } = useSelector(state => state.filterItems)
  const dispatch = useDispatch()
  const [showLgProducts, setShowLgProducts] = useState(false)
  const [filterOption, setFilterOption] = useState('همه محصولات')
  // const [allProducts, setAllproducts] = useState([])
  const [showProducts, setShowProducts] = useState([])


  useEffect(() => {
    
    const checkWindowSize = () => {
      if (window.innerWidth >= 768) {
        setShowLgProducts(true)
      } else {
        setShowLgProducts(false)

      }
    }
    checkWindowSize()

    window.addEventListener('resize', () => {
      checkWindowSize()
    })
  }, [])


  const filterHandler = (e) => {
    const value = e.target.value
    dispatch(filterItems({ title: value }))
    setFilterOption(value)
  }
  
  useEffect(() => {
    dispatch(filterItems({ title: "همه محصولات" }))
  } , [])


  return (
    <div >

      <NavBar />


      {/* categories list*/}
      <div className='flex items-center justify-between px-5 md:px-20  mt-4 0px 0px 4px rgba(0, 0, 0, 0.25)'>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            900: {
              slidesPerView: 6,
              spaceBetween: 0,
            },

          }}
          loop={true}
          // modules={[Navigation]}
          className="mySwiper relative bg-main-theme-1 dark:bg-main-theme-3  p-1  w-full "
        >
          <SwiperSlide >
            <button value={"همه محصولات"} className={`flex duration-300 hover:bg-main-theme-4 hover:text-main-theme-1   items-center justify-around md:flex-col-reverse md:items-center px-1 py-2 rounded-lg md:rounded-none w-[600px] mx-1 md:mx-0 border-[1px] border-main-theme-1 ${filterOption == "همه محصولات" ? "bg-main-theme-4 text-main-theme-1" : "text-main-theme-4"}`} onClick={filterHandler}>
              <p className='text-base md:mt-2 w-24 '>همه محصولات</p>
              <BsBorderAll className='text-xl' />
            </button>
          </SwiperSlide>
          <SwiperSlide >
            <button value={"مسابقه ای"} onClick={filterHandler} className={`flex duration-300 hover:bg-main-theme-4 hover:text-main-theme-1  items-center justify-around  md:flex-col-reverse md:items-center  px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:mx-0 border-[1px] border-main-theme-1 ${filterOption == "مسابقه ای" ? "bg-main-theme-4 text-main-theme-1" : "text-main-theme-4"}`}>
              <p className='text-base md:mt-2 w-24 '>مسابقه ای</p>
              <FaMotorcycle className='text-xl' />
            </button>
          </SwiperSlide>
          <SwiperSlide >
            <button value="شهری" onClick={filterHandler} className={`flex  duration-300 hover:bg-main-theme-4 hover:text-main-theme-1  items-center justify-around  md:flex-col-reverse md:items-center  px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:mx-0 border-[1px] border-main-theme-1 ${filterOption == "شهری" ? "bg-main-theme-4 text-main-theme-1" : "text-main-theme-4"}`}>
              <p className='text-base md:mt-2 w-24 '>شهری</p>
              <GiFullMotorcycleHelmet className='text-xl' />
            </button>
          </SwiperSlide>
          <SwiperSlide >
            <button value="کلاسیک" onClick={filterHandler} className={`flex  duration-300 hover:bg-main-theme-4 hover:text-main-theme-1  items-center justify-around  md:flex-col-reverse md:items-center  px-1 py-2 rounded-lg md:rounded-none cursor-pointer w-[600px]  mx-1  md:mx-0 border-[1px] border-main-theme-1 ${filterOption == "کلاسیک" ? "bg-main-theme-4 text-main-theme-1" : "text-main-theme-4"}`}>
              <p className='text-base md:mt-2 w-24 '>کلاسیک</p>
              <SiYamahamotorcorporation className='text-xl' />
            </button>
          </SwiperSlide>


        </Swiper>
      </div>

      {/* products list */}
      <div className='flex flex-col items-center justify-between'>

        <div className='mt-6 p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:px-10    gap-4 lg:gap-6  w-full  justify-items-center dark:bg-main-theme-3'>
          {
            showLgProducts ? (
              <>
                {showProducts?.map(item => (
                  <Product key={item.id} {...item} />
                ))}
              </>
            ) : (
              <>
                {showProducts.map(item => (
                  <SmallProductBox key={item.id} {...item} />
                ))}

              </>

            )
          }
        </div>

        <Pagination showItemCount={2} defaultPage={1} setItems={setShowProducts} />
      </div>



      <Properties />
      <Footer />
    </div>
  )
}
