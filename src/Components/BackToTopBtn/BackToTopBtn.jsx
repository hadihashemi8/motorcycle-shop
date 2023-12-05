import React from 'react'
import { motion } from 'framer-motion'
import arrow from "/./src/assets/icons/arrow-circle-up.svg"
import { BsFillArrowUpCircleFill } from 'react-icons/bs'


export default function BackToTopBtn({ backTopHandlear }) {
    return (
        <motion.div initial={{ top: '100%' }} animate={{ top: "90%" }} exit={{ top: '100%' }} className=' z-50 cursor-pointer fixed bottom-4 right-4  flex' onClick={() => backTopHandlear()}>
            <BsFillArrowUpCircleFill className='text-4xl text-main-theme-2 dark:text-main-theme-4'/>
        </motion.div>
    )
}
