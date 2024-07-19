// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("01-14-2023")
// let myCreatedDate = new Date("2023-01-15") //While formating date, month index start form 1
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(myTimeStamp/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1); // Month index start from 0
// console.log(newDate.getDay());
// console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);