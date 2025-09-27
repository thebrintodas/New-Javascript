// read documentation from mdn 

let mydate = new Date()
console.log(mydate) // current date and time 2025-09-26T20:10:52.282Z
console.log(mydate.toString()) // Fri Sep 27 2024 01:10:52 GMT+0500 (Pakistan Standard Time)
console.log(mydate.toDateString()) // Fri Sep 27 2024
console.log(mydate.toTimeString()) // 01:10:52 GMT+0500 (Pakistan Standard Time)
console.log(mydate.toISOString()) // 2024-09-26T20:10:52.282Z

let specificDate = new Date('2020-01-01 10:00:00')
console.log(specificDate.toString()) // Wed Jan 01 2020 10:00:00 GMT+0500 (Pakistan Standard Time)

let specificDate2 = new Date(2020, 0, 1, 10, 0, 0) // month is 0-indexed
console.log(specificDate2.toString()) // Wed Jan 01 2020 10:00:00 GMT+0500 (Pakistan Standard Time)
console.log(specificDate2.toLocaleString()) // 2020-01-01T05:00:00.000Z

let mycreatedDate = new Date(2025,0,23) //months start with 0
console.log(mycreatedDate.toString()) // Thu Jan 23 2025 00:00:00 GMT+0500 (Pakistan Standard Time)

let createddate = new Date('01-23-2025') //mm-dd-yyyy

let timestamp = Date.now() // milliseconds since epoch
console.log(timestamp) // 1727377852282

let newdate = new Date()
console.log(newdate)
console.log(newdate.getmonth()+1)
console.log(newdate.getDay())

newdate.toLocaleString('default',{month:'long'}) // September
newdate.toLocaleString('default',{month:'short'}) // Sep
newdate.toLocaleString('default',{weekday:'long'}) // Friday
newdate.toLocaleString('default',{weekday:'short'}) // Fri