console.log("1"+2) //12
console.log("1"-2) //-1
console.log("1"*2) //2
console.log("1"/2) //0.5

console.log("1"+2+2) //122
console.log(2+2+"1") //41

console.log(+"") //0
console.log(+true) //1
console.log(+false) //0
console.log(+"33nm") //NaN

let count = 0
console.log(count++) //0 (first use then increment)
console.log(++count) //2 (first increment then use)
console.log(count+=1) // prev count =2 +1 =3

console.log(count--) //3 (first use then decrement)
console.log(--count) //1 (first decrement then use)

let count2 = 0
count2++
console.log(count2) //1
++count2 // studyb prefix and postfix in mdn js
console.log(count2) //2
count2+=1
console.log(count2) //3
count2--
console.log(count2) //2
--count2
console.log(count2) //1
count2-=1
console.log(count2) //0