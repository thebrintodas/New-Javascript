const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

mynums.map((n) => n+10)
console.log(mynums) // original array is not changed because map creates a new array

// to change the original array we need to assign the result of map to a new variable

const newnums = mynums.map((num) => num * 10);
console.log(newnums)

const newnewnums = mynums
                .map((num) => num * 100)
                .map((num) => num + 5)
console.log(newnewnums)// chaining map functions

console.log("***************************************")

const Newnewnums = mynums
                .map((num) => num * 100)
                .map((num) => num + 5)
                .filter((num) => num > 500)
console.log(Newnewnums)// chaining map and filter functions


