//Global Arrays
let randNumberString=[Math.floor(Math.random()*31)+30];
let playerNumber=0;
let wins=0;
let losses=0;
let randNumber=parseInt(randNumberString);
let imageNumber1start=[Math.floor(Math.random()*11)+1];
let imageNumber2start=[Math.floor(Math.random()*11)+1];
let imageNumber3start=[Math.floor(Math.random()*11)+1];
let imageNumber4start=[Math.floor(Math.random()*11)+1];
let imageNumber1=parseInt(imageNumber1start)+1;
let imageNumber2=parseInt(imageNumber2start);
let imageNumber3=parseInt(imageNumber3start);
let imageNumber4=parseInt(imageNumber4start)+1;




//DOM Manipulation
$('.yourNumber').text(playerNumber);
$('.selectedNumber').text(randNumber);




//Assign Numbers To Images


//on Click Events And Populate to Your Number


//Winning and Losing Conditions and Alerts