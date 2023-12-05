import { configureStore } from "@reduxjs/toolkit"
import filterSlice from "../slices/filterSlice"
import addtoCart from "../slices/basketSlice"


export default configureStore({
    reducer: {
        filterItems: filterSlice,
        addToCart: addtoCart
    }
})