import { GRID_SIZE } from '../constants'
export const isPosition = (x, y, diffX, diffY) => x === diffX && y === diffY
const getRandomNumberFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const getRandomCoordinate = () => ({
  x: getRandomNumberFromRange(1, GRID_SIZE - 1),
  y: getRandomNumberFromRange(1, GRID_SIZE - 1),
})
