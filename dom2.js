let h1 = document.getElementById("dom1");

h1.style.color="red";
h1.style.backgroundColor="green";

let para=document.getElementById("para");
 para.style.cssText=
 "color:green ; background-color:blue;border:10px solid red ; border-radius:40px;font-style:italic;";

function change(){

     let input=document.getElementById("myin");
     input.value="delhi";
}


function change1(){

     let h1=document.getElementById("myin").value;
     document.getElementById("heading").innerText=h1;

    
}
//the addEventlistener() method attaches an event andler to the specified element.

let button=document.getElementById("btn")
button.addEventListener("click",function(){       

    console.log("button clicked");
    h1.style.color="yellow";
})
