// if
if (true) {
  console.log("This will always run");
}
if (1==2) {
  console.log("This will never run");
}else {
  console.log("This will always run");
}

const age = 18
if (age < 18) console.log("Minor");

if (age >= 18 && age < 65) {
  console.log("Adult");
} else if (age >= 65) {
  console.log("Senior");
} else {
  console.log("Minor");
}

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false

if (userloggedIn && debitCard) {
  console.log("You can make a purchase");
} else if (!userloggedIn) {
  console.log("Please log in to make a purchase");
} else {
  console.log("Please add a debit card to make a purchase");
}

if (userloggedIn || loggedInFromGoogle) {
  console.log("You can make a purchase");
} else {
  console.log("Please log in to make a purchase");
}
