const button=document.getElementById("ninjabutton");
let ind = false;
button.addEventListener("click", function(){
  if(ind == false){
    document.getElementById("ninjatext").innerHTML="</br></br>";
    ind = true;
  } else {
    document.getElementById("ninjatext").innerHTML="hey I'm text right? But I am also a Ninja.</br>Want proof ? click here -> ";
    ind = false;
  }
});
