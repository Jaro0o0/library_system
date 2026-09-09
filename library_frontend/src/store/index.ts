import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const storage = {
  getItem: (key: string) => {
    const value = localStorage.getItem(key)
    return Promise.resolve(value)
  },
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value)
    return Promise.resolve()
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key)
    return Promise.resolve()
  },
}

import SliceSearchedBooks from './SearchedBooks/SliceSearchedBooks'
import userReducer from './UserSlice/userSlice'
import shoppingCardReducer from './ShoppingCardSlice/ShoppingCardSlice';
import RecomendedSlice from './RecomendedSlice/RecomendedSlice'


//Presist
const shoppingCardPersistConfig = {
  key: 'shoppingCard',
  storage,
}

//Resist
const persistedShoppingCardReducer = persistReducer(
  shoppingCardPersistConfig,
  shoppingCardReducer
)

const store = configureStore({
  reducer: {
    searchedBooks: SliceSearchedBooks,
    user: userReducer,
    shoppingCard : persistedShoppingCardReducer,
    recomended: RecomendedSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
