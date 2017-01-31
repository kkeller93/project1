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
var guess;
var hang;
var spare;
count = 6;
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
  // prompt to get the word or phrase
  hang = prompt("Enter a word (no numbers or phrases)").toUpperCase();
  hang = hang.split('');
  // hangman();
  board();
}

// changing the background image when Rules is clicked on
$('#rules').on('click', changeToRules);
function changeToRules(){
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

$('button').on('click', buttonVar)
function buttonVar() {
  guess = this.innerHTML;
  $(this).hide(); // hiding the button that was just clicked
  // console.log(guess);
  hangman();
}

//creating the game functions
function hangman() {
  console.log(hang);
  console.log("guess: ", guess);
  var i = 0;
  if (hang.indexOf(guess)!= -1) { // creating the checker to see if letter is in index
    for (var i = 0; i < hang.length; i++) {
      // iterating through the array
      console.log(hang.indexOf(guess,i));
      // if (hang.indexOf(guess,i)) {
      if (hang[i] == $(this).text()) {
        $('.' + hang[i]).css('color','rgba(0,0,0,1)');
      }
      // console.log('success');
      // break;
    }
  }
  else {
    console.log('try again');
    count --;
    alert("Incorrect Guess, you have " + count+ " lives left");
    if (count == 0) {
      alert("GAME OVER");
      // break;
    }
  }
}

function board() {
  for (var i=0;i<hang.length;i++) {
    $('.game').append('<div class="'+hang[i]+'">'+hang[i]+'</div>').text();
    // $('<div class="hidden"></div>').text(hang[i]).appendTo(".game");
    // spare = $(this).attr('id');
    // console.log(spare);
  }
}

//matching the divs
//if letter matches change opacity to 100% on div .hidden
