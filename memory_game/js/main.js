console.log("Up and running!");
/*
var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"
*/

/*
var cards = [ "queen", "queen", "king", "king" ]

*/

var cards = [ 
{ 
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{ 
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{ 
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

]; 
var cardsInPlay = []

var checkForMatch = function() { if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
} 
}

var flipCard = function (cardId) {
/*
	var cardOne = cards [0]
cardsInPlay.push('cardOne');

console.log("User flipped " + cardOne);

var cardTwo = cards [1]
cardsInPlay.push('cardTwo')
console.log("User flipped " + cardTwo)
*/
checkForMatch();
	if (cardsInPlay.length === 2) {
alert("Sorry, try again.");
} else if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
}

cardsInPlay.push(cards[cardId].rank); 

console.log("User flipped " + cards[cardId].rank);



}

flipCard(0);
flipCard(2);

cards.cardImage;
cards.suits;



