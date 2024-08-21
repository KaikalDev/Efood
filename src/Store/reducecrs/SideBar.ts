import { createSlice } from '@reduxjs/toolkit'

type sideBarState = {
  showArray: string[]
  show: string
  index: number
}

const initialState: sideBarState = {
  showArray: ['cart', 'address', 'card', 'success'],
  show: 'cart',
  index: 0
}

const SideBarSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    proximo: (state) => {
      const newIndex = state.index + 1
      state.index = newIndex
      state.show = state.showArray[newIndex]
    },
    anterior: (state) => {
      const newIndex = state.index - 1
      state.index = newIndex
      state.show = state.showArray[newIndex]
    },
    start: (state) => {
      state.show = state.showArray[0]
      state.index = 0
    },
    end: (state) => {
      state.show = state.showArray[3]
      state.index = 3
    }
  }
})

export const { proximo, anterior, start, end } = SideBarSlice.actions
export default SideBarSlice.reducer
