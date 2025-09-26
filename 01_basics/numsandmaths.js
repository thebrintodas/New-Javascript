const score = 400
const bonus = new Number(100)
console.log(score) // 400
console.log(bonus) // [Number: 100]
console.log(bonus.toString()) 

console.log(score.toFixed(2)) // 400.00

const other = 123.1584
console.log(other.toPrecision(5)) // 123.16

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000 in USA format// 
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000 in Indian format
console.log(hundreds.toLocaleString('en-BD')) // 1,000,000 in Bangladeshi format

console.log(Math.abs(-100)) // 100
console.log(Math.round(4.6)) // 5
console.log(Math.floor(4.6)) // 4
console.log(Math.ceil(4.2)) // 5
console.log(Math.min(1, 2, 3, 4, 5, -10, -100)) // -100
console.log(Math.max(1, 2, 3, 4, 5, -10, -100)) // 5
console.log(Math.random()) // random number between 0 and 1
console.log((Math.random() * 10+1)) // random number between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random number between 10 and 20 (inclusive)