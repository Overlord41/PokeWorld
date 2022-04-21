import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Reducers/pokemonReducer'
import postsSlice from '../features/Reducers/postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
