import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";

import {Deck} from "../../classes/deck.class";
import {BoardComponent} from "../board/board.component";
import {Board} from "../../classes/board.class";
import {CardDBService} from "../../services/card-db.service";
import {CardDetailsComponent} from "../card-details/card-details.component";
import {Card} from "../../interfaces/card.interface";
import {DeckManager} from "../../classes/deck-manager.class";

@Component({
    selector: 'deck',
    templateUrl: 'app/components/deck/deck.component.html',
    styleUrls: ['app/components/deck/deck.component.css'],
    providers: [CardDBService],
    directives: [BoardComponent, CardDetailsComponent]
})

export class DeckComponent implements OnInit {
    deck: Deck;
    deckManager: DeckManager;
    selectedCard: Card;

    constructor(private _cardDB: CardDBService) {
        this.deckManager = new DeckManager(this);
    }

    public getName(): string {
        return this.deck.name;
    }

    public getDescription(): string {
        return this.deck.description;
    }

    public getBoards(): Board[] {
        return this.deck.boards;
    }

    cardSelected(cardName) {
        var card = cardName == null ? null : this._cardDB.getCard(cardName);
        this.selectedCard = card;
    }

    ngOnInit() {
        var addDummyCard = function(name:string, count:number, board:Board, db:CardDBService) {
            var card = db.getCard(name);
            var obj = {
                card: card,
                count: count
            };
            board.cards[name] = obj;
        };
        this.deck = new Deck("A New Deck", "Some description");
        var board = this.deck.addBoard("Main Board", "The main deck");
        addDummyCard("Forest", 10, board, this._cardDB);
        addDummyCard("Plains", 99, board, this._cardDB);
        addDummyCard("Swamp", 10, board, this._cardDB);
        addDummyCard("Doran, the Siege Tower", 4, board, this._cardDB);
        addDummyCard("Air Elemental", 4, board, this._cardDB);
        this.selectedCard = null;
    }
}