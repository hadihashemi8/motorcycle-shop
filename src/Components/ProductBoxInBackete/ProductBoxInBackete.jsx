import React, { useEffect, useState } from 'react'
import product from "/./src/assets/motors/m-5.png"
import { IoMdAddCircleOutline } from 'react-icons/io'
import { BiMinusCircle } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { remove, update } from '../../redux/slices/basketSlice'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



export default function ProductBoxInBackete(props) {


    const [qty, setQty] = useState(props.qty)
    const dispatch = useDispatch()


    const removeHandler = () => {
        Swal.fire({
            icon: "question",
            text: "آیا از حذف محصول مطئن هستین؟",
            confirmButtonColor: "#27374D",
            confirmButtonText: "تایید",
            showCancelButton:true,
            cancelButtonColor:"red",
            cancelButtonText:"لغو"

        }).then(res => {
            if (res.isConfirmed) {
                dispatch(remove({ id: props.id }))
            }
        })
    }

    const addHandler = () => {
        if (qty < props.count) {
            setQty(prev => prev + 1)
        } else {
            alert("موجودی تموم شد")
        }
    }

    const minusHandler = () => {
        qty > 1 && setQty(prev => prev - 1)
    }

    useEffect(() => {
        dispatch(update({ id: props.id, qty }))
    }, [qty])

    useEffect(() => {
        setQty(props.qty)
    }, [props])

    return (
        <div className='flex items-center justify-between w-full  shadow-[0px_0px_20px_rgba(150,150,150,0.25)] rounded-lg mt-4 dark:bg-main-theme-3'>
            <Link to={`/OrderProducts/${props.id}`}>
                <img className='w-24 h-24 p-2 ml-2' src={props.src} alt="" />
            </Link>

            <div className='flex items-center justify-between w-[80%] dark:text-main-theme-1'>
                <div>
                    <p className='text-xs '>{props.title}</p>
                    <p className='text-xs text-main-green2 mt-2 lg:hidden'>{props.price} تومان</p>
                </div>

                <div className='flex flex-col items-center ml-3'>
                    <GrClose onClick={removeHandler} className='ml-2 cursor-pointer  small:hidden' />
                    <div className='bg-main-theme-2 dark:bg-main-theme-1 text-main-theme-4 small:mr-2 mt-2 small:mt-0 flex   items-center justify-around py-1 px-4 rounded-lg w-[100px] '>
                        <button className='w-5 ' onClick={addHandler}>
                            <IoMdAddCircleOutline className='text-main-theme-4 text-lg' />
                        </button>
                        <p className='text-2x5'>{qty}</p>
                        <button className='w-5 ' onClick={minusHandler}>
                            <BiMinusCircle className='text-main-theme-4 text-lg' />
                        </button>
                    </div>
                </div>
                <p className='text-xs  mt-2 hidden  lg:block'>{props.price} تومان</p>



                <GrClose onClick={removeHandler} className='ml-2 cursor-pointer hidden small:block' />

            </div>
        </div>
    )
}
