import React from 'react'
import Grid from './components/Grid'
import { KEY_CODES_MAPPER, TICK_RATE } from './constants'
import { getIsSnakeOutside, getIsSnakeClumy } from './helpers/SnakeHelpers'
import { reducer, initialState } from './reducers'
import './App.css'

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const onChangeDirection = (event) => {
    if (KEY_CODES_MAPPER[event.keyCode]) {
      dispatch({
        type: 'SNAKE_CHANGE_DIRECTION',
        direction: KEY_CODES_MAPPER[event.keyCode],
      })
    }
  }

  React.useEffect(() => {
    window.addEventListener('keyup', onChangeDirection, false)

    return () => window.removeEventListener('keyup', onChangeDirection, false)
  }, [])

  React.useEffect(() => {
    const onTick = () => {
      getIsSnakeOutside(state.snake) || getIsSnakeClumy(state.snake)
        ? dispatch({ type: 'GAME_OVER' })
        : dispatch({ type: 'SNAKE_MOVE' })
    }

    const interval = setInterval(onTick, TICK_RATE)

    return () => clearInterval(interval)
  }, [state])

  return (
    <div className='app'>
      <h1>Snake!</h1>
      <Grid
        snake={state.snake}
        snack={state.snack}
        isGameOver={state.playground.isGameOver}
      />
    </div>
  )
}

export default App
