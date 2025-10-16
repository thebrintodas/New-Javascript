const coding = ["js","java","python","c++","ruby"]

coding.forEach(function(i){
    console.log(`I love ${i}`)
}) // I love js (next line)I love java(next line) I love python (next line) I love c++(next line) I love ruby(next line)

coding.forEach((i) => {
    console.log(i)
}) // js (next line)java (next line)python (next line)c++ (next line)ruby (next line)

console.log("-------------------------------------")

function printMe(item){
    console.log(item)
}

coding.forEach(printMe) // js (next line)java (next line)python (next line)c++ (next line)ruby (next line)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr)
}) 
// js 0 [ 'js', 'java', 'python', 'c++', 'ruby' ] (next line)
// java 1 [ 'js', 'java', 'python', 'c++', 'ruby' ] (next line)
// python 2 [ 'js', 'java', 'python', 'c++', 'ruby' ] (next line)
// c++ 3 [ 'js', 'java', 'python', 'c++', 'ruby' ] (next line)
// ruby 4 [ 'js', 'java', 'python', 'c++', 'ruby' ] (next line)

console.log("-------------------------------------")

const myCoding = [
    {name: "js", type: "frontend"},
    {name: "java", type: "backend"},
    {name: "python", type: "backend"},
    {name: "c++", type: "system"},
    {name: "ruby", type: "backend"}
]

myCoding.forEach((i)=>{
    console.log(`${i.name} is a ${i.type} language`);
})

