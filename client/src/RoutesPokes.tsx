import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, sumMore } from './features/Reducers/pokemonReducer'
import { getCartItems } from './features/Reducers/postsSlice'
import { useEffect } from 'react'

const App = () => {
  const value = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleClick = (): void => {
    dispatch(increment())
  }

  const handleClick5 = (): void => {
    dispatch(sumMore(5))
  }

  const updatePosts = (): void => {
    dispatch(getCartItems())
  }

  useEffect(() => {
    updatePosts()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {value}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleClick5}>
            Sum More 5
          </button>
        </p>
        <input type="text" disabled={true} />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
