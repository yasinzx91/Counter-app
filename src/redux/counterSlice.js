import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        
        //func to increment number
        increment:(state,action)=>{
            state.value +=action.payload;
        },
        //func to decrement number
        decrement:(state,action)=>{
            state.value -=action.payload;
        },
        //func to reset
        reset:(state)=>{
            state.value = 0;
        }

    }
})  

export const{increment,decrement,reset} = counterSlice.actions

export default counterSlice.reducer