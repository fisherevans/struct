import {Component, OnInit, EventEmitter} from 'angular2/core';
import {Input} from "angular2/core";

import {Board} from "../../classes/board.class";
import {CardDBService} from "../../services/card-db.service";
import {ForObjectsPipe} from "../../pipes/for-objects.pipe";
import {BoardCardsPipe} from "../../pipes/board-cards.pipe";
import {CardLineComponent} from "../card-line/card-line.component";
import {BoardCategoriesPipe} from "../../pipes/board-categories.pipe";
import {DeckManager} from "../../classes/deck-manager.class";
import {CardReference} from "../../interfaces/card-reference.interface";

@Component({
    selector: 'board',
    inputs: ['board', 'deckManager'],
    templateUrl: 'app/components/board/board.component.html',
    styleUrls: ['app/components/board/board.component.css'],
    directives: [CardLineComponent],
    providers: [CardDBService],
    pipes: [BoardCategoriesPipe]
})

export class BoardComponent implements OnInit {
    board: Board;
    deckManager: DeckManager;

    constructor(private _cardDB: CardDBService) {
    }

    getCard(cardName: string) {
        return this._cardDB.getCard(cardName);
    }

    getTotal():number {
        var total:number = 0;
        var cards = this.board.cards;
        Object.keys(cards).map(function(name) {
            total += cards[name].count;
        });
        return total;
    }

    getCategoryTotal(category): number {
        var total:number = 0;
        category.cards.forEach(function(cardRef:CardReference) {
            total += cardRef.count;
        });
        return total;
    }

    ngOnInit() {
    }
}