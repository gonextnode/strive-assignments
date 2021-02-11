// App State
const state = {
  drawNumbers: [],
  boardsCount: 0,
  boards: []
}

// Generates random numbers between 1 and 75
const randomNumbers = (max = 75) => {
  const num = Math.floor(Math.random() * max)
  return num
}

// used to generate one board
const randomNumbersList = () => {
  let numsArray = []
  for (let i = 0; i < 75; i++) {
    numsArray.push(randomNumbers())
  }
  console.log(numsArray)
}

const numberBoardsSelected = () => {
  const { value } = document.querySelector('input')
  state.boardsCount = value
  console.log(state.boardsCount)
  initBoardsData()
}

// initialise multiple boards
const initBoardsData = () => {
  state.boards = []
  for (let i = 1; i < state.boardsCount; i++) {
    state.boards = [[randomNumbersList()], ...state.boards]
    console.log(state.boards)
  }
  randomNumbersList()
}

const drawHistoryComponent = () => {
  const node = document.createElement('DIV')
  const textNode = document.createTextNode(state.drawNumbers[0])
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

const handleAddBoard = () => {
  for (let i = 0; i < numberBoardsSelected(); i++) {
    boardComponent()
  }
}

const handleDrawNumber = () => {
  randomNumbers()
  drawHistoryComponent()
  state.drawNumbers.unshift(randomNumbers())
}
