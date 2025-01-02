// Dates***********

// date is a object
// months starts from 0 in javascript
// if month in written in single digit it will in array
// if you write in dd/mm/yyyy then your month start from 1 as written in 23/01/2025

// important date method
newDate.toLocalstring('default',{
    weekdays:"long",
})

let myDate = new Date()
console.log(myDate.toString());

// ********** Time ***********

// to do a comparison always do in milli seconds
console.log(Math.floor(Date.now()/1000));
