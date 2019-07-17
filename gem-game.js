$(document).ready(function(){

//Global Arrays
let randNumberString = [Math.floor(Math.random() * 31) + 30];
let playerNumberString = 0;
let wins = 0;
let losses = 0;
let randNumber = parseInt(randNumberString);
let imageNumber1string = [Math.floor(Math.random() * 11) + 1];
let imageNumber2string = [Math.floor(Math.random() * 11) + 1];
let imageNumber3string = [Math.floor(Math.random() * 11) + 1];
let imageNumber4string = [Math.floor(Math.random() * 11) + 1];
let playerNumber = parseInt(playerNumberString);

//Assign Numbers To Images
let imageNumber1 = parseInt(imageNumber1string);
let imageNumber2 = parseInt(imageNumber2string);
let imageNumber3 = parseInt(imageNumber3string);
let imageNumber4 = parseInt(imageNumber4string);

//DOM Manipulation
$('.yourNumber').text(playerNumber);
$('.selectedNumber').text(randNumber);
$('.wins').text(wins);
$('.losses').text(losses);

//Global Functions
function declareWin() {
    alert('You Win!');
    wins++;
    $('.wins').text(wins);
};
function declareLoss() {
    alert('You Lose');
    losses++;
    $('.losses').text(losses);
};
function reset() {
    let randNumberString = [Math.floor(Math.random() * 31) + 30];
    let randNumber = parseInt(randNumberString);
    let playerNumberString = 0;
    let playerNumber=parseInt(playerNumberString);
    let imageNumber1string = [Math.floor(Math.random() * 11) + 1];
    let imageNumber2string = [Math.floor(Math.random() * 11) + 1];
    let imageNumber3string = [Math.floor(Math.random() * 11) + 1];
    let imageNumber4string = [Math.floor(Math.random() * 11) + 1];
    $('.yourNumber').text(playerNumber);
    $('.selectedNumber').text(randNumber);
};

//on Click Events, Populate to Your Number, and check for Win/Loss

$('.image1').on('click', function (event) {
    playerNumber = playerNumber + imageNumber1;
    $('.yourNumber').text(playerNumber);
    if (playerNumber > randNumber) {
        declareLoss();
        reset();
    }
    else if (playerNumber == randNumber) {
        declareWin();
        reset();
    };
});
$('.image2').on('click', function (event) {
    playerNumber = playerNumber + imageNumber2;
    $('.yourNumber').text(playerNumber);
    if (playerNumber > randNumber) {
        declareLoss();
        reset();
    }
    else if (playerNumber == randNumber) {
        declareWin();
        reset();
    };
});
$('.image3').on('click', function (event) {
    playerNumber = playerNumber + imageNumber3;
    $('.yourNumber').text(playerNumber);
    if (playerNumber > randNumber) {
        declareLoss();
        reset();
    }
    else if (playerNumber == randNumber) {
        declareWin();
        reset();
    };
});
$('.image4').on('click', function (event) {
    playerNumber = playerNumber + imageNumber4;
    $('.yourNumber').text(playerNumber);
    if (playerNumber > randNumber) {
        declareLoss();
        reset();
    }
    else if (playerNumber == randNumber) {
        declareWin();
        reset();
    };
})
});