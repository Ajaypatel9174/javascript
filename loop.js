// for (let i=1; i<=10;i++){
//     console.log(i);
// }


// for (let i=1;i<100;i++){
   
//     if (i%2==0){
   

//      console.log(i);

//     }
      
   
// }
        

// let i=1;
// while(1<=100){
//     console.log(i);
//     i++;
// }




// do while
// do{
//     console.log(y);
// }



// the for in loop

// the java script for in statment loops through the propertis of an objects

// const person = {

//     name:"jhon",
//     age: 34,
//     city: "bhopal",

// };

// for (let x in person){
//     console.log(person[x]);
// } 



// in for in loop x denotes the index number of in array
// const numbers=[10,20,30,50];

// for (let x in numbers){
//     console.log(numbers[x])
// }


// for of loop

// const array1 =[100,300,200,900];

// for (let x of array1){
//     console.log(x);
// }

// let str ="javascript";
// for (let x of str){

//     console.log(x);
// }

// for each loop
// the forEach() method calls a functiom (a callback function) once or each array elements

// const num =[34,45,234,13];

// let text=" ";
// num.forEach(myfunction);
// function myfunction(x){
//     text+=x+" ";

// }
// console.log(text)

// const num=[10,20,30,40];

// let text="";
// num.forEach(myfunction);
// function myfunction(x){
//     console.log(x*x);
// }

// map method
// the Map() method is used for creating a new arry from an existing one ,applying a function to each one of the element of the array

// const num1=[1,2,3,4,5];
// const newArray = num1.map(myfunction);

// function myfunction(x){
//     return x*x;
// }
// console.log(newArray);

// const fruits=["apple","cherry","kiwi","grapes"];

// let text ="<ul>";

// fruits.map(function(x){


//    text+= `<li>${x}</li>`;




// });

// text+= "</ul>"

// document.getElementById("demo").innerHTML=text;


// const person=[
// {
// name:"harry",
// age:23,

// },

// {
// name:"odin",
// age:24,




// },

// {
// name:"arun",
// age:24,




// },

// ];

// let table=`

// <table border=1px>
// <tr>
// <th>Name</th>
// <th>age</th>
// </tr>


// `;


// person.map((x)=>{
//   table += `
  
//   <tr>
// <td>${x.name}</td>
// <td>${x.age}</td>
// </tr>
// `});


// table+= "</table>";

// document.getElementById("demo1").innerHTML=table;

// // filter


// const number=[10,20,30,40,50,70];

// const newNumber=number.filter(function(x){

//    if (x>30) {
//     return x;
//    }



// })
// console.log(newNumber);

// const students=[
// {name:"rohit",grade:90},
// {name:"rohan",grade:95},
// {name:"ram",grade:80},
// {name:"shayam",grade:70},
// {name:"virat",grade:69}





// ];

// const studentGrade=students.filter(function(x){

// if (x.grade>70){
//     return x;
// }




// })
// console.log(studentGrade);

//reduce method

// const numbers=[123,4,456];
// const value=numbers.reduce(myfunction);
// function myfunction(total,num){
//    return total + num;
// }

// console.log(value);

// const array=[12,34,45];
// for let i=1;i<array;i++;



