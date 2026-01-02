const button=document.getElementById("ninjabutton");
let ind = false;
button.addEventListener("click", function(){
  if(ind == false){
    document.getElementById("ninjatext").innerHTML="</br></br>";
    ind = true;
  } else {
    document.getElementById("ninjatext").innerHTML="";
    ind = false;
  }
});
