import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: 'Liliana',
})

export default configureStore({
    reducer:{
        user: user.reducer
    }
})