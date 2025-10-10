const userEmail = "brinto@gmail.com"

if (userEmail) {
    console.log("You have an email")
}else{
    console.log("You don't have an email")
}

// falsy values: false, 0, "", null, undefined, NaN, BigInt 0n
// truthy values: all values that are not falsy("0","false",function(){} too are truthy)

let val1;
val1 = 5 ?? 10; // nullish coalescing operator
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10

val1 = undefined ?? 10;
console.log(val1); // 10

val1 = 0 ?? 10;
console.log(val1); // 0

val1 = "" ?? "default";
console.log(val1); // ""

val1 = false ?? true;
console.log(val1); // false

// Terniary Operator:
//-----------------------------

// condition ? true : false

const age = 17;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote); 


