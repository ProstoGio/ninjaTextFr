const button=document.getElementById("ninjabutton");
button.addEventListener("click", function(){
  document.getElementById("ninjatext").innerHTML="</br></br>";
  document.getElementById("guest").innerHTML="Omg, he vanished like a ninja Lol! I wanna be ninja too :(! Try to do same thing cmon!!";
  button.addEventListener("click", function(){
    document.getElementById("guest").innerHTML="";
  });
});
