console.log('connected...')

state = {
  tableRowsCount: 0
}

const students = [
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
]

const columnHeadings = ['ID', 'Name', 'Surname', 'Age', 'Email', 'Actions']

/* 
- Table component generates all table elements that are child of <table></table>
- It accepts two default parameters to populate data when rendering to the dom
- Designed to keep html template lean, normally i would use a webcomponent
 */

tableComponent = (columnHeadings = [], tableData = []) => {
  // instantiate elements to be used in render methods
  const thead = document.createElement('thead')
  const tr = document.createElement('tr')
  const tbody = document.createElement('tbody')
  const td = document.createElement('td')
  // target table tag
  const table = document.querySelector('table')
  // render tableHeader children elements
  table.appendChild(thead)
  thead.appendChild(tr)
  columnHeadings.forEach((col) => {
    const th = document.createElement('th')
    tr.appendChild(th).innerText = `${col}`
  })

  // render tableBody children elements
  table.appendChild(tbody)
  tableData.forEach((data, i) => {
    state.tableRowsCount += 1
    const tr = document.createElement('tr')
    tbody.append(tr)
    Object.values(data).forEach((values) => {
      const td = document.createElement('td')
      tr.appendChild(td).innerText = `${values}`
    })
  })

  // insert loop <tr><td></td></tr>
}

// Render function
window.onload = function render() {
  tableComponent(columnHeadings, students)

  console.log(state)
}

changeTitle = () => {
  const { value } = document.getElementById('inputText')
  if (value) {
    document.querySelector('h1').innerText = value
  } else {
    alert('Alert text field is empty')
  }
}
