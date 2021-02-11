console.log('app.js connected')

let drawNumbers = [0]
let boardSquares = [0]

window.onload = function initaliseBoardSquares() {
  for (let i = 1; i < 75; i++) {
    boardSquares.unshift(generateRandomNumbers())
  }
  console.log(boardSquares)
}

const handleDraw = () => {
  generateRandomNumbers()
  renderHistoricalDrawNode()
}

// Generates random numbers between 1 and 75
const generateRandomNumbers = (max = 75) => {
  const num = Math.floor(Math.random() * max)
  drawNumbers.unshift(num)
  return num
}

const renderHistoricalDrawNode = () => {
  const node = document.createElement('DIV')
  const textNode = document.createTextNode(drawNumbers[0])
  node.appendChild(textNode)
  document.getElementById('drawnumbers').appendChild(node)
  console.log(textNode)
}

const renderBoard = () => {
  generateBoardShell()
}

const generateBoardShell = () => {
  const { value } = document.querySelector('input')
  for (let i = 0; i < value; i++) {
    const board = document.createElement('div')
    board.className = 'board'
    board.setAttribute('id', 'board')
    document.getElementById('boards').appendChild(board)
  }
}
