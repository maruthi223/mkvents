import { createSlice } from "@reduxjs/toolkit";

type State={
    data:number
}

const initialState:State= {
    data:42
}

export const testSlice = createSlice({
    name:'test',
    initialState,
    reducers:{
        incrementByAmount:(state,action)=>{
            state.data+=action.payload
    },
    increment:(state)=>{
        state.data+=1
    },
    decrement:(state)=>{
        state.data-=1
    }
}
});

export const {increment,decrement,incrementByAmount} = testSlice.actions