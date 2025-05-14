// //array

// const number = [1,2,3,4,5,6];

// console.log(number[0]);
// let a = number[1];
// console.log(a);

// //constructar

// const colors = new Array();

// colors[0] = "red";
// colors[1] = "blue";
// colors[2] = "orange";

// console.log(colors);


// const mixed = [10,20,"jhon",true,{age: 23,city:"bhopal"}];


// console.log(mixed[0]);
// console.log(mixed[2]);
// console.log(mixed[4].age);

// let x;

// //return the index number of an elemet

// x = number.length;

// x = number.indexOf(5);
// x = number.indexOf(7);

// console.log(x);


// //push method adds an elrment to the end of an arry

// number.push(7);

// //pop method remove an element form the last of an array
// number.pop();
// console.log(number);

// //unshift adds an element to the start of an array

// number.unshift(10);

// console.log(number);

// //shift method remove element form the start

// number.shift();

// console.log(number);

// //reverse

// number.reverse();
// console.log(number);

// //convert array to string

// x = number.toString();
// x = number.join();

// //(starting) index no of element to remove ,elements to  add)
// x = number.splice(0,3,100,200,300);
// console.log(x);


// //chaining

// const arr = [10,20,30,40,50,60,70,];

// // x = arr.slice(1,4) .reverse().toString().charAt(0);
// console.log(x);

// const fruits = ["apple","kiwi","orange"];
// const veg = ["pattato","tomato","peas"];

// let full = [fruits,ve]


// //spread operater (...)
// //it copies a part of an array or a complete arraytoa another array
// const num1 = [10,20,30,40,50];

// const num2 = [10,20,30,40,50];

// const num3 = [...num1,...num3];

// console.log(num3);


//isArray , .form

// const x = Array.isArray(num1);
// console.log(x);


// const y = Array.from('12345');
// console.log(y);

//destructring

// const arr = [1,2,3,4,5,6,7,8,9];

//const a = arr[0];
//const b = arr[1];

// const [a,b,c,d ...rest] = arr;
// console.log(a,b,c,d);
// console,log(rest);

// const arr =[1,2,3,4,5];
// arr.push(6);
// arr.unshift(0)
// arr.reverse();
// console.log(arr);

// const arr1 =[1,2,3,4,5];
// const arr2 =[5,6,7,8,9,10];
// arr1.pop();
// const  arr3=[...arr1,...arr2];
// console.log(arr3);

//object literal

// const person={
//     name : "jhon",
//     age : 45,
//     isEligible : true,
//     addres :{
//         state : "mp",
//         country : "india"



//     },
//      hobbies : ["dance " ,"singing"],
//      greet: function(){
//         console.log("hello");
//      }
// }
// console.log(person.name);
// console.log(person['name']);
// console.log(person.isEligible);
// console.log(person.addres.country);
// console.log(person.hobbies[1]);
// person.greet();


//  const person={
//     name : "jhon",
//     age : 45,
//     isEligible : true,
//     addres :{
//         state : "mp",
//         country : "india"
//     },


//  };
//  //update
//  person.age = 67;
//  //add
//  person.hasAddress = true;
//  console.log(person);


//spread operater(...)
// const obj1={

//     a:1,
//     b:2,
// };
// const obj2 ={
//    c:3,
//    d:4,

// };

// const obj3={...obj1,...obj2};

// console.log(obj3);

//array of objects

// const student =[

// {name:"ram",id:1,cource:"frontend"},
// {name:"rohit",id:2,cource:"backend"},
// {name:"rishav",id:3,cource:"fullstack"},
// {name:"gaurav",id:4,cource:"python"},

// ];

// console.log(student[0].cource);
// console.log(student[1].name + " "+student[1].id+" "+student[1].cource)
// console.log(`${student[2].name}${student[2].id}${student[2].cource}`);
    

const car ={

    color:"red",
    model:2024,
    brand:"ford",




};
//const a = car.color;
//const b = car.model

const { color,model,brand} = Car;

console.log(color,model,brand);

const {color:a,model:b,brand:c}=car;

console.log(a,b,c);

//object to json string 

const user ={

name:"jhon",
id:1,
age:32,
city:"bhopal"
};
console.log(user);

const data = JSON.stringify(user);
console.log(data);

//json string to object
const updatedData= JSON.parse(data);
console.log(updatedData);


const liberary =[

title



]