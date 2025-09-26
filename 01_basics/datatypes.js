"use strict"; /*treats all js code as newer version*/

// alert(3+3)// we're using node.js, not browser 
console.log(3+3)
let name = "brinto"
let age = 23
let ismarried = false 
console.log(typeof "");
console.log(typeof null); //object

//primitive datatypes: number, string, boolean, null, undefined, symbol, BigInt
//non-primitive/Refrence datatype: object (array, function, object)

const score = false
// score = true //error, const variable can't be reassigned
console.log(score);
// score = true 
// console.log(score); not allowed 

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id==id2) //false, unique

const bigInt = 1234567890123456789012345678901234567890n //at last n, it becomes bigint datatye
console.log(bigInt); 

const arr = ["apple",2]
console.log(arr)

const obj = {name:"brinto", age:23}
console.log(obj)
const func = function(){
    console.log("hello")
}
func()