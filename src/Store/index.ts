import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import cartReducer from './reducecrs/Cart'
import modalReducer from './reducecrs/Modal'
import sideBarReducer from './reducecrs/SideBar'

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    sideBar: sideBarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type Rootreducer = ReturnType<typeof Store.getState>
