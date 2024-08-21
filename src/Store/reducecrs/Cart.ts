import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Menu[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<Menu>) => {
      const item = { ...action.payload, idCart: state.items.length + 1 }
      state.items.push(item)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.idCart !== action.payload)
    },
    clear: (state) => {
      state.items = []
      state.isOpen = false
    }
  }
})

export const { close, open, add, remove, clear } = cartSlice.actions
export default cartSlice.reducer
