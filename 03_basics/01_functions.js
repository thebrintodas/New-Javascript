function addTwoNumbers(num1, num2) {

  return num1 + num2;
}
const res = addTwoNumbers(5, 7);
console.log(res);

function loginUserMessage(username){
    if(username === undefined) {
        return "Please enter a username";
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("sammy"));

function calculatePrice(...items) {
    return items; // array of items
}
console.log(calculatePrice("shoes", "pants", "kurta", "socks"));
const user = { 
    username: "sammy", 
    password: "12345" 
}
function handleObject(obj) {
    console.log(`Username is ${obj.username} and password is ${obj.password}`);
}
handleObject(user) // user is an object  

const mynewarray = [1, 2, 3, 4, 5];

function returnsecodelement(arr) {
    return arr[1];
}
console.log(returnsecodelement(mynewarray)); // 2
