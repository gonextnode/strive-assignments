console.log('app.js connected')

// State
let drawNumbers = [0]
let boards = []

// Generates random numbers between 1 and 75
const randomNumbers = (max = 75) => {
  let numArray = []
  const num = Math.floor(Math.random() * max)
  drawNumbers.unshift(num)
  return num
}

const historicalDrawComponent = () => {
  const node = document.createElement('DIV')
  const textNode = document.createTextNode(drawNumbers[0])
  node.appendChild(textNode)
  document.getElementById('drawnumbers').appendChild(node)
  console.log(textNode)
}

const boardComponent = () => {
  const board = document.createElement('div')
  board.className = 'board'
  board.setAttribute('id', 'board')
  document.getElementById('boards').appendChild(board)
}

const renderBoard = () => {
  const { value } = document.querySelector('input')
  for (let i = 0; i < value; i++) {
    boardComponent()
  }
}

const handleDraw = () => {
  randomNumbers()
  historicalDrawComponent()
}
