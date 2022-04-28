import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    // increment
    increment(state) {
      state.value++
    },
    // decrement
    decrement(state) {
      state.value--
    },
    // reset
    reset(state) {
      state.value = 0
    },
    sumMore(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, reset, sumMore } = counterSlice.actions
export default counterSlice.reducer
