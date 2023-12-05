import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"


export default function Pagination({ showItemCount, defaultPage, setItems }) {

    const { items } = useSelector(state => state.filterItems)

    const itemShowCount = showItemCount
    const pageSize = Math.ceil(items.length / itemShowCount)
    const pageNumber = defaultPage
    const endSlice = itemShowCount * pageNumber
    const startSlice = endSlice - itemShowCount

    const [allItems, setAllItems] = useState([])
    const [activePage, setActivePage] = useState(pageNumber)
    const [pagination, setPagination] = useState({
        to: endSlice,
        from: startSlice
    })

    useEffect(() => {
        
        setAllItems(items)
    }, [items])


    useEffect(() => {
        const sliceItemsForShow = allItems?.slice(pagination.from, pagination.to)
        setItems(sliceItemsForShow)
    }, [pagination.from, pagination.to, allItems])


    useEffect(() => {
        setActivePage(1)
        setPagination({ from: startSlice, to: endSlice })
    }, [allItems])



    const paginationHandler = (page) => {
        setActivePage(page)
        const to = itemShowCount * page
        const from = to - itemShowCount
        setPagination({ from: from, to: to })
    }


    return (
        <div className='  mt-14' dir='ltr'>
            {Array(pageSize).fill(0).map((item, index) => (
                <button key={index} onClick={() => paginationHandler(index + 1)} className={`w-12 h-12 border-[1px] border-main-theme-1 mx-1 outline-   hover:bg-main-theme-1 hover:text-main-theme-4 dark:hover:bg-main-theme-1 dark:hover:text-main-theme-4 dark:hover:border-main-theme-4 ${index + 1 == activePage ? "bg-main-theme-1  text-main-theme-4 dark:border-main-theme-4" : "text-main-theme-1 bg-main-theme-4 dark:bg-main-theme-4 dark:text-main-theme-1"}`}>
                    {index + 1}
                </button>
            ))}

        </div>
    )
}
