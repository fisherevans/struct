console.log("Make sure to run 'npm install request fs' first");
var request = require("request");
var fs = require('fs');

console.log("Downloading latest cards");
request({
  url: "http://mtgjson.com/json/AllSets.json",
  json: true
}, function (error, response, body) {
console.log("Got the cards, transoforming them");
  var setMap = response.body;
  var setArray = [];
  for (var setCode in setMap) {
      if(setMap.hasOwnProperty(setCode)) {
        var set = setMap[setCode];
        set["setCode"] = setCode;
        setArray.push(set);
    }
  }
  setArray.sort(function(a,b) {
    if(a.releaseDate < b.releaseDate) return -1;
    else if(a.releaseDate > b.releaseDate) return 1;
    else return 0;
  });
  var cards = {};
  setArray.forEach(function(set) {
    set.cards.forEach(function(card) {
      if(card["type"]) {
        card.type = card.type.replace(/[^a-zA-Z0-9 ]/, "-");
      }
      if(cards[card.name] && cards[card.name].multiverseid && !card.multiverseid) {
        // dont
      } else {
        cards[card.name] = card;
      }
    })
  });
  console.log("Saving the new json");
  var stringData = JSON.stringify(cards, null, " ");
  stringData = stringData.replace(/[—]/, "-");
  fs.writeFile("www/cards.json", stringData);
});
