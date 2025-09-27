//singleton object means only one object is created

//object(like dict in python) literals:

const mysym = Symbol('key1')
const user = {
    name: 'Brinto',
    age: 24,
    [mysym]: "key1", //as it is a Symbol
    "location": 'Dhaka',
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Friday'],
}
console.log(user['age'])
console.log(user[mysym]) //accessing symbol key
console.log(user.name) // will work as it is not a string
// console.log(user.location) // will not work as it is a string
console.log(user["location"]) // will work every time 

user['isLoggedIn'] = false //updating a value

// Object.freeze(user) //freeze the object, no changes allowed, if we try to change it will not show any error but will not update the value.
user.age = 50 //will not work as the object is frozen
console.log(user)

user.greeting = function() { //adding a method to the object
    console.log('Hello User')
}
//console.log(user.greeting()) //error not a function yet as object is frozen
console.log(user.greeting) //undefined

// after unfreezing the object

console.log(user.greeting()) //will work 

user.greeting2 = function() { //adding another method to the object
    console.log(`Hello ${this.name}`) //using this keyword to access the object property
}
console.log(user.greeting2()) // runs the method

// Singleton object:
const tinderUser = new Object() //{}, creating an object using Object constructor
tinderUser.id = '123abc'
tinderUser.name = 'Brinto'
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userFullname: 'Brinto',
        lastname: 'Das'
    }
} // object inside an object
console.log(regularUser.fullname.lastname) //accessing nested object

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'} 

const obj3 = Object.assign({}, obj1, obj2) //merging two objects, first argument is the target object, rest are source objects
console.log(obj3)

const obj4 = {...obj1, ...obj2} //spread operator to merge two objects
console.log(obj4)

const users =[
    {userId: 1, userName: 'Brinto'},
    {userId: 2, userName: 'John'},
    {userId: 3, userName: 'Jane'},
]

console.log(Object.keys(tinderUser)); //keys of the object stored in an array
console.log(Object.values(tinderUser)); //values of the object stored in an array
console.log(Object.entries(tinderUser)); //key-value pairs of the object stored in an array of arrays

console.log(tinderUser.hasOwnProperty('name')); //check if the object has a property, returns true or false
console.log(tinderUser.hasOwnProperty('age')); //false

const course = {
    coursename: 'JavaScript',
    price: '999',
    courseInstructor: 'Brinto'
}

const {courseInstructor} = course //destructuring the object
console.log(courseInstructor) //accessing the destructured value
  