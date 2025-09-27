const arr = [0,1,2,3,4,"good", true]
console.log(arr[0]) //0
console.log(arr[7]) //undefined
console.log(arr.length) //7

arr[0] = "brinto"
console.log(arr) //['brinto', 1, 2, 3, 4, 'good', true]

arr[7] = "new"
console.log(arr) //['brinto', 1, 2, 3, 4, 'good', true, 'new']

//Array Methods

console.log(arr.push("last")) //8
console.log(arr) //['brinto', 1, 2, 3, 4, 'good', true, 'new', 'last']

console.log(arr.pop()) //'last'
console.log(arr) //['brinto', 1, 2, 3, 4, 'good', true, 'new']

console.log(arr.shift()) //'brinto'
console.log(arr) //[1, 2, 3, 4, 'good', true, 'new']

console.log(arr.unshift("first")) //8   
console.log(arr) //['first', 1, 2, 3, 4, 'good', true, 'new']

console.log(arr.includes("good")) //true
console.log(arr.indexOf("good")) //5
console.log(arr.indexOf("lalalala")) //-1

const arr = arr.join()
console.log(arr) //'first,1,2,3,4,good,true,new'
console.log(typeof arr) //string

const newArr = arr.slice(1,3)
console.log(newArr) //['1', '2']

const newArr2 = arr.splice(1,3) // manipulates the original array
console.log(newArr2) //['1', '2', '3']
console.log(arr) //['first', '4', 'good', true, 'new']