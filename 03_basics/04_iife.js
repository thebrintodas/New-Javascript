// Immediately Invoked Function Expression (IIFE). It's a function that runs as soon as it is defined. Why would you use it? To create a new scope and avoid polluting the global scope.

(function printName() {
    let username = 'brinto'
    console.log(username) //brinto
})(); // here ; is must

(function printagain(){
    let username = 'brinto again'
    console.log(username) //brinto again
})();

(() => {
    let username = 'brinto arrow'
    console.log(username) //brinto arrow
})();

((name) => {
    console.log(name) //brinto hahah
})("Brinto hahah");

