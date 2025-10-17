// reduce method: to reduce an array to a single value

const mynums = [1,2,3]

const myTotal = mynums.reduce(function(acc,cur) {
    console.log(`acc: ${acc} | cur: ${cur}`)
    return acc + cur
}, 3) // initial value is 3
console.log(myTotal) // 9 (3(initial) + 1 + 2 + 3)

mynums.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
console.log(mynums) // original array is not changed

const sum = mynums.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
console.log(sum) // 6 

const shoppingCart = [
    {item: 'phone', price: 699},
    {item: 'laptop', price: 999},
    {item: 'monitor', price: 300},
    {item: 'mouse', price: 50},
]

const totalPrice = shoppingCart.reduce((total, product) => total + product.price, 0)
console.log(totalPrice) // 2048