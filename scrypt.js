let screen=document.getElementById("screen");
button= document.querySelectorAll("button");
let x="";

for(iteom of button){
    iteom.addEventListener('click', (e)=>{
buttontext=e.target.innerText;
console.log(buttontext);
x+=buttontext;
screen.value=x;
 
if(buttontext=="c"){
  x="";
screen.value=x;
}
else if(buttontext="="){
screen.value=eval(x);
}
    }
 
  
    )
}