import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("cart/fetchUser", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data);
    return response.data
})

const initialState = {
    cartList: [],
    cartCount: 0,
    userDetail: {},
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
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            console.log("START LOADING...");
         },
        [fetchUser.fulfilled]: (state, action) => {
            console.log("END LOADING...");
            console.log("SUCCEC");
            console.log(action,"=ACTION");
            state.userDetail = action.payload
         },
        [fetchUser.rejected]: (state, action) => {
            console.log("END LOADING...");
            console.log("ERROR");
         }
    }
})

export const { increment, decrement, addTocart } = cartSlice.actions

export default cartSlice.reducer