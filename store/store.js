import { configureStore } from '@reduxjs/toolkit'
import RepoReducer from '../slice/RepoSlice'

export const store = configureStore({
  reducer: {
    repo: RepoReducer,
  },
}) 

