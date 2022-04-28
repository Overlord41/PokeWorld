import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface dataInterface {
  id: string
  title: string
  price: string
  img: string
  amount: number
}

interface cartInfer {
  list: dataInterface[]
  status: 'idle' | 'loading' | 'pending' | 'success' | 'failed'
}

const API: string = 'https://course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('carts/getCartItem', async () => {
  const response = await fetch(API)
  const data: dataInterface[] = await response.json()
  return data
})

const initialState = {
  list: [],
  status: 'idle',
} as cartInfer

const postsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    //     // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.list = action.payload
      state.status = 'success'
    })
  },
})

export default postsSlice.reducer
