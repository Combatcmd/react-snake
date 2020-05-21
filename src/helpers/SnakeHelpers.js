import { isPosition } from './GridHelpers'
import { GRID_SIZE } from '../constants'
const isSnake = (x, y, snakeCoordinates) =>
  snakeCoordinates.filter((coordinate) =>
    isPosition(coordinate.x, coordinate.y, x, y)
  ).length

export const getSnakeHead = (snake) => snake.coordinates[0]

export const getSnakeWithoutStub = (snake) =>
  snake.coordinates.slice(0, snake.coordinates.length - 1)

const getSnakeTail = (snake) => snake.coordinates.slice(1)

export const getIsSnakeOutside = (snake) =>
  getSnakeHead(snake).x >= GRID_SIZE ||
  getSnakeHead(snake).y >= GRID_SIZE ||
  getSnakeHead(snake).x <= 0 ||
  getSnakeHead(snake).y <= 0

export const getIsSnakeClumy = (snake) =>
  isSnake(getSnakeHead(snake).x, getSnakeHead(snake).y, getSnakeTail(snake))

export const getIsSnakeEating = ({ snake, snack }) =>
  isPosition(
    getSnakeHead(snake).x,
    getSnakeHead(snake).y,
    snack.coordinate.x,
    snack.coordinate.y
  )
