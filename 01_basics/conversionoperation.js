let score = "33"
let new_score = Number(score)
console.log(typeof(score))
console.log(typeof(new_score))

let scr = "33nm"
let new_scr = Number(scr)
console.log(new_scr) // Nan //

// let new = null // new cannot be used as variable name, reserved keyword

let new1 = null
let new2 = String(new1)
console.log(typeof(new2)) // string
let new3 = Number(new1)
console.log(new3) // 0

let now = true
let new_now = Number(now)
console.log(new_now) // 1

let fals = false
let new_fals = Number(fals)
console.log(new_fals) // 0

let x = ''
let new_x = Boolean(x)
console.log(new_x) // false

let y = 'hello'
let new_y = Boolean(y)
console.log(new_y) // true

let z = 0
let new_z = Boolean(z)
console.log(new_z) // false