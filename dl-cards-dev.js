var fs = require('fs');
var sample = {
  "Air Elemental": {
    "artist": "Kev Walker",
        "cmc": 5,
        "colorIdentity": [
        "U"
    ],
        "colors": [
        "Blue"
    ],
        "flavor": "Pray that it doesn't seek the safety of your lungs.",
        "id": "d95ed5c4283d724d84f3f4351c02ae111f567d4d",
        "imageName": "air elemental",
        "layout": "normal",
        "manaCost": "{3}{U}{U}",
        "multiverseid": 393817,
        "name": "Air Elemental",
        "number": "13",
        "power": "4",
        "rarity": "Uncommon",
        "subtypes": [
        "Elemental"
    ],
        "text": "Flying",
        "toughness": "4",
        "type": "Creature - Elemental",
        "types": [
        "Creature"
    ]
  }
}
var stringData = "export var RAW_CARD_DB = " + JSON.stringify(sample, null, " ") + ";";
fs.writeFile("www/app/services/card-db.service.mock-data.ts", stringData);
