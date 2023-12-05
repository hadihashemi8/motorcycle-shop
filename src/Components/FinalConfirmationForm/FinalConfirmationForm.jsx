import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { GiEarthAmerica } from "react-icons/gi"
import { MdOutlineGpsFixed } from "react-icons/md"
import { CiLocationOn } from "react-icons/ci"
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { buy } from '../../redux/slices/basketSlice'


export default function FinalConfirmationForm({ goback }) {
    const navigate = useNavigate()
    const { lastCost, total } = useSelector(state => state.addToCart)
    const dispatch = useDispatch()
    const [statesList, seStatesList] = useState([])
    const [citiesList, setCitiesList] = useState([])
    const [transportCost, setTransportCost] = useState(77000)



    useEffect(() => {
        fetch('https://iran-locations-api.vercel.app/api/v1/states')
            .then(res => res.json())
            .then(states => {
                seStatesList(states)
            })
    }, [])


    const buyHandler = () => {
        Swal.fire({
            icon: "success",
            text: "خرید با موفقیت انجام شد",
            confirmButtonColor: "#27374D",
            confirmButtonText: "تایید",
        }).then(res => {
            if (res.isConfirmed || res.dismiss) {
                dispatch(buy())
                navigate('/')
            }
        })
    }

    const findCities = (e) => {
        let stateName = e.target.value
        if (stateName !== 'استان') {
            fetch(`https://iran-locations-api.vercel.app/api/v1/cities?state=${stateName}`)
                .then(res => res.json())
                .then(cities => {
                    setCitiesList(cities.cities)

                })
        } else {
            setCitiesList([])
        }

    }



    return (
        <>

            <div className=' w-full    flex flex-col items-center mt-8 md:mt-0    md:rounded-[20px]   
md:p-4 lg:px-10'>
                <button onClick={() => goback()} className=' items-center self-end hidden md:flex flex-row-reverse dark:text-main-theme-4  '>
                    <HiOutlineArrowNarrowLeft className='mr-2' />
                    بازگشت
                </button>
                <Link to="/Backet" className="self-end ml-8 flex md:hidden">
                    <button className='flex items-center flex-row-reverse dark:text-main-theme-4 '>
                        <HiOutlineArrowNarrowLeft className='mr-2' />
                        بازگشت
                    </button>
                </Link>
                <div className='dark:text-main-theme-4 flex flex-col items-center w-full px-8 sm:px-14 md:px-0 mt-5'>

                    <div className='flex items-center justify-between py-[14px] px-5  rounded-lg border-[1px] border-main-theme-1  shadow-[0px_0px_8px_rgba(134,134,134,0.25)]'>
                        <h2 className='text-xs small:text-[20px] text-[#616161] dark:text-main-theme-4'>هزینه کل</h2>
                        <p className='text-xs small:text-[20px] mr-4 font-semibold'>{lastCost ? (lastCost + transportCost).toLocaleString() : total ? (total + transportCost).toLocaleString() : 0} تومان</p>
                    </div>

                    <div className='w-full mt-6 flex flex-col items-center'>
                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)] mt-4  rounded-lg flex items-center justify-between py-[5px] px-[20px]'   >
                            <AiOutlineUser className='text-2xl' />
                            <input className='text-base text-[#616161] dark:text-main-theme-4 mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB] placeholder:dark:text-main-theme-4' placeholder='نام ,نام خانوادگی' />
                        </div>

                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)]  rounded-lg flex items-center justify-between  mt-4 py-[5px] px-[20px]'   >
                            <BsTelephone className='text-2xl' />
                            <input className='text-base text-[#616161] dark:text-main-theme-4 mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB] placeholder:dark:text-main-theme-4' placeholder='شماره تلفن' />
                        </div>

                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)]  rounded-lg flex items-center justify-between  mt-4 py-[5px] px-[20px]'   >
                            <GiEarthAmerica className='text-2xl' />

                            <select onChange={findCities} className='text-base text-[#616161] dark:text-main-theme-4 mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB] placeholder:dark:text-main-theme-4' placeholder='استان' >
                                <option value="استان" className='text-[#ABABAB]' >استان</option>
                                {statesList.map(state => {
                                    return <option key={state.id} value={state.name} >{state.name}</option>
                                })}
                            </select>
                        </div>

                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)]  rounded-lg flex items-center justify-between  mt-4 py-[5px] px-[20px]'   >
                            <MdOutlineGpsFixed className='text-2xl' />

                            <select className='text-base text-[#616161] dark:text-main-theme-4 mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB] placeholder:dark:text-main-theme-4' placeholder='استان' >
                                {citiesList.length == 0 && (
                                    <option value="شهر" className='text-[#ABABAB]' >شهر</option>
                                )}
                                {citiesList.length && citiesList.map(city => {
                                    return <option value={city.name} >{city.name}</option>
                                })}
                            </select>
                        </div>

                        <div className='w-full shadow-[0px_0px_8px_rgba(174,174,174,0.25)]  rounded-lg flex items-start justify-between  mt-4 py-[5px] px-[20px]'   >
                            <CiLocationOn className='text-2xl' />

                            <textarea className='text-base text-[#616161] dark:text-main-theme-4 mr-1 w-full p-2 bg-transparent outline-none placeholder:text-xs placeholder:text-[#ABABAB] placeholder:dark:text-main-theme-4' placeholder='آدرس' >

                            </textarea>
                        </div>

                        <button onClick={buyHandler} className='bg-main-theme-1  lg:w-[90%] text-base text-white py-4 px-16 mt-12  rounded-lg dark:bg-main-theme-4 dark:text-main-theme-1'>

                            پرداخت</button>

                    </div>

                </div>


            </div>



        </>
    )
}
