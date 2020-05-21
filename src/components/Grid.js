import React from 'react'
import { GRID, GRID_SIZE } from '../constants'
import cs from 'classnames'

for (let i = 0; i <= GRID_SIZE; i++) {
  GRID.push(i)
}

const isBorder = (x, y) =>
  x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE

const isPosition = (x, y, diffX, diffY) => x === diffX && y === diffY

const isSnake = (x, y, snakeCoordinates) =>
  snakeCoordinates.filter((coordinate) =>
    isPosition(coordinate.x, coordinate.y, x, y)
  ).length

const getSnakeHead = (snake) => snake.coordinates[0]

const getCellCs = (isGameOver, snake, snack, x, y) =>
  cs('grid-cell', {
    'grid-cell-border': isBorder(x, y),
    'grid-cell-snake': isSnake(x, y, snake.coordinates),
    'grid-cell-snack': isPosition(x, y, snack.coordinate.x, snack.coordinate.y),
    'grid-cell-hit':
      isGameOver &&
      isPosition(x, y, getSnakeHead(snake).x, getSnakeHead(snake).y),
  })

const Grid = ({ isGameOver, snake, snack }) => (
  <div>
    {GRID.map((y) => (
      <Row y={y} key={y} snake={snake} snack={snack} isGameOver={isGameOver} />
    ))}
  </div>
)

const Row = ({ isGameOver, snake, snack, y }) => (
  <div className='grid-row'>
    {GRID.map((x) => (
      <Cell
        x={x}
        y={y}
        key={x}
        snake={snake}
        snack={snack}
        isGameOver={isGameOver}
      />
    ))}
  </div>
)

const Cell = ({ isGameOver, snake, snack, x, y }) => (
  <div className={getCellCs(isGameOver, snake, snack, x, y)} />
)

export default Grid