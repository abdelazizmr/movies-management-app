import { configureStore } from '@reduxjs/toolkit'

import moviesSlice from './moviesSlice'

import usersSlice from './usersSlice'

const store = configureStore({
  reducer: {
    movies : moviesSlice,
    users : usersSlice
  }
})

export default store
