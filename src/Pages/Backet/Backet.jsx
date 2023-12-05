import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import FinalConfirmationForm from '../../Components/FinalConfirmationForm/FinalConfirmationForm'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import ProductBoxInBackete from '../../Components/ProductBoxInBackete/ProductBoxInBackete'
import Properties from '../../Components/Properties/Properties'
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts'
import { AiOutlineUnorderedList } from "react-icons/ai"
import { BsCurrencyDollar, BsFillTruckFrontFill } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux"
import { offerActive } from '../../redux/slices/basketSlice'
import Swal from 'sweetalert2'




export default function Backet() {

  const { cart, total, lastCost, offerPrecent } = useSelector(state => state.addToCart)
  const dispatch = useDispatch()
  const [showFinalConfirmationForm, setshowFinalConfirmationForm] = useState(false)
  const [transportCost, setTransportCost] = useState(77000)
  const [offerCodes, setOfferCodes] = useState([])
  const [offerCode, setOfferCode] = useState('')
  const [copyCode, setCopyCode] = useState(false)




  const backBtnHandler = () => {
    setshowFinalConfirmationForm(false)
  }


  const offerHandler = () => {

    if (cart.length > 0) {
      const findCode = offerCodes.findIndex(item => item.code == offerCode)
      if (findCode !== -1) {
        if (!offerCodes[findCode].expired) {
          if (!offerPrecent) {
            offerCodes[findCode].expired = true
            localStorage.setItem('offerCodes', JSON.stringify(offerCodes))
            dispatch(offerActive({ precent: offerCodes[findCode].precent }))
          } else {
            Swal.fire({
              icon: "warning",
              text: "فقط یک کد تخفیف  برای هر خرید میتوانید استفاده کنید",
              confirmButtonColor: "#27374D",
              confirmButtonText: "تایید",
            })

          }
        } else {
          Swal.fire({
            icon: "error",
            text: "این کد تخفیف استفاده شده است",
            confirmButtonColor: "#27374D",
            confirmButtonText: "تایید",
          })

        }
      } else {
        Swal.fire({
          icon: "error",
          text: "کد تخفیف اشتباه است",
          confirmButtonColor: "#27374D",
          confirmButtonText: "تایید",
        })

      }

      setOfferCode('')
    } else {
      Swal.fire({
        icon: "warning",
        text: "سبد خرید خالی است",
        confirmButtonColor: "#27374D",
        confirmButtonText: "تایید",
      })
    }

  }


  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("offerCodes"))

    if (localData) {
      setOfferCodes(localData)
    } else {
      setOfferCodes([
        { id: 1, code: 11111, precent: 50, expired: false },
        { id: 2, code: 22222, precent: 20, expired: false },
        { id: 3, code: 33333, precent: 30, expired: false },
      ])
    }
  }, [])


  return (
    <div>
      <NavBar />
      {copyCode && (

        <div className="toast z-50">
          <div className="alert alert-success bg-main-theme-1 dark:bg-main-theme-3">
            <span className='text-main-theme-4 dark:text-main-theme-1'>کد تخفیف کپی شد</span>
          </div>
        </div>
      )}


      {/* Backet details */}
      <div className=' flex flex-col md:flex-row md:justify-evenly px-6 lg:px-10 ' >


        {/* products list  */}
        <div className='flex flex-col items-center  relative  md:w-1/2 md:mx-2  '>
          {cart?.length > 0 ? (cart?.map(item => (
            <ProductBoxInBackete key={item.id} {...item} />
          ))) : (
            <div className='flex flex-col items-center justify-between  justify-items-center mt-32'>
              <p className='text-2xl dark:text-main-theme-4'>سبد خرید شما خالی است</p>
              <Link to="/products">
                <button className='bg-main-theme-1   text-base text-white py-2 px-10 mt-8  rounded-lg dark:bg-main-theme-4 dark:text-main-theme-1'>ادامه خرید</button>
              </Link>
            </div>
          )
          }
        </div>

        {/* invoice */}
        <div className='md:w-1/2 lg:pr-14  mt-20 md:mt-0 md:pt-4 '>
          <div className=' max-w-fit md:max-w-full mx-auto md:shadow-[0px_0px_20px_rgba(152,152,152,0.25)]  md:rounded-[20px]  md:mx-2 dark:md:border-[1px] dark:md:border-main-theme-4 '>

            {showFinalConfirmationForm ? (
              <FinalConfirmationForm goback={backBtnHandler} />
            ) : (
              <div className=' 
          md:p-4 lg:px-10 dark:text-main-theme-4 '>
                <div >
                  <div className=' shadow-[0px_0px_8px_rgba(174,174,174,0.25)] rounded-lg flex items-center justify-between p-2 mt-4 ' >
                    <div className='flex items-center justify-between'>
                      <AiOutlineUnorderedList className='text-2xl' />
                      <p className='text-base text-[#616161] mr-2 dark:text-main-theme-4'>تعداد کالا</p>
                    </div>
                    <p>{cart?.length > 0 ? (
                      cart?.reduce((acc, cur) => acc + cur.qty, 0)
                    ) : 0} عدد</p>
                  </div>

                  <div className='shadow-[0px_0px_8px_rgba(174,174,174,0.25)] rounded-lg flex items-center justify-between p-2 mt-4' >
                    <div className='flex items-center justify-between'>
                      <BsCurrencyDollar className='text-2xl' />
                      <p className='text-base text-[#616161] mr-2 dark:text-main-theme-4'>قیمت کالاها</p>
                    </div>
                    <p>{total?.toLocaleString()} تومان</p>
                  </div>

                  <div className='shadow-[0px_0px_8px_rgba(174,174,174,0.25)] rounded-lg flex items-center justify-between p-2 mt-4' >
                    <div className='flex items-center justify-between'>
                      <BsFillTruckFrontFill className='text-2xl' />
                      <p className='text-base text-[#616161] mr-2 dark:text-main-theme-4'>هزینه ارسال</p>
                    </div>
                    <p>{transportCost.toLocaleString()} هزاتومان</p>
                  </div>
                  <p className='text-[10px] text-[#616161] mt-2 dark:text-main-theme-4'>سفارش های تعداد بالا هزینه ارسال بر اساس آدرس محاسبه میشود</p>

                </div>


                <div className='mt-10 flex flex-col items-center  px-6'>
                  <div className='flex flex-col items-center'>
                    <div className='flex   rounded-[9px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.25),inset_0px_0px_8px_rgba(0,0,0,0.25)]'>
                      <input value={offerCode} onChange={e => setOfferCode(e.target.value)} className=' p-2 px-3 border-none outline-none w-full placeholder:text-xs placeholder:text-[#A6A6A6] dark:text-main-theme-1' placeholder='کد تخفیف' />
                      <button onClick={offerHandler} className='py-2 px-5 bg-main-theme-1 text-main-theme-4 text-sm dark:bg-main-theme-2'>تایید</button>
                    </div>
                    <div className='mt-2'>
                      {offerCodes.map(item => (
                        <button key={item.id} onClick={() => {
                          setCopyCode(true)
                          setTimeout(() => {
                            setCopyCode(false)
                          }, 1000);
                          navigator.clipboard.writeText(item.code)
                        }} className={`px-2 py-1 text-xs rounded-lg  text-white mx-1  ${item.expired ? "bg-red-600" : "bg-main-theme-1 dark:bg-main-theme-3"}`}>
                          {item.code} - {item.precent}%
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col small:flex-row items-center justify-between mt-12'>

                    <div className='flex  items-center justify-between '>
                      <h2 className=' small:text-[20px]'>هزینه کل</h2>
                      <div className='flex flex-col'>
                        <p className={` mr-4 font-semibold duration-300 ${offerPrecent > 0 ? "text-[sm] line-through block" : "small:text-[20px] hidden"}`}>{total ?
                          (total + transportCost).toLocaleString() : 0
                        } تومان</p>
                        <p className={`small:text-[20px] mr-4 font-semibold `}>{
                          !total ? 0 : !offerPrecent ? (total + transportCost).toLocaleString() : (lastCost + transportCost).toLocaleString()
                        } تومان</p>
                      </div>
                    </div>
                    <span className={`w-8 h-8 p-1 bg-red-600 text-white text-xs items-center justify-center rounded-full mt-4 small:mt-0 ${offerPrecent > 0 ? "flex" : "hidden"}`}>{offerPrecent}%</span>
                  </div>

                  <Link disabled={cart?.length == 0} to="/FinalConfirmation">
                    <button  className='bg-main-theme-1 dark:bg-main-theme-4 dark:text-main-theme-1 md:hidden w-full text-sm small:text-base text-white py-4 px-16 mt-12  rounded-lg'>ادامه و پرداخت</button>
                  </Link>

                  <button disabled={cart?.length == 0} onClick={() => setshowFinalConfirmationForm(true)} className={`bg-main-theme-1 dark:bg-main-theme-4 dark:text-main-theme-1 w-full hidden md:block text-base text-white py-4 px-16 mt-12  rounded-lg ${cart.length == 0 ? "opacity-50" : "opacity-100"}`}>ادامه و پرداخت</button>

                </div>
              </div>
            )}
          </div>
        </div>


      </div>

      <SimilarProducts />
      <Properties />
      <Footer />
    </div>
  )
}
