import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";

import {Deck} from "../../classes/deck.class";
import {BoardComponent} from "../board/board.component";
import {Board} from "../../classes/board.class";

@Component({
    selector: 'deck',
    templateUrl: 'app/components/deck/deck.component.html',
    styleUrls: ['app/components/deck/deck.component.css'],
    directives: [BoardComponent]
})

export class DeckComponent implements OnInit {
    public deck: Deck;
    public selectedCardName: string;

    constructor() { }

    public getName(): string {
        return this.deck.name;
    }

    public getDescription(): string {
        return this.deck.description;
    }

    public getBoards(): Board[] {
        return this.deck.boards;
    }

    ngOnInit() {
        this.deck = new Deck("A New Deck", "Some description");
        this.deck.addBoard("Main Board", "The main deck");
        this.selectedCardName = null;
    }
}