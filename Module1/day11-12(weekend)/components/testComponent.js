const testComponent = (students) => {
  const table = document.querySelector('table')
  console.log(table)
  const component = `
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Surname</th>
                          <th>Age</th>
                          <th>Email</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>

                      
                        ${students
                          .map(
                            (
                              student
                            ) => `  <tr id="tableDataRow1" class="studentRow"><td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.surname}</td>
                        <td>${student.age}</td>
                        <td>${student.email}</td>
                        <td><button onclick="addToList(event)">+</button></td> </tr>`
                          )
                          .join('')}
                          
                       
                      </tbody>
                    `
  table.innerHTML = component
}
const addToList = (event) => {
  console.log('clicked')
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  const row = event.target.closest('.studentRow').children
  li.innerText = row[1].innerText + ' ' + row[2].innerText
  ul.appendChild(li)
}
