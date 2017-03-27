$(document).ready(function() {

    var cards = [];
    for (i = 1; i <= 13; i++) {
      if (i === 1) {
        var card = "Ace";
      } else if (i === 11) {
          var card = "Jack";
      } else if (i === 12) {
          var card = "Queen";
      } else if (i === 13) {
          var card = "King";
      } else {
        var card = i;
      }
      cards.push(card);
    }

    var fullDeck = [];
    cards.forEach(function(card) {
      var suit1 = card + " of Clubs";
      fullDeck.push(suit1);
      var suit2 = card + " of Diamonds";
      fullDeck.push(suit2);
      var suit3 = card + " of Hearts";
      fullDeck.push(suit3);
      var suit4 = card + " of Spades";
      fullDeck.push(suit4);
    });

    fullDeck.forEach(function(card) {
      //$(".output").append("<li>"+card+"</li>");
    });

    var suits = ["clubs", "diamonds", "hearts", "spades"];







    cards.forEach(function(card) {
      suits.forEach(function(suit) {
        $(".output").append(
          '<div class="card">' +
          '<img src="img/' +
          suit +
          '.png"/>' +
          "<li>" +
          card +
          " of " +
          suit +
          "</li>" +
          '</div>'


        );
      });
    });

});
