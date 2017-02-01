# project1
Project 1
Main page
- metal background is displayed
- two buttons - 'play' & 'rules'
- user can click on either button

when user clicks on the "rules" button
- rules div will be toggles and the h1/h2/p tags will display showing the rules for how to play Hangman
- displayed at top of page are buttons to go back to home page or go to play the game

when user clicks on "play" button
- background will change to a chalkboard
- alphabet buttons are displayed
- for loop is run to generate buttons through javascript and place the buttons in HTML
- when play button is initally clicked - user is prompted to enter a word
- word is stored in an array and split to be referenced to later when comparing against user inputs
- once word is entered underscores appear on the game page to let the second player know the length of the word
- displayed underneath the underscores is a hangman picture minus the man
- when the user clicks on a letter, the button disappears, which prevents the user from clicking the same letter twice
- toggle function was used to make letters disappear
- when user selects a letter, button selection is compared against the array that the prompted word is stored in
- if letter is correct, the opacity of the letters will change from 100% to 0% (invisible to visible)
- if the letter is incorrect, the hangman picture updates to include a new body part and a counter is set to count down from 6
- the user is only allowed 6 incorrect guesses
- at the 6th incorrect guess the game exits out and displays a game over picture

User Stories:

Story 1: As a user of the hangman game, I want to be able to input a word and then have dashes show on the next screen corresponding to the length of the word so that Player 2 knows how long the word is
Story 2: As a user, I want a game over picture so that I know when the game is done after 6 incorrect guesses
Story 3: As a user, I want to be able to flip between a rules page and a gameplay page so that I can refresh my memory on the rules at any time
Story 4: As a user, I want to the buttons to disappear as I click them so that I will not be able to click on the same letter multiple times
Story 5: As a user, I want a picture of a hangman to update so that I know just how many incorrect guesses I have made and will play more strategically
