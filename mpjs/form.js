let validate=()=>{
    let Name=document.querySelector("#name").value.trim()
    let Email=document.querySelector("#email").value.trim()
    let number=document.querySelector("#number").value.trim()
    let pass=document.querySelector("#pass").value.trim()
    let cpass=document.querySelector("#cpass").value.trim()

    let errname=document.querySelector("#errname")
    let erremail=document.querySelector("#erremail")
    let errnumber=document.querySelector("#errnumber")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    errname.innerHTML=""
    erremail.innerHTML=""
    errnumber.innerHTML=""
    errpass.innerHTML=""
    errcpass.innerHTML=""



if(Name==""){
    errname.innerHTML="plese enter name"
    return false
}
else if(Email==""){
    erremail.innerHTML="plese enter email"
    return false
}

else if(number==""){
    erremail.innerHTML="plese enter number"
    return false
}
else if(pass==""){
    erremail.innerHTML="plese enter pass"
    return false
}

else if(cpass==""){
    erremail.innerHTML="plese enter cpass"
    return false
}

else if(number.length!=10){
    errnumber.innerHTML="plese enter valid number"
    return false
}
else if(isNaN(number)){

 errnumber.innerHTML="plese enter number only"
 return false

}
else if( !(Email.includes("@")&& Email.includes(".com"))){

    erremail.innerHTML="plese enter valid email"
    return false
}
else if(pass!=cpass){
    errpass.innerHTML="plese enter same password"
    document.querySelector("#cpass").value=""
    document.querySelector("#cpass").focus();
    return false
}






else if(!(pass.match(/[12345667890]/)&&
    pass.match(/[@#$%^&*()]/)&&
    pass.match(/[a-z]/)&&
    pass.match(/[A-Z]/)
)){
    errcpass.innerHTML="plese enter strong password"
    return false
}

}