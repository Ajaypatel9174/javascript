let validate=()=>{





let Name=document.querySelector("#name").value.trim()
let number=document.querySelector("#number").value.trim()
let email=document.querySelector("#email").value.trim()
let pass=document.querySelector("#pass").value.trim()
let cpass=document.querySelector("#cpass").value.trim()



  let  errname=document.querySelector("#errname")
  let  errnumber=document.querySelector("#errnumber")
  let  erremail=document.querySelector("#erremail")
  let  errpass=document.querySelector("#errpass")
  let  errcpass=document.querySelector("#errcpass")

  if(Name==""){
    errname.innerHTML="plese enter name"
    return  false
  }

  
  else if(number==""){
    errnumber.innerHTML="plese enter nuber"
    return  false
  }

  
  else if(email==""){
    erremail.innerHTML="plese enter email"
    return  false
  }


  
  else if(pass==""){
    errpass.innerHTML="plese enter pass"
    return  false
  }

  else if(cpass==""){
    errcpass.innerHTML="plese enter cpass"
    return  false
  }

  else if(number.length!=10){
    errnumber.innerHTML="plese enter valid number"
     return false
  }
    
  else if(isNaN(number)){
  errnumber.innerHTML="plese enter only number"
  return false
  }

  }
