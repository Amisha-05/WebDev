var RandomNumber1= Math.floor(Math.random() *6) + 1;

var RandomDiceNo1="dice"+RandomNumber1+".png";

var RandomImage1="images/"+RandomDiceNo1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",RandomImage1);



var RandomNumber2=Math.floor(Math.random()*6)+1;

var RandomDiceNo2="dice"+RandomNumber2+".png";

var RandomImage2="images/"+RandomDiceNo2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",RandomImage2);


if(RandomNumber1>RandomNumber2)
{
   document.querySelector("h1").innerHTML="player 1 wins🥳";
}
else if(RandomNumber1<RandomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins🥳";
}
else
{
    document.querySelector("h1").innerHTML="uhuh Draw";
}

