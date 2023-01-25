let now = new Date();
console.log(now);

let dt = new Date(0); // Reference Date, 0 milliseconds + from the OG reference
console.log(dt);

let newDate = new Date('2029-09-03');
console.log(newDate);

// Date(year, month, date, hours, minutes, seconds, milliseconds)
let dt2 = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(dt2);

let yr = newDate.getFullYear();
console.log('The year is', yr);

let dt3 = newDate.getDate();
console.log('The date is', dt3);

let month = newDate.getMonth();
console.log('The month is', month);

let hours = newDate.getHours();
console.log('The hours is', hours);

newDate.setDate(39)
console.log(newDate);

console.log(Date.now());

// setInterval(updateTime, 1000);
// function updateTime(){
//     time.innerHTML = new Date();
// }