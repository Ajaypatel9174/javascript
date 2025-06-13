let validate=()=>{

    let Name=document.querySelector("#name").value.trim()
    let number=document.querySelector("#number").value.trim()

    let errname=document.querySelector("#errname")
    let errnumber=document.querySelector("#errname")

      errname.innerHTML=""
      errnumber.innerHTML=""


    if(Name==""){
        errname.innerHTML="plese enter name"
        return false
    }
    
    else if(number==""){
        errnumber.innerHTML="plese enter number"
        return false
    }
    else if(number.length!=10){
     errnumber.innerHTML="plese correct number"
     return false
    }
    else if(isNaN(number)){
        errnumber.innerHTML="plese enter only number"
        return false
    }


}
