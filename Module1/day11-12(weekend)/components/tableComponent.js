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
    state.tableRowsCount += 1
    const tr = document.createElement('tr')
    tbody.append(tr)
    tr.setAttribute('ID', `tableDataRow${i + 1}`)
    tr.classList.add('studentRow')
    Object.values(data).forEach((values) => {
      const td = document.createElement('td')
      tr.appendChild(td).innerText = `${values}`
    })
    const td = document.createElement('td')
    tr.appendChild(td).appendChild(addButton())
  })
}
