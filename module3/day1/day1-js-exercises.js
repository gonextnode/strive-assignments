/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sum = (num1 = 0, num2 = 0) => {
  if (num1 === num2) return (total = (num1 + num2) * 3)
  return num1 + num2
}

console.log(sum()) // returns 0 / false
console.log(sum(1, 2)) // returns 3 pass
console.log(sum(2, 2)) // returns 12 pass

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const check50 = (num1 = 0, num2 = 0) => {
  if (num1 === 50 || num2 === 50) return true

  if (num1 + num2 === 50) return true

  return false
}

// console.log(check50(3))
// console.log(check50(25, 25))
// console.log(check50(0, 50))
// console.log(check50(2, 3))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const string1 = 'Javascript ninja in the making'
const string2 = 'zero chance of me switching to ruby from node'

const removeChar = (index = 0, str = '') => {
  const selectedChar = str.charAt(index)
  return (result = str.replace(selectedChar, ''))
}

// console.log(removeChar(2, string1))
// console.log(removeChar(2, string2))
// // edge cases
// console.log(removeChar(, string2))
// console.log(removeChar(2, ))
// console.log(removeChar())

/*
4)
Create a function to find the largest of three given integers.
*/

const largestInt = (num1 = 0, num2 = 0, num3 = 0) => {
  const nums = [num1, num2, num3]
  // returns highest number passed into function
  return (max = Math.max(...nums))
}

// console.log(largestInt(1, 5, 9)) // returns 9 pass
// console.log(largestInt(1, 3)) // returns 5 pass
// console.log(largestInt(10, 5, 3)) // returns 10 passs

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const range = (num1, num2) => {}

range()

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
