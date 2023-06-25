var numberofdrums=document.querySelectorAll(".drum").length;
var i;
for (i=0;i<numberofdrums;i++)
//To detect the button press
{ 

document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}


function handleclick()
{

    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}

//To detect the key press
 document.addEventListener("keypress",function(event)
{
makeSound(event.key);
buttonAnimation(event.key);

 }
 )


 function makeSound(key)
 {
    switch(key)
    {
        case"w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case"a":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
        case"s":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case"d":
        var audio=new Audio("sounds/snare.mp3")  ;
        audio.play();
        break;
        case"j":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case"k":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case"l":
        var audio=new Audio("sounds/kick-bass.mp3")  ;
        audio.play();
        break;
        default:console.log(buttonInnerHtml);
        
 }
 }


 function buttonAnimation(currentKey){
     var  Animation=document.querySelector("."+currentKey);
     Animation.classList.add("pressed");
     setTimeout(function(){
        Animation.classList.remove("pressed");},100);x
 }