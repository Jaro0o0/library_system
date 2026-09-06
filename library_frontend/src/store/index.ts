import { configureStore } from '@reduxjs/toolkit'
import SliceSearchedBooks from './SearchedBooks/SliceSearchedBooks'
import userReducer from './UserSlice/userSlice'
import shoppingCardReducer from './ShoppingCardSlice/ShoppingCardSlice';

const store = configureStore({
  reducer: {
    searchedBooks: SliceSearchedBooks,
    user: userReducer,
    shoppingCard : shoppingCardReducer,

  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
