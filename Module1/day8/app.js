console.log('connected...')

/* EXERCISE 5: 
          Add a new task to the list.
          Suggestion:
          - Use document.getElementById to get the UL item and the input text
          - Use the document.createElement to create the new List Item
          - Append the child to the UL
      */

// handle Tasks
function newTask() {
  getUserInput()
  renderNode()
  clearUserInput()
}

function getUserInput() {
  const { value } = document.querySelector('input')
  return value
}

function renderNode() {
  const node = document.createElement('LI')
  const textnode = document.createTextNode(getUserInput())
  node.appendChild(textnode)
  document.getElementById('taskList').appendChild(node)
}

function clearUserInput() {
  document.querySelector('input').value = ''
}

/* EXERCISE 6: 
          Create a method "removeLast" which removes the last item from the task list
      */

function removeLastTask() {
  const taskList = document.querySelectorAll('LI')
  taskList[taskList.length - 1].remove()
}

/* EXERCISE 7: 
          Create a method "removeFirst" which removes the first item from the task list
      */

function removeFirstTask() {
  const taskList = document.querySelectorAll('LI')
  taskList[0].remove()
}
/* TODO EXERCISE 8: 
          Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
      */

/* TODO EXERCISE 9:
          Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
          onchange event listener ad applies it as background to every list item
      */

/* EXTRA */

/* TODO EXERCISE 10: 
          Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
      
          Use your spare time to beautify your task list with CSS.

          Suggestion:
          - Break the code into many function for semplicity 
          - Reuse the functions previously created
      */
