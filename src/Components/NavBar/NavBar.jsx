import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsTelephone, BsBoxSeam, BsCart2 } from "react-icons/bs"
import { BiCommentError, BiLogIn } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg"
import { FiLogIn } from "react-icons/fi"
import menue from "/./src/assets/icons/menu.svg"
import login from "/./src/assets/icons/profile-circle-black.svg"
import search from "/./src/assets/icons/search-normal-white.svg"
import basket from "/./src/assets/icons/shopping-cart-black.svg"
import line from "/./src/assets/icons/Line 55.svg"
import search2 from "/./src/assets/icons/search-normal-black.svg"
import { IoMdClose } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { FaBars } from "react-icons/fa"
import { RiSearch2Line } from "react-icons/ri"
import { HiOutlineMinus } from "react-icons/hi"





export default function NavBar(props) {

    const [slideBar, setSlideBar] = useState(false)
    const { cart } = useSelector(state => state.addToCart)
    const [theme, setTheme] = useState(null)



    const themeHandler = () => {
        console.log('ok');
        setTheme(theme === "dark" ? "light" : "dark")

    }

    useEffect(() => {
        const localData = localStorage.getItem('theme')


        if (localData) {
            if (localData == "dark") {
                setTheme('dark')
                document.documentElement.classList.add("dark")

            } else {
                setTheme('light')
                document.documentElement.classList.remove("dark")

            }
        } else {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme("dark")
            } else {
                setTheme('light')
            }
        }

    }, [])

    useEffect(() => {

        console.log(theme);

        if (theme == "dark") {
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', "dark")

        } else if (theme == "light") {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', "light")

        }


    }, [theme])




    const closeSlide = () => setSlideBar(false)

    return (
        <>

            <div className="navbar sticky top-0 left-0 text-main-theme-1 z-50 px-6 lg:px-20  flex items-center justify-between w-full h-[64px] lg:h-[89px] dark:bg-main-theme-2 bg-main-theme-4 rounded-b-[32px] lg:rounded-b-[44.5px] ">
                {/* navbar start */}


                <div className=" flex ">

                    {/* logo for mobile size */}
                    <div className='hidden lg:block'>
                        <Link className="text-xl  dark:text-main-theme-4  " to="/">
                            لوگو
                        </Link>
                    </div>

                    {/* bar icon for mobile size   */}
                    <button onClick={() => setSlideBar(true)}>
                        <label tabIndex={0} className="cursor-pointer   lg:hidden dark:text-main-theme-4 text-2xl">
                            <FaBars />
                        </label>
                    </button>

                    {/* navbar links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1">
                            <NavLink to="/ContactUs" className='mr-6 p-2 px-3 hover:bg-main-theme-1 hover:text-main-theme-4  duration-300 rounded-xl xl:mr-12 cursor-pointer flex items-center font-semibold dark:text-main-theme-4'>

                                <BsTelephone className='ml-2 text-xl' />
                                تماس با ما</NavLink>

                            <NavLink to='/Products' className='mr-6 p-2 px-3 hover:bg-main-theme-1 hover:text-main-theme-4  duration-300 rounded-xl xl:mr-12 cursor-pointer flex font-semibold dark:text-main-theme-4 '  >
                                <BsBoxSeam className='ml-2 text-xl' />
                                محصولات</NavLink>
                            <NavLink to="/AboutUs" className='mr-6 p-2 px-3 hover:bg-main-theme-1 hover:text-main-theme-4  duration-300 rounded-xl xl:mr-12 cursor-pointer flex items-center font-semibold dark:text-main-theme-4 '>
                                <BiCommentError className='ml-2 text-xl' />
                                درباره ما</NavLink>
                            <NavLink to="/Articles" className='mr-6 p-2 px-3 hover:bg-main-theme-1 hover:text-main-theme-4  duration-300 rounded-xl xl:mr-12 cursor-pointer flex font-semibold dark:text-main-theme-4  '>
                                <CgFileDocument className='ml-2 text-xl' />
                                وبلاگ</NavLink>
                        </ul >
                    </div >

                </div >


                {/*logo for desktop size */}
                < div div className=' lg:hidden' >
                    <Link className='text-xl dark:text-main-theme-4' to="/">
                        لوگو
                    </Link>
                </ div>


                {/* navbar end */}
                < div div className=" flex items-center justify-between" >
                    <div className='ml-4 hidden lg:flex lg:flex-row-reverse  lg:items-center dark:text-main-theme-4 first-letter:'>
                        <NavLink to="/Login">
                            <BiLogIn className='text-2xl ' />
                        </NavLink>
                        <div className=' ml-4 flex   rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(167,167,167,0.25);] '>
                            <button className="bg-main-theme-1 p-2">
                                <RiSearch2Line className='text-2xl text-main-theme-4 ' />
                            </button>
                            <input className='border-none outline-none p-2' type="text" placeholder='جست و جو' />
                        </div>
                    </div>

                    <Link to="/Backet" className="relative ml-4">
                        <BsCart2 className='text-2xl dark:text-main-theme-4 ' />
                        <span className='w-4 h-4 bg-main-theme-1 rounded-full absolute -top-[15%] -right-[15%] flex items-center justify-around text-white text-[10px] dark:bg-main-theme-4 dark:text-main-theme-1 '>
                            {cart?.length > 0 ? (
                                cart.reduce((acc, cur) => acc + cur.qty, 0)
                            ) : (0)}
                        </span>
                    </Link>

                    <label className="swap swap-rotate ">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={themeHandler} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current dark:fill-main-theme-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current dark:fill-main-theme-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                    <HiOutlineMinus className='mx-1 lg:hidden dark:text-main-theme-4 rotate-90' />

                    <RiSearch2Line className='text-2xl dark:text-main-theme-4  lg:hidden' />

                </ div>
            </div >


            {/* slide bar */}
            <div onClick={e => {
                setSlideBar(false)
            }} className={`bg-transparent w-full h-[100vh]  fixed top-0 z-50 duration-500 ${slideBar ? 'right-0' : '-right-full'}`}>
                <div onClick={(e) => e.stopPropagation()} className="w-2/3 sm:w-2/5 h-full   items-center justify-center dark:bg-main-theme-3  bg-main-theme-2 text-main-theme-4 ">
                    <div className=' flex flex-col items-center justify-between relative  h-full'>

                        <IoMdClose onClick={() => closeSlide(false)} className='top-5 left-5 ml-5 cursor-pointer absolute text-2xl' />
                        <div className=' flex flex-col items-center mt-14 w-full  '>
                            <Link className='text-xl' to="/">
                                لوگو
                            </Link>
                            <ul className='mt-6 w-full' >
                                <NavLink to="/ContactUs" className='hover:bg-main-theme-1 hover:pr-8 duration-300 cursor-pointer flex py-3 pr-6 text-sm'>
                                    <BsTelephone className='ml-2 text-xl' />

                                    تماس با ما</NavLink>

                                <NavLink to='/Products' className='hover:bg-main-theme-1 hover:pr-8 duration-300 cursor-pointer flex py-3 pr-6 text-sm'>
                                    <BsBoxSeam className='ml-2 text-xl' />

                                    محصولات</NavLink>
                                <NavLink to="/AboutUs" className='hover:bg-main-theme-1 hover:pr-8 duration-300 cursor-pointer flex py-3 pr-6 text-sm'>
                                    <BiCommentError className='ml-2 text-xl' />
                                    درباره ما</NavLink>
                                <NavLink to="/Articles" className='hover:bg-main-theme-1 hover:pr-8 duration-300 cursor-pointer flex py-3 pr-6 text-sm'>
                                    <CgFileDocument className='ml-2 text-xl' />
                                    وبلاگ</NavLink>
                                <NavLink to="/Login" className='hover:bg-main-theme-1 hover:pr-8 duration-300 cursor-pointer flex py-3 pr-6 text-sm'>
                                    <FiLogIn className='ml-2 text-xl' />
                                    ورود و ثبت نام
                                </NavLink>

                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
