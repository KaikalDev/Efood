import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import cartReducer from './reducecrs/Cart'
import modalReducer from './reducecrs/Modal'

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type Rootreducer = ReturnType<typeof Store.getState>
