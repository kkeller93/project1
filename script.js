// Main page
// metal background
// two buttons - 'play game' & 'rules'
// user can click on either button
//
// Rules page
// user clicks on initial "rules" button
// once clicked change background and display scroll
// rules displayed on scroll
//
// Game page
// user clicks on play game button changes to chalkboard background
// display alphabet buttons at bottom of the page
// prompt user for a word
// place word in an array
// check the length of the array and display underscores on page
// allow for user to click on letters
// if correct display all of the same letter on the underscore section
// if incorrect display new hangman part
// once all hangman pieces are displayed
// show prompt "you lose"
// if word is guessed
// show prompt "you win!"
// reset gameboard after game is complete

alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
alphabet = alpha.split('');
// placing the alphabet in an array to be referenced to
// console.log(alphabet);
for (var i=0;i < alphabet.length; i++) {
  $('.buttons').append('<button>'+alphabet[i]+'</button>');
  // console.log("test");
}
// hiding the rules and game until it has been clicked
document.getElementById('home').style.display = "none";
$('.game').hide();
$('.rules').hide();

// changing the background image when Play is clicked on
$('#play').on('click', changeToPlay);
function changeToPlay(){
  bo = $('body');
  bo.css('background-image', "url('http://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Download-Chalkboard-Pictures.jpg')");
  // hiding the content from div tag rules and showing game
  $('.game').toggle();
  $('.rules').hide();
  // hiding the play button and showing the home&rules
  document.getElementById('play').style.display = "none";
  document.getElementById('home').style.display = "block";
  document.getElementById('rules').style.display = "block";
  hangman();
}

// changing the background image when Rules is clicked on
$('#rules').on('click', changeToRules);
function changeToRules(){
  bo = $('body');
  bo.css('background-image', "url('http://m.rgbimg.com/cache1nhWrE/users/x/xy/xymonau/600/dKTqsb.jpg')");
  // hiding the content from div tag game and showing rules
  $('.game').hide();
  $('.rules').toggle();
  // hiding the rules button and showing the home&play
  document.getElementById('rules').style.display = "none";
  document.getElementById('home').style.display = "block";
  document.getElementById('play').style.display = "block";
}

$('#home').on('click',revertBack);
function revertBack() {
  bo = $('body');
  bo.css('background-image', "url(https://untroubled.org/backgrounds/metal/bg3.jpg)");
  // hiding the content from div tags game and rules
  $('.game').hide();
  $('.rules').hide();
  // hiding the home button and showing the rules&play
  document.getElementById('home').style.display = "none";
  document.getElementById('rules').style.display = "block";
  document.getElementById('play').style.display = "block";
}

$('button').on('click', print)
function print() {
  console.log(this.innerHTML);
}

//creating the game function
function hangman() {
  hang = prompt("Enter a word or phrase");
  hang = hang.split('');
  console.log(hang);
}
