const myNums = [1, 2, 3, 4, 5];

const new_nums = myNums.filter((n)=>n>4);

console.log(new_nums) // [5]

const newNums = myNums.filter((n) => {
    return n > 2;   
})
console.log(newNums) // [ 3, 4, 5 ]

console.log("-------------------")

const newnums = []

myNums.forEach((n) => {
    if (n > 2) {
        newnums.push(n)
    }
})

console.log(newnums) // [ 3, 4, 5 ]

console.log("---------------------------")

const books = [
    { title: "Book One", author: "John Doe", year: 2013, rating: 4.5 },
    { title: "Book Two", author: "Jane Smith", year: 2016, rating: 4.0 },
    { title: "Book Three", author: "Emily Johnson", year: 2011, rating: 3.5 },
    { title: "Book Four", author: "Michael Brown", year: 2018, rating: 4.8 },
    { title: "Book Five", author: "Sarah Davis", year: 2014, rating: 4.2 },
];

let userbooks = books.filter((b) => b.year > 2015 && b.rating > 4.5);

console.log(userbooks) 
// [ { title: 'Book Four',

userbooks = books.filter((b) => {
    return b.year > 2015 && b.rating > 4.5;
})

console.log(userbooks) 
// [ { title: 'Book Four',