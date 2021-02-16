/* 
- Table component generates all table elements that are child of <table></table>
- It accepts two default parameters to populate data when rendering to the dom
- Designed to keep html template lean, normally i would use a web-component
 */

export const state = {
  tableRowsCount: 0
}

export const tableComponent = (columnHeadings = [], tableData = []) => {
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
    const tr = document.createElement('tr')
    tbody.append(tr)
    tr.setAttribute('ID', `tableDataRow${i + 1}`)
    state.tableRowsCount += 1
    tr.classList.add('studentRow')
    Object.values(data).forEach((values) => {
      const td = document.createElement('td')
      tr.appendChild(td).innerText = `${values}`
    })
    const td = document.createElement('td')
    tr.appendChild(td).appendChild(addButton())
  })
}

const addButton = () => {
  const btn = document.createElement('button')
  btn.innerText = '+'
  btn.addEventListener('click', (event) => {
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const row = event.target.closest('.studentRow').children
    li.innerText = row[1].innerText + ' ' + row[2].innerText
    ul.appendChild(li)
    console.log(row)
  })
  return btn
}
