import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {user: 'Liliana', number: 0},
    reducers: {
        changeUser(state, action){
            state.user = action.payload;
        },
        changeNum(state, action){
            state.number += action.payload;
        },
    }
});

const cartItem = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action){
            state.push(action.payload);
        }
    }
})

export default configureStore({
    reducer:{
        user: user.reducer
    }
})

export let { changeUser, changeNum } = user.actions;//변수명에 export 하고싶은 함수명 나열