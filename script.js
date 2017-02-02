alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
alphabet = alpha.split('');
var guess;
var hang;
var counter = 0;
count = 6;
imgCount = 1;
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
  // bo.css('background-color','rgb(101,76,23)');
  // bo.css('background-repeat', "no-repeat");
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
  bo = $('body');
  bo.css('background-image', "url(https://untroubled.org/backgrounds/metal/bg3.jpg)");
  bo.css('background-repeat', "repeat-y");
  // hiding the rules button and showing the home&play
  document.getElementById('rules').style.display = "none";
  document.getElementById('home').style.display = "block";
  document.getElementById('play').style.display = "block";
}

$('#home').on('click',revertBack);
function revertBack() {
  bo = $('body');
  bo.css('background-image', "url(https://untroubled.org/backgrounds/metal/bg3.jpg)");
  bo.css('background-repeat', "repeat-y");
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
  //var i = 0;
  if (hang.indexOf(guess)!= -1) { // creating the checker to see if letter is in index
    counter++;
    for (var i = 0; i < hang.length; i++) {
      // iterating through the array
      console.log(hang.indexOf(guess,i));
      console.log("counter: " + counter);
      if (hang.indexOf(guess,i)) {
        $('.' + guess).css('color','rgba(0,0,0,1)');
        // changing the opacity of the letter if matching
        if (counter == hang.length) {
          setTimeout(function() {location.reload();}, 1000); //reset
        }
      }
      // console.log('success');
      // break;
    }
  }
  else {
    //runs only if the letter does not match
    console.log('try again');
    count --;
    //setting a count for the alert
    imgCount++;
    //setting a count to load the images
    $('img').attr('src',"img/hangman"+ imgCount +".jpg")
    //updating the images with hangman parts
    if (count == 0) {
      //alert("GAME OVER");
      setTimeout(function() {$('.game-wrapper').html("<img src='img/game_over.png'>");}, 1000);
      setTimeout(function() {location.reload();}, 3000); //reloads the page after the game is lost
    }
  }
}

function board() {
  for (var i=0;i<hang.length;i++) {
    // creating the divs for the word
    $('.game').append('<div class="'+hang[i]+'">'+hang[i]+'</div>').text();
  }
  $('.game').append('<img src="img/hangman1.jpg" alt="hangman">');
  // setting the inital hangman image
}
