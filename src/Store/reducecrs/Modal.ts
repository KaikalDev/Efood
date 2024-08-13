import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Cardapio } from '../../Page/Home'

type modalState = {
  prato: Cardapio | undefined
  isOpen: boolean
}

const initialState: modalState = {
  prato: undefined,
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
      state.prato = undefined
    },
    setModalPrato: (state, action: PayloadAction<Cardapio | undefined>) => {
      state.prato = action.payload
    }
  }
})

export const { closeModal, openModal, setModalPrato } = modalSlice.actions
export default modalSlice.reducer
