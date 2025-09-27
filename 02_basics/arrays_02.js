const marvel_herroes = ["ironman", "thor", "hulk"]
const dc_herroes = ["superman", "batman", "flash"]

// marvel_herroes.push(dc_herroes)
// console.log(marvel_herroes) //['ironman', 'thor', 'hulk', ['superman', 'batman', 'flash']]

const all_herroes = marvel_herroes.concat(dc_herroes)
console.log(all_herroes) //['ironman', 'thor', 'hulk', 'superman', 'batman', 'flash']

const all_herroes2 = [...marvel_herroes, ...dc_herroes] //spread operator
console.log(all_herroes2) //['ironman', 'thor', 'hulk', 'superman', 'batman', 'flash']

const another_arr = [1,2,3,[4,5],6,7,[8,9,10]]
const flat_arr = another_arr.flat(Infinity) //flat method
console.log(flat_arr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Array.isArray("tony")) //false
console.log(Array.from("tony")) //['t', 'o', 'n', 'y']
console.log(Array.from({name: "tony"})) // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //[100, 200, 300]