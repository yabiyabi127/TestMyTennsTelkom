import { createSlice,createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from "axios"

export const getRepo = createAsyncThunk("repo/getRepo", async() => {
    const res = await axios.get('https://api.github.com/users/yabiyabi127/repos');
    return res.data;
})

const repoEntity = createEntityAdapter({
    selectId:(repo) => repo.id
})

const repoSlice = createSlice({
    name:"repo",
    initialState: repoEntity.getInitialState(),
    extraReducers:{
        [getRepo.fulfilled]: (state, action) => {
            repoEntity.setAll(state, action);
        }
    }
})


export const repoSelectors = repoEntity.getSelectors(state => state.repo)

// const initialState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = repoSlice.actions

export default repoSlice.reducer