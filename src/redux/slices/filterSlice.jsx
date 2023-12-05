import { createSlice } from "@reduxjs/toolkit";
import products from "../../datas/datas";

const allProducts = [...products]

const filterSlice = createSlice({
    name: "filter",
    initialState: { items: allProducts },
    reducers: {
        filterItems(state, action) {
            

            if (action.payload.title == "همه محصولات") {
                state.items = [...products]
            } else if (action.payload.title == "مسابقه ای") {
                const filtredItems = products.filter(item => item.cat == "sport")
                state.items = filtredItems
            } else if (action.payload.title == "شهری") {
                const filtredItems = products.filter(item => item.cat == "standard")
                state.items = [...filtredItems]
            } else if (action.payload.title == "کلاسیک") {
                const filtredItems = products.filter(item => item.cat == "classic")
                state.items = [...filtredItems]
            }
        }
    }
})


export const { filterItems } = filterSlice.actions

export default filterSlice.reducer