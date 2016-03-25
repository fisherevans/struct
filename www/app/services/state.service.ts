import {Card} from "../interfaces/card.interface";
import {CardDBService} from "./card-db.service";
import {Deck} from "./../classes/deck.class";
import {Injectable} from "angular2/core";

@Injectable()
export class StateService {
    selectedCard:Card = null;
    deck:Deck = null;

    constructor(private _cardDB:CardDBService) {

    }

    setDeck(deck:Deck):void {
        this.deck = deck;
    }

    getDeck():Deck {
        return this.deck;
    }

    setSelectedCard(cardName:string):void {
        if(cardName == null) {
            this.selectedCard = null;
        } else {
            this.selectedCard = this._cardDB.getCard(cardName);
        }
    }

    getSelectedCard():Card {
        return this.selectedCard;
    }
}