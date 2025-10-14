// MAP is an object that holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map()
map.set('name', 'John')
console.log(map) // Map(1) {'name' => 'John'}

map.set('age', 30)
console.log(map) // Map(2) {'name' => 'John', 'age' => 30}

for (const key of map) {
  console.log(key) // ['name', 'John'] ['age', 30]
}

for (const [key, value] of map) { // destructuring assignment
  console.log(`${key}: ${value}`) // name: John age: 30
}

const myObj = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
}

// for (const key of myObj) { // TypeError: myObj is not iterable
//   console.log(`${key}: ${myObj[key]}`) 
// }

for (const key in myObj) { // for in loop
  console.log(`${key}: ${myObj[key]}`) // name: Alice age: 25 city: Wonderland
} // like dictionary in python

const myArray = ['a', 'b', 'c']

for (const index in myArray) {
  console.log(`Index: ${index}, Value: ${myArray[index]}`) // Index: 0, Value: a Index: 1, Value: b Index: 2, Value: c
} // for in loop gives index, for of loop gives value directly

const newmap = new Map([
  ['name', 'Bob'],
  ['age', 28]
])

for (const key in newmap) { // TypeError: newmap is not iterable
  console.log(`${key}: ${newmap[key]}`)
}