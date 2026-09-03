import { configureStore } from '@reduxjs/toolkit'
import SliceSearchedBooks from './SearchedBooks/SliceSearchedBooks'

const store = configureStore({
  reducer: {
    searchedBooks: SliceSearchedBooks,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
