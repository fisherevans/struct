import {Component, OnInit, EventEmitter} from 'angular2/core';
import {Input} from "angular2/core";

import {Board} from "../../classes/board.class";
import {CardDBService} from "../../services/card-db.service";
import {CardLineComponent} from "../card-line/card-line.component";
import {BoardCategoriesPipe} from "../../pipes/board-categories.pipe";
import {StateService} from "../../services/state.service";
import {CardReference} from "../../interfaces/card-reference.interface";

@Component({
    selector: 'board',
    inputs: ['board'],
    templateUrl: 'app/components/board/board.component.html',
    styleUrls: ['app/components/board/board.component.css'],
    directives: [CardLineComponent],
    pipes: [BoardCategoriesPipe]
})

export class BoardComponent implements OnInit {
    board: Board;

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