/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old
*/

console.log('-------- Exercise1 ---------')

const datatypes = {
  boolean: 'a true of false falue, used for making decisions when making comparisons',
  number: 'a number, can be either  integers or flaots (decimals), javascript is intelligent enough to tell the differenc and convert during assignment and can be +infinity and -infinity',
  null: 'primative type, a cause of pain for many javascript developers lol and it results to explicitly nothing',
  undefined: 'variable declared but no value assigned',
  nan: 'not a number type',
  symbol: 'an immutable primative value',
  object: 'objects are not primitive datatypes but is a collection of properties'
}

for (const data in datatypes) {
  console.log(data)
}

/* EXERCISE 2
Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
*/

console.log('-------- Exercise2 ---------')

// A variable is a way to store data temporarily in memory to be used at run time when executing the program.
// We can assign variables different values, can re-assign variables to new values, create functions stored in variables and also, fix variables to constant values.

/* EXERCISE 3
Write the code to execute a SUM between the number 12 and 20.
*/

console.log('-------- Exercise3 ---------')

const sum = (firstNum, SecondNum) => firstNum + SecondNum

console.log(sum(12, 20))

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

console.log('-------- Exercise4 ---------')

let x = 12

console.log(x)

/* EXERCISE 5
Create a variable named name containing the string John Doe.
*/

console.log('-------- Exercise5 ---------')

const name = 'John Doe'

console.log(name)

/* EXERCISE 6
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
*/

console.log('-------- Exercise6 ---------')

console.log(x - 2)

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2.
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

console.log('-------- Exercise7 ---------')

const name1 = 'john'
const name2 = 'John'

if (name1 !== name2) {
  console.log(`name1 - ${name1} - is not the same as name2 - ${name2}`)
} else if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log(`name1 - ${name1} - is the same as name2 - ${name2}`)
}

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

console.log('-------- Exercise8 ---------')

x = 3

switch (x) {
  case 1:
    console.log('one')
    break
  case 2:
    console.log('two')
    break
  case 3:
    console.log('three')
    break
  case 4:
    console.log('four')
    break
  case 5:
    console.log('five')
    break
  case 6:
    console.log('six')
    break
  case 7:
    console.log('seven')
    break
  case 8:
    console.log('eight')
    break
  case 0:
    console.log('nine')
    break
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

console.log('-------- Exercise9 ---------')

y = 30

const oneLineCheckBaby = y === 30 ? 'y is equal to 30' : 'y is NOT equal to 30'

console.log(`Final exercise ternary ${oneLineCheckBaby}`)

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 17.00 GMT +1. In the next days we'll also learn how to use GIT
*/
