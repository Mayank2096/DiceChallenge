// var r= Math.floor(Math.random()*6)+1 // 1-6

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImgName = "dice"+randomNumber1 + ".png";
var randomSrc = "./images/"+randomImgName;

var image1= document.querySelectorAll("img")[0] ;

image1.setAttribute("src",randomSrc);


var randomNumber2 =Math.floor(Math.random()*6)+1;
var imgName2="dice"+randomNumber2+".png";
var randomSrc2= "./images/"+imgName2;

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSrc2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins " ;
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 wins ";
}
else{
    document.querySelector("h1").innerHTML= "Draw !" ;   
}

