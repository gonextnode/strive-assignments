console.log('connected app.js')

let x = 'John'
let y = 'Doe'

console.log(`${x} <> ${y}`)

const me = {
  name: 'Sean',
  surname: 'Knowles',
  email: 'test@bgmain.com'
}

//standard js
delete me.email

//es6
const { email, ...me2 } = me
console.log(me2)

let arrayOne = []
let arrayTwo = []
let matrixArray = []

for (let i = 0; i < 10; i++) {
  arrayOne.push(`string ${i}`)
}

for (let i = 0; i < 100; i++) {
  const random = Math.floor(Math.random() * 100)
  arrayTwo.push(random)
}

//console.log(arrayOne)
//console.log(arrayTwo)

const max = Math.max(...arrayTwo)
const min = Math.min(...arrayTwo)

console.log(max)
console.log(min)

for (let i = 0; i < 10; i++) {
  const random = Math.floor(Math.random() * 10)
  matrixArray[random, ...matrixArray] = matrixArray
}

console.log(matrixArray)
