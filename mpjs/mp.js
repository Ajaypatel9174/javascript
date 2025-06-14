let store=""
let dis=(value)=>{
    let screen=document.querySelector("#display")

    store=store+value
        
    screen.innerHTML=store
}

let res=()=>{

    let screen=document.querySelector("#display")

    store=eval(store).toString()       


    screen.innerHTML=store
}


let del=()=>{

    let screen=document.querySelector("#display")
    tore=store.slice(0,-1)
     screen.innerHTML=store
    

}

let ac=()=>{

let screen=document.querySelector("#display")
store=""
screen.innerHTML=store
}