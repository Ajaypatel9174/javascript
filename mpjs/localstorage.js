

let fruits=["apple","banana","mango","grapes"]



let sendData=()=>{
localStorage.setItem("arr", JSON.stringify(fruits))
localStorage.setItem("Age",24)

location.reload()
}

let getData=()=>{
 console.log(JSON.parse(localStorage.getItem("arr")))
}