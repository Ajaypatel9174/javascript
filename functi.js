// 4 type of function
// no return no parameter



// function display1(){

//     console.log(10+20);

// }
// display1();

//return with no parameter


// function display2(){

// return "hello"

// }

// let result = display2();
// console.log(result);
// alert(result);

//parametre with no return 
// function display3(x,y){

// console.log(x+y);


// }
// display3(10,20);
// display3(34,56);

//parameter with return 

// function display4(x,y){

// return x*y;
// }

// let ans = display4(10,20);
// console.log(ans);

//a function that  will print 

// function qube1(x){

// console.log(x*x*x);



// }
// qube1(5);


function user1(person){
    console.log(`person name is ${person.name} and age is ${person.age}`)
}

user1({

name : "jhon",
age :    23,



});

//function expression


// let myfunction = function(){


// console.log("this is a function experssion");



// };
// myfunction();


// let subtraction = function(x,y){

// console.log(x-y);


// };

// subtraction(10,5);

//arrow function

let myfunction2=()=>{


console.log("this is an arrow function")



}
myfunction2();