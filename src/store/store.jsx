import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './MovieoSlice'

export const store = configureStore({
  reducer: {
    movieData : movieReducer
  },
})