const user = {
    username : 'alice',
    price : 999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}`) //this refers to the current object
        console.log(this)
    }

}
user.welcomeMessage() //alice
console.log(this.username) //undefined, this refers to global object
user.username = 'bob'
user.welcomeMessage() //bob

console.log(this) // {} 

console.log('------------------------------')

function test() {
    let username = 'brinto'
    console.log(this.username) //undefined, this doesnt work in functions, only in objects
}
test() //undefined
console.log(test()) //undefined because doesnt return anything
console.log('++++++++++++++++++++++++++++++++++')
const user2 = () => {
    let username = 'brinto'
    console.log(username) //brinto, arrow functions dont have their own this, they take this from the surrounding context
    console.log(this.username) //undefined, doesnt work in arrow functions either
    console.log(this) // {}
} 
user2()

console.log('===============================')

const addtwo = (num1,num2) => {
    return num1 + num2
}
console.log(addtwo(3,4)) //7

const addthree= (num1,num2,num3) => (num1 + num2 + num3) //implicit return
console.log(addthree(3,4,5)) //12 doesnt need return keyword or curly braces here is written in single line