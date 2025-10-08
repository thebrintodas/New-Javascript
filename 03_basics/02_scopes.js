// { }
let x = 0; // global scope
if (true) { //scope starts here
  let x = 1;
  const y = 2;
  console.log(x);
}  // scope ends here

console.log(x); // 0 (uses global scope)

function one() {
  const username = 'alice'
  function two() {
    const website = 'example.com'
    console.log(username) // 'alice' (can access parent scope)
  }
  two()
  //console.log(website) // Error: website is not defined (cannot access child scope)
}
one()
//console.log(username) // Error: username is not defined (cannot access function scope)

if (true) {
  const username = 'alice'
  if (username == 'alice') {
    const website = 'example.com'
    console.log(username) // 'alice' (can access parent scope)
  }
  //console.log(website) // Error: website is not defined (cannot access child scope)
}
//console.log(username) // Error: username is not defined (cannot access block scope)

function addone(num){
  return num + 1
}
console.log(addone(1))

// addtwo(1) // Error: addtwo is not defined
const addtwo = function(num){
  return num + 2
}
console.log(addtwo(1))
