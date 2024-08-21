import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type modalState = {
  product: Menu | undefined
  isOpen: boolean
}

const initialState: modalState = {
  product: undefined,
  isOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
      state.product = undefined
    },
    setProductModal: (state, action: PayloadAction<Menu | undefined>) => {
      state.product = action.payload
    }
  }
})

export const { closeModal, openModal, setProductModal } = modalSlice.actions
export default modalSlice.reducer
