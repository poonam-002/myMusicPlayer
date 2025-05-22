var numberOfSongs = document.querySelectorAll(".circle").length;

for(var i=0 ; i<numberOfSongs ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    });
var buttoninnerHTML = this.innerHTML;

switch(buttoninnerHTML){
  
  case "a":
  var salamat = new Audio('salamat.mp3.mp3');
  salamat.play();
  break;

  case "b":
  var armaan = new Audio('armaan.mp3');
  armaan.play();
  break;
  
  case "c":
  var palak = new Audio('aashiqui.mp3');
  palak.play();
  break;

  case "d":
  var darshan = new Audio('mannat.mp3');
  darshan.play();
  break;
  
  case "e":
  var shreya = new Audio('pal.mp3');
  shreya.play();
  break;
  
  default:
  console.log("play your favourite singers song!");
  
}


  document.querySelectorAll("h2")[i].addEventListener("mousemove",function(){

   this.style.color="PaleVioletRed";
  }) 

}
