// let d = new Date();
// //const y= new date(year,month,day,hour,min,sec,milli)



// d = new Date("2022-3-12 12:30:45");
// d = new Date("12-3-2022");
// d = new Date("2022/5/13");
// d = new Date("5432445");



// console.log(d);

// const year = d.getFullYear();
// console.log(year);
// const month =d.getMonth();
// console.log(month)
// const day=d.getDay();
// console.log(day)
// const date=d.getDate();
// console.log(date);
// const hour=d.getHours();
// console.log(hour);
// const minutes=d.getMinutes();
// console.log(minutes);
// const sec = d.getSeconds();
// console.log(sec)



let d = new Date();
const day=d.getDay();
switch(day){

    case 0 : console.log("sunday")
    break;
    case 1 : console.log("monday")
    break;
    case  2: console.log("tuesday")
    break;
    case 3: console.log("wednesday")
    break;
    case 4: console.log("thusday")
    break;
    case 5: console.log("friday")
    break;
    case 6: console.log("saturday")
    break;
    default: console.log("eror");
    break;


}

   
