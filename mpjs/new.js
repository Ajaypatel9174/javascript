
let store=""
let dis=(value)=>{
let screen=document.querySelector("#display")
store=store+value
screen.innerHTML=store

    
}
let res=(value)=>{
    let screen=document.querySelector("#display")
    store=eval(store).toString()
    screen.innerHTML=store

}
let del=(value)=>{
    let screen=document.querySelector("#display")
    store=store.slice(0,-1)
    screen.innerHTML=store

}

let ac=(value)=>{
let screem=document.querySelector("#display")
store=store.string=""
screen.innerHTML=store




}