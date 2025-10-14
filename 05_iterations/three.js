// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
  console.log(num)
} // 1 2 3 4 5( will printline by line, not like side by side like here), no declaration of index is needed

const greeting = 'Hello'

for (const char of greeting) {
  console.log(`Each char is: ${char}`)
}
