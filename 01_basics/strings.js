const name = "brinto"
const count = 60
console.log(name + " has " + count + " apples"); //backdated

console.log(`${name} has ${count} apples`); //modern way, template literals, using backticks

console.log(name[0])

const name2 = new String("brinto") //creates string object, not recommended

console.log(name.length); //object
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("i"));

const new_name = name.substring(0,3)
console.log(new_name) //bri

const new_name2 = name.slice(0,3)
console.log(new_name2) //bri

const new_name3 = name.slice(-3) //starts from end
console.log(new_name3) //to

const new_name4 = "    brinto    "
console.log(new_name4.trim()) //removes spaces from both ends

console.log(name.replace("br","jo")) //jonito

console.log(name.includes("rin")) //true

const arr = "apple, banana, mango"
const fruits = arr.split(", ") //splits based on comma and space
console.log(fruits) //['apple', 'banana', 'mango']

// follow documentation for more string methods in mdn 