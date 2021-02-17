/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

const posNums = [2, 3, 5, 5, 6, 7]
console.log(posNums)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const myOjbect = {
  name: 'Sean',
  surname: 'Knowles',
  emailAddress: 's@seanknowles.dev',
  age: 32
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

myOjbect.drivingLicence = true

console.log(myOjbect)

/* EXERCISE 4
Remove from the previously created object the age property.
*/

const { age, ...myUpdatedObject } = myOjbect

console.log(myUpdatedObject)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

const secondObject = {
  name: 'Sean',
  surname: 'Knowles',
  emailAddress: 'sean@blockprop.io'
}

if (secondObject.emailAddress !== myOjbect.emailAddress) {
  console.log(
    `first object email ${myOjbect.emailAddress} is not the same as secondObject email ${secondObject.emailAddress}`
  )
}

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/

const totalShippingCart = {
  total: 30.56,
  currency: 'USD'
}

const shippingCost = totalShippingCart.total >= 50.0 ? 'FREE' : 10.0

console.log(`Your current shipping cost is: ${shippingCost}`)

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

const blackFridayPct = 20

function discount(shippingCost) {
  const discount = (shippingCost.total / 100) * blackFridayPct
  return totalShippingCart.total - discount
}

console.log(
  `Congrats! It's Black Friday, you recieve ${blackFridayPct}% discount, thie shipping total is: ${discount(
    totalShippingCart
  ).toFixed(2)}`
)

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

const car = {
  brand: 'audi',
  model: 'A6',
  licensePlate: 60502138
}

const carList = []
const numberOfCars = 5 // select number of cars

function plateGenerator() {
  const rand = Math.random().toString().substr(2, 8) // 60502138
  return rand
}

// creates a new car object clone with a freshly generated number plate :)
const createCar = () => {
  for (let i = 1; i <= numberOfCars; i++) {
    const newCar = {
      ...car,
      licensePlate: plateGenerator() // generates number plate
    }
    carList.push(newCar)
  }
}

createCar()
console.log(carList)

/* TODO EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */

/* TODO EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

/* TODO EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

/* WRITE YOUR CODE HERE */

/* TODO EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */

/* TODO EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/
