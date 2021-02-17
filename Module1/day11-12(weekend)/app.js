//import { tableComponent } from './components/tableComponent.js'

// application state
const state = {
  tableRowsCount: 0,
  students: [
    {
      id: 'https://www.facebook.com/seanknowlesmd/',
      name: 'sean',
      surname: 'knowles',
      age: 32,
      email: 'Caroline48@gmail.com'
    },
    {
      id: 'https://www.facebook.com/jackychan/',
      name: 'jacky',
      surname: 'chan',
      age: 72,
      email: 'Caroline48@gmail.com'
    },
    {
      id: 'https://www.facebook.com/brucelee/',
      name: 'bruce',
      surname: 'lee',
      age: 102,
      email: 'Caroline48@gmail.com'
    },
    {
      id: 'https://www.facebook.com/jetlee/',
      name: 'jet',
      surname: 'lee',
      age: 56,
      email: 'Caroline48@gmail.com'
    }
  ],
  columnHeadings: ['ID', 'Name', 'Surname', 'Age', 'Email', 'Actions']
}

const changeTitle = () => {
  const { value } = document.getElementById('inputText')
  if (value) {
    document.querySelector('h1').innerText = value
  } else {
    alert('Alert text field is empty')
  }
}

// Render function
window.onload = function render() {
  tableComponent(state.columnHeadings, state.students)
}

console.log(state.tableRowsCount)
