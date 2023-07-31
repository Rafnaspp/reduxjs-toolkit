import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
    cartCount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTocart: (state) => {
            state.cartCount = 1
        },
        increment: (state, action) => {
            console.log(action, "ACTION");
            const itemExist = state.cartList.find((item) => item.id === action.payload.id)
            if (itemExist) {
                state.cartList.forEach((item) => {
                    if (item?.id === action.payload.id) {
                        item.count++
                    }
                })
                return
            }
            state.cartList.push({
                ...action.payload,
                count: 1
            })
            // state.cartCount +=1
        },
        decrement: (state, action) => {
            state.cartList.forEach((item) => {
                if (item?.count !== 0) {

                    if (item?.id === action.payload.id) {
                        item.count--
                        return
                    }
                } else {
                    item.count = 0
                }

            })
        },
    },
})

export const { increment, decrement, addTocart } = cartSlice.actions

export default cartSlice.reducer