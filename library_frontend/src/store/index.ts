import { configureStore } from '@reduxjs/toolkit'
import SliceSearchedBooks from './SearchedBooks/SliceSearchedBooks'
import userReducer from './UserSlice/userSlice'

const store = configureStore({
  reducer: {
    searchedBooks: SliceSearchedBooks,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
