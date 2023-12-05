import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2"


const localStorageDtas = JSON.parse(localStorage.getItem('basket'))


const addToCart = createSlice({
    name: "cart",
    initialState: localStorageDtas || { cart: [], total: 0, lastCost: 0, offerPrecent: 0 },
    reducers: {
        add(state, action) {

            const check = state.cart.findIndex(item => item.id == action.payload.id)
            if (check == -1) {
                state.cart.push(action.payload)
            } else {
                if (state.cart[check].count == state.cart[check].qty) {
                    Swal.fire({
                        icon: 'error',
                        title: 'اوپس',
                        text: 'موجودی این محصول تموم شد',
                        confirmButtonColor: "#27374D",
                        confirmButtonText: "برگشت"
                    })
                } else {
                   
                    state.cart[check].qty += action.payload.qty
                }
            }

            state.total = state.cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0)
            if (state.offerPrecent > 0) {
                state.lastCost = state.total - ((state.offerPrecent / 100) * state.total)

            }
            localStorage.setItem('basket', JSON.stringify(state))

        },
        remove(state, action) {
            const filtredItems = state.cart.filter(item => item.id !== action.payload.id)

            state.cart = filtredItems
            state.total = state.cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0)
            if (state.offerPrecent > 0) {
                state.lastCost = state.total - ((state.offerPrecent / 100) * state.total)

            }
            localStorage.setItem('basket', JSON.stringify(state))

        },
        update(state, action) {

            const check = state.cart.findIndex(item => item.id == action.payload.id)
            if (check !== -1) {
                state.cart[check].qty = action.payload.qty
            }

            state.total = state.cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0)
            if (state.offerPrecent > 0) {
                state.lastCost = state.total - ((state.offerPrecent / 100) * state.total)

            }
            localStorage.setItem('basket', JSON.stringify(state))

        },
        offerActive(state, action) {
            state.offerPrecent = action.payload.precent
            if (state.offerPrecent > 0) {
                state.lastCost = state.total - ((state.offerPrecent / 100) * state.total)
            }
            localStorage.setItem('basket', JSON.stringify(state))

        },
        buy(state, action) {
            localStorage.removeItem('basket')
            localStorage.removeItem('offerCodes')
            state.cart  = []
            state.total  = 0
            state.lastCost  = 0
            state.offerPrecent  = 0
         
        }

    }
})

export const { add, remove, update, offerActive, buy } = addToCart.actions

export default addToCart.reducer
