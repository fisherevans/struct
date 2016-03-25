import {Injectable} from 'angular2/core'
import {Deck} from "../classes/deck.class";
import {CardDBService} from "./card-db.service";

@Injectable()
export class SerializeService {
    constructor(private _cardDB: CardDBService) {
    }

    parseDeck(lines:string[]) {
        var deck:Deck = new Deck("", "");
        var writeDeckDesc:boolean = true;
        var activeBoard = "Mainboard";
        var db = this._cardDB;
        lines.forEach(function(line) {
            line = line.trim();
            if(line.indexOf("#") == 0) {
                line = line.replace(/# */, "");
                if(line.indexOf("Deck") == 0) {
                    deck.name = line.replace(/Deck *:/, "").trim();
                    writeDeckDesc = true;
                } else if(line.indexOf("Board") == 0) {
                    activeBoard = line.replace(/Board *:/, "").trim();
                    writeDeckDesc = false;
                } else {
                    if(writeDeckDesc) {
                        deck.description = (deck.description + "\n" + line).trim();
                    } else {
                        if(deck.getBoard(activeBoard) == null) {
                            deck.addBoard(activeBoard, "");
                        }
                        deck.getBoard(activeBoard).description =
                            (deck.getBoard(activeBoard).description + "\n" + line).trim();
                    }
                }
            } else {
                line = line.replace(/#.*/, "").trim();
                if(line.length > 0) {
                    var count = 0;
                    var costMatches = line.match(/[0-9]+x? ?/);
                    if(costMatches) {
                        count = +costMatches[0].replace(/[^0-9]/, "");
                    } else {
                        count = 1;
                    }
                    var cardName = line.replace(/([0-9]+x? ?)*/, "");
                    var card = db.getCard(cardName);
                    if(card == null) {
                        throw "Can't find the card: " + cardName;
                    }
                    if(deck.getBoard(activeBoard) == null) {
                        deck.addBoard(activeBoard, "");
                    }
                    var board = deck.getBoard(activeBoard);
                    if(board.cards[cardName]) {
                        board.cards[cardName].count += count;
                    } else {
                        board.cards[cardName] = {
                            card: card,
                            count: count
                        };
                    }
                }
            }
        });
        return deck;
    }
}
